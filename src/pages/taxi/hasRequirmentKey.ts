import { type Requirement } from "../../domain/premium/requirments";

export function hasRequirementKey(
  requirements: (Requirement | Requirement[])[],
  key: string,
) {
  for (const item of requirements) {
    if (Array.isArray(item)) {
      if (item.some((r) => r.key === key)) {
        return true;
      }
    } else if (item.key === key) {
      return true;
    }
  }

  return false;
}
