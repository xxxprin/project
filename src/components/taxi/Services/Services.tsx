import s from "./Services.module.css";
import { type Services } from "../interfaces/Services";
import { TaxiServices } from "../../../domain/premium/benefits/TaxiBenefit";
import { getServiceName } from "./getServiceName";

export function Services({ selectedOptions, onToggle }: Services) {
  return (
    <div className={s.options}>
      {TaxiServices.map((service) => (
        <div
          className={`${s.option} ${
            selectedOptions.includes(service) ? s.active : ""
          }`}
          onClick={() => onToggle(service)}
        >
          {getServiceName(service)}
        </div>
      ))}
    </div>
  );
}
