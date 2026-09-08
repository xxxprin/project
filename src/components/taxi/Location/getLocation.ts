import { type Requirement } from "../../../domain/premium/requirments";

export function getLocation(requirements: (Requirement | Requirement[])[]) {
  for (const item of requirements) {
    if (Array.isArray(item)) {
      const found = item.find((r) => r.key === "location");

      if (found?.key === "location") {
        return found.value;
      }
    } else if (item.key === "location") {
      return item.value;
    }
  }
  return null;
}
