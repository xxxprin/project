import { type LocationFilter } from "../Location/LocationFilterType";

export interface Location {
  locationFilter: LocationFilter;
  setLocationFilter: (region: LocationFilter) => void;
}
