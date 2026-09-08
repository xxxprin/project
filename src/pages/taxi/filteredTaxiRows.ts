import { type LocationFilter } from "../../components/taxi/Location/LocationFilterType";
import { taxiRows } from "../../domain/premium/taxiRows";
import { type TaxiService } from "../../domain/premium/benefits/TaxiBenefit";
import { getSliderValue } from "../../components/taxi/CapitalAndConditions/getSliderValue";
import { getBalance } from "../../components/taxi/TaxiTable/utils/getBalance";
import { hasRequirementKey } from "./hasRequirmentKey";
import { getLocation } from "../../components/taxi/Location/getLocation";

type TaxiRow = (typeof taxiRows)[number];

export interface TaxiFilters {
  selectedBanks: string[];
  selectedOptions: TaxiService[];
  sliderIndex: number;
  hideSalary: boolean;
  hideSpendings: boolean;
  hideUltima: boolean;
  locationFilter: LocationFilter;
}

export function filterTaxiRows(rows: TaxiRow[], filters: TaxiFilters) {
  const {
    selectedBanks,
    selectedOptions,
    sliderIndex,
    hideSalary,
    hideSpendings,
    hideUltima,
    locationFilter,
  } = filters;

  return rows.filter((row) => {
    const bankOk =
      selectedBanks.length === 0 || selectedBanks.includes(row.bank.name);

    const serviceOk =
      selectedOptions.length === 0 ||
      row.taxi?.restriction?.some((s) => selectedOptions.includes(s));

    const balance = getBalance(row.tier.requirements);
    const capitalOk =
      balance === null || balance <= getSliderValue(sliderIndex) * 1_000_000;

    const salaryOk =
      !hideSalary || !hasRequirementKey(row.tier.requirements, "salary");

    const spendingsOk =
      !hideSpendings || !hasRequirementKey(row.tier.requirements, "spendings");

    const ultimaOk =
      !hideUltima ||
      row.taxi?.taxiClass !== "ultima-only" ||
      selectedOptions.length !== 1;

    const location = getLocation(row.tier.requirements);
    const locationOk = location === null || location === locationFilter;

    return (
      bankOk &&
      serviceOk &&
      capitalOk &&
      salaryOk &&
      spendingsOk &&
      ultimaOk &&
      locationOk
    );
  });
}
