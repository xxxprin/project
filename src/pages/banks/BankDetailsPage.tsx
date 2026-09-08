import { useParams, Link } from "react-router-dom";
import { allBanks } from "../../domain/premium/taxiRows";
import s from "./BanksDetailsPage.module.css";
import { formatRequirments } from "../../components/taxi/TaxiTable/utils/formatRequirments";
import { formatTaxi } from "../../components/taxi/TaxiTable/utils/formatTaxi";
import { Location } from "../../components/taxi/Location/Location";
import { useDispatch, useSelector } from "../../app/store";
import { setLocationFilter } from "../../app/features/taxiFilters/commonFiltersSlice";
import { getLocation } from "../../components/taxi/Location/getLocation";
import { Helmet } from "react-helmet-async";

export function BankDetailsPage() {
  const { bankId } = useParams();
  const bank = allBanks.find((b) => b.id === bankId);
  const tiers = bank?.tiers ?? [];
  const locationFilter = useSelector((s) => s.commonFilters.locationFilter);
  const filteredTiers = tiers.filter((tier) => {
    const location = getLocation(tier.requirements);

    if (location === null) {
      return true;
    }

    return location === locationFilter;
  });
  const dispatch = useDispatch();

  return (
    <div className={s.page}>
      <Helmet>
        <title>{`${bank?.name} — премиум`}</title>
      </Helmet>
      <Link to="/premium/banks">← К списку банков</Link>
      <h1>{bank?.name}</h1>
      <Location
        locationFilter={locationFilter}
        setLocationFilter={(l) => dispatch(setLocationFilter(l))}
      />

      <div className={s.table}>
        <div
          className={`${s.row} ${s.header}`}
          style={{
            gridTemplateColumns: `140px repeat(${filteredTiers.length}, 1fr)`,
          }}
        >
          <div className={s.rowLabel}>Тир</div>
          {filteredTiers.map((tier) => (
            <div key={tier.id}>{tier.title}</div>
          ))}
        </div>

        <div
          className={s.row}
          style={{
            gridTemplateColumns: `140px repeat(${filteredTiers.length}, 1fr)`,
          }}
        >
          <div className={s.rowLabel}>Требования</div>
          {filteredTiers.map((tier) => (
            <div key={tier.id}>{formatRequirments(tier.requirements)}</div>
          ))}
        </div>

        <div
          className={s.row}
          style={{
            gridTemplateColumns: `140px repeat(${filteredTiers.length}, 1fr)`,
          }}
        >
          <div className={s.rowLabel}>Такси</div>
          {filteredTiers.map((tier) => {
            if (!tier.benefits?.taxi) {
              return <div key={tier.id}>—</div>;
            }

            const taxiInfo = formatTaxi(tier.benefits.taxi);

            return (
              <div key={tier.id} className={s.taxiCell}>
                <div>
                  {taxiInfo.month !== "—" ? `${taxiInfo.month} / мес` : "—"}
                </div>
                <div>
                  {taxiInfo.year && taxiInfo.year !== "—"
                    ? `${taxiInfo.year} / год`
                    : "—"}
                </div>
                <div>{taxiInfo.amountTrip}</div>
                <div>{taxiInfo.yearLimit} ₽ / год</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
