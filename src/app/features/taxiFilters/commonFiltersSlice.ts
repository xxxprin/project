import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type LocationFilter = "Moscow" | "Regions";

interface CommonFiltersState {
  selectedBanks: string[];
  sliderIndex: number;
  locationFilter: LocationFilter;
  locationConfirmed: boolean;
  hideSalary: boolean;
  hideSpendings: boolean;
}

const initialState: CommonFiltersState = {
  selectedBanks: [],
  sliderIndex: 15,
  locationFilter: "Moscow",
  locationConfirmed: false,
  hideSalary: false,
  hideSpendings: false,
};

const commonFiltersSlice = createSlice({
  name: "commonTaxi",
  initialState,
  reducers: {
    toggleBank(state, action: PayloadAction<string>) {
      state.selectedBanks.includes(action.payload)
        ? (state.selectedBanks = state.selectedBanks.filter(
            (b) => b !== action.payload,
          ))
        : state.selectedBanks.push(action.payload);
    },
    setSliderIndex(state, action: PayloadAction<number>) {
      state.sliderIndex = action.payload;
    },
    setLocationFilter(state, action: PayloadAction<LocationFilter>) {
      state.locationFilter = action.payload;
    },
    confirmLocation(state, action: PayloadAction<LocationFilter>) {
      state.locationFilter = action.payload;
      state.locationConfirmed = true;
    },
    toggleHideSalary(state) {
      state.hideSalary = !state.hideSalary;
    },
    toggleHideSpendings(state) {
      state.hideSpendings = !state.hideSpendings;
    },
  },
});

export const {
  toggleBank,
  setSliderIndex,
  setLocationFilter,
  toggleHideSalary,
  toggleHideSpendings,
  confirmLocation,
} = commonFiltersSlice.actions;

export const commonFilterReducer = commonFiltersSlice.reducer;
