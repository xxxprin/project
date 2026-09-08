export function formatMoney(value: number) {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;

    return `${millions} млн`;
  }

  if (value >= 50_000) {
    const thousands = value / 1_000;

    return `${thousands} тыс`;
  }

  return value;
}
