export const TaxiServices = ["taxi", "car-sharing", "transfer"] as const;
export type TaxiService = (typeof TaxiServices)[number];

interface CommonTaxi {
  restriction: TaxiService[];
  taxiClass?: "ultima-only";
  accumulateMonths?: number;
}

interface TaxiMonthLimit extends CommonTaxi {
  type: "month-budget";
  monthAmount: number;
}
interface TaxiYearLimit extends CommonTaxi {
  type: "year-budget";
  yearAmount: number;
}
interface Taxilimit extends CommonTaxi {
  type: "per-trip";
  limit: number;
  perMonth: number | "—";
  perYear: number;
}

export type TaxiBenefit = Taxilimit | TaxiMonthLimit | TaxiYearLimit;
