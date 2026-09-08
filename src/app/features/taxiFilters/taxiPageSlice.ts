import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaxiService } from "../../../domain/premium/benefits/TaxiBenefit";

type ColumnKey =
  | "bank"
  | "requirements"
  | "perMonth"
  | "perYear"
  | "amountTrip"
  | "yearLimit";

interface TaxiPageState {
  selectedOptions: TaxiService[];
  hideUltima: boolean;
  sortColumn: ColumnKey | null;
  sortDirection: "asc" | "desc";
}

const initialState: TaxiPageState = {
  selectedOptions: [],
  hideUltima: false,
  sortColumn: null,
  sortDirection: "asc",
};

const taxiPageSlice = createSlice({
  name: "taxiPage",
  initialState,
  reducers: {
    toggleOption(state, action: PayloadAction<TaxiService>) {
      const option = action.payload;
      if (state.selectedOptions.includes(option)) {
        state.selectedOptions = state.selectedOptions.filter(
          (o) => o !== option,
        );
      } else {
        state.selectedOptions.push(option);
      }
    },

    toggleHideUltima(state) {
      state.hideUltima = !state.hideUltima;
    },
    setHideUltima(state, action: PayloadAction<boolean>) {
      state.hideUltima = action.payload;
    },
    setSortColumn(state, action: PayloadAction<ColumnKey | null>) {
      state.sortColumn = action.payload;
    },
    setSortDirection(state, action: PayloadAction<"asc" | "desc">) {
      state.sortDirection = action.payload;
    },
    toggleSort(state, action: PayloadAction<ColumnKey>) {
      const key = action.payload;
      if (state.sortColumn === key) {
        state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      } else {
        state.sortColumn = key;
        state.sortDirection = "asc";
      }
    },
  },
});

export const {
  toggleOption,
  toggleHideUltima,
  setHideUltima,
  setSortColumn,
  setSortDirection,
  toggleSort,
} = taxiPageSlice.actions;

export const taxiPageReducer = taxiPageSlice.reducer;
