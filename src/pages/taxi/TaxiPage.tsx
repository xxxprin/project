import s from "./TaxiPage.module.css";
import { BanksFilter } from "../../components/taxi/BanksFilter/BanksFilter.tsx";
import { CapitalAndConditions } from "../../components/taxi/CapitalAndConditions/CapitalAndConditions.tsx";
import { Services } from "../../components/taxi/Services/Services.tsx";
import { TaxiTable } from "../../components/taxi/TaxiTable/TaxiTable.tsx";
import { taxiRows } from "../../domain/premium/taxiRows";
import { Location } from "../../components/taxi/Location/Location";
import { useDispatch, useSelector } from "../../app/store.ts";
import { filterTaxiRows } from "./filteredTaxiRows.ts";
import { Helmet } from "react-helmet-async";
import {
  toggleOption,
  toggleHideUltima,
} from "../../app/features/taxiFilters/taxiPageSlice.ts";
import {
  toggleBank,
  setSliderIndex,
  setLocationFilter,
  toggleHideSalary,
  toggleHideSpendings,
} from "../../app/features/taxiFilters/commonFiltersSlice.ts";

export function TaxiPage() {
  const dispatch = useDispatch();
  const selectedBanks = useSelector((s) => s.commonFilters.selectedBanks);
  const selectedOptions = useSelector((s) => s.taxiPage.selectedOptions);
  const sliderIndex = useSelector((s) => s.commonFilters.sliderIndex);
  const hideSalary = useSelector((s) => s.commonFilters.hideSalary);
  const hideSpendings = useSelector((s) => s.commonFilters.hideSpendings);
  const hideUltima = useSelector((s) => s.taxiPage.hideUltima);
  const locationFilter = useSelector((s) => s.commonFilters.locationFilter);
  const showHideUltima =
    selectedOptions.length === 1 && selectedOptions[0] === "taxi";

  const filteredRows = filterTaxiRows(taxiRows, {
    selectedBanks,
    selectedOptions,
    sliderIndex,
    hideSalary,
    hideSpendings,
    hideUltima,
    locationFilter,
  });

  return (
    <>
      <Helmet>
        <title>Такси</title>
      </Helmet>
      <div className={s.title}>
        <h1>Компенсация такси</h1>
      </div>
      <div className={s.filters}>
        <div className={s.topRow}>
          <BanksFilter
            selectedBanks={selectedBanks}
            onToggle={(name) => dispatch(toggleBank(name))}
          />

          <CapitalAndConditions
            sliderIndex={sliderIndex}
            onSliderIndexChange={(i) => dispatch(setSliderIndex(i))}
            conditions={{ hideSalary, hideSpendings }}
            onToggleSalary={() => dispatch(toggleHideSalary())}
            onToggleSpendings={() => dispatch(toggleHideSpendings())}
          />
          <Location
            locationFilter={locationFilter}
            setLocationFilter={(l) => dispatch(setLocationFilter(l))}
          />
        </div>
        <Services
          selectedOptions={selectedOptions}
          onToggle={(o) => dispatch(toggleOption(o))}
        />
        {showHideUltima && (
          <label>
            <input
              type="checkbox"
              checked={hideUltima}
              onChange={() => dispatch(toggleHideUltima())}
            />
            <span>Скрыть Ultima</span>
          </label>
        )}
        <TaxiTable rows={filteredRows} />
      </div>
    </>
  );
}
