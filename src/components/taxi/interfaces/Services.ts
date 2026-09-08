import { type TaxiService } from "../../../domain/premium/benefits/TaxiBenefit";

export interface Services {
  selectedOptions: string[];
  onToggle: (optionName: TaxiService) => void;
}
