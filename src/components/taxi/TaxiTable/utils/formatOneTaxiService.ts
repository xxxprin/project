import { type TaxiService } from "../../../../domain/premium/benefits/TaxiBenefit";

export function formatOneTaxiService(service: TaxiService) {
  if (service === "taxi") {
    return "Такси";
  }
  if (service === "car-sharing") {
    return "Каршеринг";
  }
  if (service === "transfer") {
    return "Трансфер";
  }
}
