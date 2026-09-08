import { type Requirement } from "../../../../domain/premium/requirments";

export function getBalance(requirements: (Requirement | Requirement[])[]) {
  for (const item of requirements) {
    if (Array.isArray(item)) {
      const found = item.find((r) => r.key === "balance");

      if (found && found.key === "balance") {
        return found.value;
      }
    } else if (item.key === "balance") {
      return item.value;
    }
  }

  return null;
}
