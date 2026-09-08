import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { type RootState } from "../app/rootReducer";
import { persistFiltersFromState } from "../server/cookieFilters";
import {
  toggleBank,
  setSliderIndex,
  setLocationFilter,
  confirmLocation,
  toggleHideSalary,
  toggleHideSpendings,
} from "../app/features/taxiFilters/commonFiltersSlice";
import {
  toggleOption,
  toggleHideUltima,
} from "../app/features/taxiFilters/taxiPageSlice";

// https://redux-toolkit.js.org/api/createListenerMiddleware

// const PERSIST_ACTIONS = new Set([
//   toggleBank.type,
//   setSliderIndex.type,
//   "commonTaxi/setSliderIndex",
//   "commonTaxi/setLocationFilter",
//   "commonTaxi/confirmLocation",
//   "commonTaxi/toggleHideSalary",
//   "commonTaxi/toggleHideSpendings",
//   "taxiPage/toggleOption",
//   "taxiPage/toggleHideUltima",
// ]);

export const persistentFiltersListener = createListenerMiddleware<RootState>();

persistentFiltersListener.startListening({
  matcher: isAnyOf(
    toggleBank,
    setSliderIndex,
    setLocationFilter,
    confirmLocation,
    toggleHideSalary,
    toggleHideSpendings,
    toggleOption,
    toggleHideUltima,
  ),
  effect: (_action, listnerApi) => {
    if (typeof window === "undefined") {
      return;
    }

    const state = listnerApi.getState();

    persistFiltersFromState(state);
  },
});

// export const persistFiltersMiddleware: Middleware<{}, RootState> =
//   (store) => (next) => (action) => {
//     const result = next(action);

//     if (
//       typeof action === "object" &&
//       action !== null &&
//       "type" in action &&
//       typeof action.type === "string" &&
//       PERSIST_ACTIONS.has(action.type)
//     ) {
//       if (typeof document !== "undefined") {
//         persistFiltersFromState(store.getState());
//       }
//     }

//     return result;
//   };
