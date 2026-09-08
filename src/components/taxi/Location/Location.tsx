import s from "./Location.module.css";
import { type Location } from "../interfaces/Location";

export function Location({ locationFilter, setLocationFilter }: Location) {
  return (
    <div className={s.locationToggle}>
      <button
        className={locationFilter === "Moscow" ? s.active : ""}
        onClick={() => setLocationFilter("Moscow")}
      >
        Москва
      </button>
      <button
        className={locationFilter === "Regions" ? s.active : ""}
        onClick={() => setLocationFilter("Regions")}
      >
        Регионы
      </button>
    </div>
  );
}
