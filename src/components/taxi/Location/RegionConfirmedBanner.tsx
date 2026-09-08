import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../app/store";
import { confirmLocation } from "../../../app/features/taxiFilters/commonFiltersSlice";
import { tryBrowserGeolocation } from "./tryBrowserGeolocation";
import { type LocationFilter } from "./LocationFilterType";

export function RegionConfirmBanner() {
  const dispatch = useDispatch();

  const locationFilter = useSelector((s) => s.commonFilters.locationFilter);
  const locationConfirmed = useSelector(
    (s) => s.commonFilters.locationConfirmed,
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!locationConfirmed) {
      setVisible(true);
    }
  }, [locationConfirmed]);

  if (!visible || locationConfirmed) {
    return null;
  }

  const label = locationFilter === "Moscow" ? "Москва" : "Регионы";

  const accept = (value: LocationFilter) => {
    dispatch(confirmLocation(value));
    setVisible(false);
  };

  return (
    <div>
      <span>
        Ваш регион — <b>{label}</b>. Это так?
      </span>
      <button type="button" onClick={() => accept(locationFilter)}>
        Да
      </button>
      <button
        type="button"
        onClick={() =>
          accept(locationFilter === "Moscow" ? "Regions" : "Moscow")
        }
      >
        Нет, другой
      </button>
      <button
        type="button"
        onClick={() => tryBrowserGeolocation((loc) => accept(loc))}
      >
        Определить по геолокации
      </button>
    </div>
  );
}
