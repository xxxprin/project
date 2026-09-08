import { useParams, Link } from "react-router-dom";
import { allBanks } from "../../domain/premium/taxiRows";
import { TaxiTable } from "../../components/taxi/TaxiTable/TaxiTable.tsx";
import { taxiRows } from "../../domain/premium/taxiRows";
import { Location } from "../../components/taxi/Location/Location.tsx";
import { useDispatch, useSelector } from "../../app/store.ts";
import { setLocationFilter } from "../../app/features/taxiFilters/commonFiltersSlice.ts";
import { getLocation } from "../../components/taxi/Location/getLocation.ts";
import { Helmet } from "react-helmet-async";

export function BankTaxiPage() {
  const { bankId } = useParams();
  const bank = allBanks.find((b) => b.id === bankId);
  const bankTaxiRows = taxiRows.filter((row) => row.bank.id === bankId);
  const locationFilter = useSelector((s) => s.commonFilters.locationFilter);
  const bankTaxiRowsRegion = bankTaxiRows.filter((b) => {
    const location = getLocation(b.tier.requirements);

    if (location === null) {
      return true;
    }

    return location === locationFilter;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <Helmet>
        <title>{`${bank?.name} — такси`}</title>
      </Helmet>
      <Link to="/premium/taxi">← К списку такси</Link>
      <Location
        locationFilter={locationFilter}
        setLocationFilter={(l) => dispatch(setLocationFilter(l))}
      />

      <h1>{bank?.name}</h1>
      {bankTaxiRowsRegion.length > 0 ? (
        <TaxiTable rows={bankTaxiRowsRegion} />
      ) : (
        <p>Нет предложений по такси</p>
      )}
    </div>
  );
}
