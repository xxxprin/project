import { allBanks } from "../../domain/premium/taxiRows";
import s from "./BanksPage.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function BanksPage() {
  return (
    <div className={s.banks}>
      <Helmet>
        <title>Список банков</title>
      </Helmet>
      <h1>Список банков</h1>
      <div className={s.list}>
        {allBanks.map((bank) => (
          <Link to={`/premium/banks/${bank.id}`} className={s.bank}>
            <img src={bank.logo} />
            <div>{bank.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
