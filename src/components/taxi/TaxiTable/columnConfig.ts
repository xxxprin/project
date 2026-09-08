import { taxiRows } from "../../../domain/premium/taxiRows";
import { getBalance } from "./utils/getBalance";
import { formatTaxi } from "./utils/formatTaxi";

export type ColumnKey =
  | "bank"
  | "requirements"
  | "perMonth"
  | "perYear"
  | "amountTrip"
  | "yearLimit";

type TaxiRow = (typeof taxiRows)[0];

export const columnConfig: Record<
  ColumnKey,
  {
    label: string;
    compareFn?: (a: TaxiRow, b: TaxiRow) => number;
  }
> = {
  bank: {
    label: "Банк и тир",
    compareFn: (a, b) => a.bank.name.localeCompare(b.bank.name),
  },
  requirements: {
    label: "Способ получения",
    compareFn: (a, b) => {
      const aBalance = getBalance(a.tier.requirements);
      const bBalance = getBalance(b.tier.requirements);

      if (aBalance === null && bBalance === null) {
        return 0;
      }

      if (aBalance === null) {
        return 1;
      }

      if (bBalance === null) {
        return -1;
      }

      return aBalance - bBalance;
    },
  },
  perMonth: {
    label: "В месяц",
    compareFn: (a, b) => {
      const aVal = Number(formatTaxi(a.taxi!).month) || 0;
      const bVal = Number(formatTaxi(b.taxi!).month) || 0;

      return aVal - bVal;
    },
  },
  perYear: {
    label: "В год",
    compareFn: (a, b) => {
      const aVal = Number(formatTaxi(a.taxi!).year) || 0;
      const bVal = Number(formatTaxi(b.taxi!).year) || 0;

      return aVal - bVal;
    },
  },
  amountTrip: {
    label: "Сумма поездки",
    compareFn: (a, b) => {
      const aVal = a.taxi?.type === "per-trip" ? a.taxi.limit : 0;
      const bVal = b.taxi?.type === "per-trip" ? b.taxi.limit : 0;

      return aVal - bVal;
    },
  },
  yearLimit: {
    label: "Максимум за год",
    compareFn: (a, b) => {
      const aVal = formatTaxi(a.taxi!).yearLimit;
      const bVal = formatTaxi(b.taxi!).yearLimit;

      return aVal - bVal;
    },
  },
};
