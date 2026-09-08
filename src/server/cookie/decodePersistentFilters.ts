import { type PersistentFilters } from "../cookieFilters";

export function decodePersistentFilters(
  raw: string,
): Partial<PersistentFilters> {
  try {
    return JSON.parse(decodeURIComponent(raw)) as Partial<PersistentFilters>;
  } catch {
    return {};
  }
}
