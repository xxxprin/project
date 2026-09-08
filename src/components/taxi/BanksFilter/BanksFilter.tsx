import s from "./BanksFilter.module.css";
import { allBanks } from "../../../domain/premium/taxiRows";
import { type BanksFilter } from "../interfaces/BanksFilter";

export function BanksFilter({ selectedBanks, onToggle }: BanksFilter) {
  return (
    <div className={s.left}>
      <h3>Банки</h3>
      <div className={s.banks}>
        {allBanks.map((bank) => (
          <div
            className={`${s.bank} ${
              selectedBanks.includes(bank.name) ? s.active : ""
            }`}
            onClick={() => onToggle(bank.name)}
          >
            <img src={bank.logo} alt="" />
            <h5>{bank.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
