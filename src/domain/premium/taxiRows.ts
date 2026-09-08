import { alfaBank } from "./banks/alfa";
import { vtbBank } from "./banks/vtb";
import { tBank } from "./banks/t";
import { psb } from "./banks/psb";
import { uralsib } from "./banks/uralsib";

export const allBanks = [alfaBank, vtbBank, tBank, psb, uralsib];

export const taxiRows = allBanks.flatMap((bank) =>
  bank.tiers
    .filter((tier) => tier.benefits?.taxi !== undefined)
    .map((tier) => ({
      bank,
      tier,
      taxi: tier.benefits!.taxi,
    })),
);
