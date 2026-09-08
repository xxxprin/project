import s from "./TaxiTable.module.css";
import { formatTaxi } from "./utils/formatTaxi";
import { formatRequirments } from "./utils/formatRequirments";
import { formatOneTaxiService } from "./utils/formatOneTaxiService";
import { type TaxiTable } from "./TaxiTable";
import { columnConfig } from "./columnConfig";
import { useDispatch, useSelector } from "../../../app/store";
import { toggleSort } from "../../../app/features/taxiFilters/taxiPageSlice";
import { Link } from "react-router-dom";

export function TaxiTable({ rows }: TaxiTable) {
  const dispatch = useDispatch();
  const sortColumn = useSelector((s) => s.taxiPage.sortColumn);
  const sortDirection = useSelector((s) => s.taxiPage.sortDirection);
  const sortedRows = [...rows];

  if (sortColumn) {
    const config = columnConfig[sortColumn];

    if (config.compareFn) {
      sortedRows.sort(config.compareFn);

      if (sortDirection === "desc") {
        sortedRows.reverse();
      }
    }
  }

  return (
    <div className={s.table}>
      <div className={`${s.offers} ${s.header}`}>
        <div onClick={() => dispatch(toggleSort("bank"))}>Банк и тир ↕</div>
        <div onClick={() => dispatch(toggleSort("requirements"))}>
          Способ получения ↕
        </div>
        <div>Где действует</div>
        <div onClick={() => dispatch(toggleSort("perMonth"))}>В месяц ↕</div>
        <div onClick={() => dispatch(toggleSort("perYear"))}>В год ↕</div>
        <div onClick={() => dispatch(toggleSort("amountTrip"))}>
          Сумма поездки ↕
        </div>
        <div onClick={() => dispatch(toggleSort("yearLimit"))}>
          Максимум за год ↕
        </div>
      </div>

      {sortedRows.map((row) => {
        const taxiInfo = formatTaxi(row.taxi!);

        return (
          <div className={s.offers} key={`${row.bank.id}-${row.tier.id}`}>
            <Link
              to={`/premium/taxi/${row.bank.id}`}
              className={s.bankAndTearsLink}
            >
              <div className={s.bankAndTears}>
                <img src={row.bank.logo} alt="" />
                <div>
                  <div className={s.tierTitle}>{row.tier.title}</div>
                  <div className={s.bankName}>{row.bank.name}</div>
                </div>
              </div>
            </Link>

            <div className={s.requirements}>
              {formatRequirments(row.tier.requirements)}
            </div>

            <div className={s.operates}>
              {row.taxi?.restriction?.map((service) => (
                <div className={s.operate} key={service}>
                  {formatOneTaxiService(service)}
                </div>
              ))}
              {row.taxi?.taxiClass === "ultima-only" && (
                <div className={s.ultima}>только Ultima</div>
              )}
            </div>

            <div className={s.perMonth}>{taxiInfo.month}</div>
            <div className={s.perYear}>
              <div>{taxiInfo.year ?? "—"}</div>

              {row.bank.id === "t" && row.taxi?.type === "per-trip" && (
                <span className={s.note}>
                  Начисляется {Math.round(row.taxi.perYear / 12)} в месяц
                </span>
              )}
            </div>
            <div className={s.amountTrip}>{taxiInfo.amountTrip}</div>
            <div className={s.yearLimit}>{taxiInfo.yearLimit} ₽</div>
          </div>
        );
      })}
    </div>
  );
}
