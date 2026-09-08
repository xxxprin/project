import { type Requirement } from "../../../../domain/premium/requirments";
import { formatOneRequirement } from "./formatOneRequirment";

export function formatRequirments(
  requirements: (Requirement[] | Requirement)[],
) {
  const parts = requirements.map((item) => {
    if (Array.isArray(item)) {
      return item.map(formatOneRequirement).join(" + ");
    }

    return formatOneRequirement(item);
  });

  return parts.filter(Boolean).join(" | ");
}
