import { type Tier } from "./tier";

export interface Bank {
  id: string;
  name: string;
  logo: string;
  tiers: Tier[];
}
