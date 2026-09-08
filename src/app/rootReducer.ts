import { combineReducers } from "@reduxjs/toolkit";
import { commonFilterReducer } from "./features/taxiFilters/commonFiltersSlice";
import { taxiPageReducer } from "./features/taxiFilters/taxiPageSlice";

export const rootReducer = combineReducers({
  commonFilters: commonFilterReducer,
  taxiPage: taxiPageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
