import { configureStore } from "@reduxjs/toolkit";
import { persistentFiltersListener } from "../middleware/persistFiltersMiddleware";
import { type RootState } from "./rootReducer";
import { rootReducer } from "./rootReducer";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

export function createAppStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(persistentFiltersListener.middleware),
  });
}

export type AppStore = ReturnType<typeof createAppStore>;
export type AppDispatch = AppStore["dispatch"];

export const useDispatch = useReduxDispatch.withTypes<AppDispatch>();
export const useSelector = useReduxSelector.withTypes<RootState>();

// useSelector(s => s.taxiPage.hideUltima);

// const d = useDispatch();

// d({type: ""});

//  https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
