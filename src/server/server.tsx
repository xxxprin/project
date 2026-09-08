import fs from "node:fs";
import path from "node:path";
import express from "express";
import { renderToString } from "react-dom/server";
import { App } from "../App.tsx";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createAppStore } from "../app/store";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { defineCity } from "../components/taxi/Location/defineCity.ts";
import { setLocationFilter } from "../app/features/taxiFilters/commonFiltersSlice.ts";
import cookieParser from "cookie-parser";
import { preparePartialState } from "./cookie/preparePartialState.ts";
import { decodePersistentFilters } from "./cookie/decodePersistentFilters.ts";
import { extractPersistentFilters } from "./cookie/extractPersistentFilters.ts";
import { encodePersistentFilters } from "./cookie/encodePersistentFilters.ts";

const manifestPath = path.resolve("dist/.vite/manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
const COOKIE_NAME = "premium_filters";

const clientEntry = manifest["src/server/client.tsx"];

const css = clientEntry.css
  .map((file: string) => `<link rel="stylesheet" href="/${file}">`)
  .join("");

const app = express();

app.use("/assets", express.static("dist/assets"));
app.use(cookieParser());

function formatCity(city: string) {
  return city === "Moscow" ? city : "Regions";
}

// изменяются фильтры
// ↓
// middleware
// ↓
// encode filters (storeState → SavedFilters)
// ↓
// SavedFilters
// ↓
// encode str
// ↓
// save cookies

// http html request
// ↓
// read cookie
// ↓
// decode filters (str → SavedFilters)
// ↓
// SavedFilters → partialStoreState
// ↓
// createAppStore

// при первом заходе на сайт
//  - проверять по айпи
//  - уточнять у пользователя в бразере, использовать navigator.geolocation
//  - сохранять в куку

// следующий заход
//  - брать из куки

// сохранять все фильтры в куках

app.get("/{*path}", async (req, res) => {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const url = req.originalUrl;
  const filterCookieValue = req.cookies?.[COOKIE_NAME];
  const persistentFilters = decodePersistentFilters(filterCookieValue);
  const initialState = preparePartialState(persistentFilters);

  const store = createAppStore(initialState);

  if (!persistentFilters.locationConfirmed) {
    const ip = "38.180.157.161";
    const city = await defineCity(ip);
    const locationFilter = formatCity(city ?? "");

    store.dispatch(setLocationFilter(locationFilter));

    const filters = extractPersistentFilters(store.getState());
    const result = encodePersistentFilters(filters);

    res.cookie(COOKIE_NAME, result);
  }

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </HelmetProvider>,
  );

  const preloadedState = store.getState();
  const helmet = helmetContext.helmet;

  res.send(`
    <!doctype html>
    <html ${helmet?.htmlAttributes.toString() ?? ""}>
      <head>
        <meta charset="UTF-8" />
        ${helmet?.title.toString() ?? "<title>Premium</title>"}
        ${css}
      </head>

      <body ${helmet?.bodyAttributes.toString() ?? ""}>
        <div id="root">${html}</div>

        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script type="module" src="/${clientEntry.file}"></script>
      </body>
    </html>
  `);
});

app.listen(7890);

// https://vite.dev/guide/ssr
// https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react
