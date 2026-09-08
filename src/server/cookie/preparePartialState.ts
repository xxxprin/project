import { type RootState } from "../../app/rootReducer";
import { type PersistentFilters } from "../cookieFilters";

export function preparePartialState(
  filters: Partial<PersistentFilters>,
): Partial<RootState> {
  return {
    commonFilters: {
      selectedBanks: filters.selectedBanks ?? [],
      sliderIndex: filters.sliderIndex ?? 15,
      locationFilter: filters.locationFilter ?? "Moscow",
      hideSalary: filters.hideSalary ?? false,
      hideSpendings: filters.hideSpendings ?? false,
      locationConfirmed: filters.locationConfirmed ?? false,
    },
    taxiPage: {
      selectedOptions: filters.selectedOptions ?? [],
      hideUltima: filters.hideUltima ?? false,
      sortColumn: null,
      sortDirection: "asc",
    },
  };
}
