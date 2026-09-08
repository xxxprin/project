import { type RootState } from "../app/rootReducer";
import type { TaxiService } from "../domain/premium/benefits/TaxiBenefit";
import { extractPersistentFilters } from "./cookie/extractPersistentFilters";
import { encodePersistentFilters } from "./cookie/encodePersistentFilters";
import { saveCookie } from "./cookie/saveCookie";

export type PersistentFilters = {
  selectedBanks: string[];
  sliderIndex: number;
  locationFilter: "Moscow" | "Regions";
  hideSalary: boolean;
  hideSpendings: boolean;
  selectedOptions: TaxiService[];
  hideUltima: boolean;
  locationConfirmed: boolean;
};

export function persistFiltersFromState(state: RootState) {
  const filters = extractPersistentFilters(state);
  const encoded = encodePersistentFilters(filters);

  saveCookie(encoded);
}
