import { type Tier } from "../tier";
import { type Bank } from "../bank";

const alfaBankTiers: Tier[] = [
  {
    id: "salary",
    title: "Alfa Only зарплатный",
    requirements: [
      { key: "monthlyPrice", value: 2_990 },
      { key: "spendings", value: 400_000 },
    ],
    benefits: {},
  },
  {
    id: "alfa-only-3",
    title: "Alfa Only 3 млн",
    requirements: [
      { key: "balance", value: 3_000_000, calculation: "average" },
      [
        { key: "balance", value: 2_000_000, calculation: "average" },
        { key: "spendings", value: 200_000 },
      ],
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        limit: 2500,
        perYear: 2,
        perMonth: 2,
      },
    },
  },
  {
    id: "alfa-only-6",
    title: "Alfa Only 6 млн",
    requirements: [
      { key: "balance", value: 6_000_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        limit: 2500,
        perMonth: 2,
        perYear: 12,
      },
    },
  },
  {
    id: "alfa-only-12",
    title: "Alfa Only 12 млн",
    requirements: [
      { key: "balance", value: 12_000_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        limit: 2500,
        perMonth: 3,
        perYear: 15,
      },
    },
  },
  {
    id: "alfa-club-moscow",
    title: "Alfa Club 60 млн",
    requirements: [
      { key: "balance", value: 60_000_000, calculation: "average" },
      { key: "location", value: "Moscow" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        limit: 5000,
        perMonth: 3,
        perYear: 15,
      },
    },
  },
  {
    id: "alfa-club-regions",
    title: "Alfa Club 30 млн",
    requirements: [
      { key: "balance", value: 30_000_000, calculation: "average" },
      { key: "location", value: "Regions" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        limit: 5000,
        perMonth: 3,
        perYear: 15,
      },
    },
  },
];

export const alfaBank: Bank = {
  id: "alfa",
  name: "Альфа-Банк",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkkjh7CXpAu4ZPB9d-w_DjJvzkN362WpwRf1963Vl0Bx8ni46bMN1ARcj&s=10",
  tiers: alfaBankTiers,
};
