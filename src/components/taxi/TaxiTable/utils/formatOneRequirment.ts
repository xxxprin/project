import { formatMoney } from "./formatMoney";
import { type Requirement } from "../../../../domain/premium/requirments";

export function formatOneRequirement(req: Requirement) {
  if (req.key === "balance") {
    return formatMoney(req.value);
  }
  if (req.key === "spendings") {
    return `траты ${formatMoney(req.value)}`;
  }
  if (req.key === "shares") {
    return `${formatMoney(req.value)} акций`;
  }
  if (req.key === "monthlyPrice") {
    return `${formatMoney(req.value)} ₽/мес`;
  }
  if (req.key === "jointAccess") {
    return `${formatMoney(req.value)} в совместном доступе`;
  }
  if (req.key === "salary") {
    return `зарплата ${formatMoney(req.value)} ₽/мес`;
  }
}
