import { type RootState } from "../../app/rootReducer";
import { type PersistentFilters } from "../cookieFilters";

export function extractPersistentFilters(state: RootState): PersistentFilters {
  return {
    selectedBanks: state.commonFilters.selectedBanks,
    sliderIndex: state.commonFilters.sliderIndex,
    locationFilter: state.commonFilters.locationFilter,
    hideSalary: state.commonFilters.hideSalary,
    hideSpendings: state.commonFilters.hideSpendings,
    selectedOptions: state.taxiPage.selectedOptions,
    hideUltima: state.taxiPage.hideUltima,
    locationConfirmed: state.commonFilters.locationConfirmed,
  };
}
