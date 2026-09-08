import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { App } from "../App";
import { createAppStore } from "../app/store";
import { type RootState } from "../app/rootReducer";

declare global {
  interface Window {
    __PRELOADED_STATE__?: Partial<RootState>;
  }
}

const store = createAppStore(window.__PRELOADED_STATE__);

hydrateRoot(
  document.getElementById("root")!,
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>,
);
