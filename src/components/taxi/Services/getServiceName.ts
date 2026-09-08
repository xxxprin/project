import { type TaxiService } from "../../../domain/premium/benefits/TaxiBenefit";

export function getServiceName(name: TaxiService) {
  if (name === "taxi") {
    return "Такси";
  }

  if (name === "car-sharing") {
    return "Кар-шеринг";
  }

  if (name === "transfer") {
    return "Трансфер";
  }
}
