import { type TaxiBenefit } from "../../../../domain/premium/benefits/TaxiBenefit";
export function formatTaxi(taxi: TaxiBenefit) {
  if (taxi.type === "month-budget") {
    return {
      month: `${taxi.monthAmount} ₽`,
      year: "—",
      amountTrip: "—",
      yearLimit: taxi.monthAmount * 12,
    };
  }
  if (taxi.type === "year-budget") {
    return {
      year: `${taxi.yearAmount} ₽`,
      amountTrip: "—",
      month: "—",
      yearLimit: taxi.yearAmount,
    };
  }
  return {
    month: taxi.perMonth,
    year: taxi.perYear,
    amountTrip: `${taxi.limit} ₽`,
    yearLimit: taxi.limit * taxi.perYear,
  };
}
