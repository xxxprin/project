import { type Requirement } from "./requirments";
import { type TaxiBenefit } from "./benefits/TaxiBenefit";

interface Benefits {
  preferences?: number;
  taxi?: TaxiBenefit;
}

export interface Tier {
  id: string;
  title: string;
  requirements: (Requirement | Requirement[])[];
  benefits: Benefits;
}
