import { type PersistentFilters } from "../cookieFilters";

export function encodePersistentFilters(filters: PersistentFilters): string {
  return encodeURIComponent(JSON.stringify(filters));
}
