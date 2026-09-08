import { Routes, Route } from "react-router-dom";
import { TaxiPage } from "./pages/taxi/TaxiPage";
import { BanksPage } from "./pages/banks/BanksPage";
import { BankDetailsPage } from "./pages/banks/BankDetailsPage";
import { BankTaxiPage } from "./pages/taxi/BankTaxiPage";
import { RegionConfirmBanner } from "./components/taxi/Location/RegionConfirmedBanner";

export function App() {
  return (
    <div>
      <RegionConfirmBanner />
      <Routes>
        <Route path="/premium/banks" element={<BanksPage />} />
        <Route path="/premium/banks/:bankId" element={<BankDetailsPage />} />
        <Route path="/premium/taxi" element={<TaxiPage />} />
        <Route path="/premium/taxi/:bankId" element={<BankTaxiPage />} />
      </Routes>
    </div>
  );
}
