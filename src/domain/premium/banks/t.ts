import { type Tier } from "../tier";
import { type Bank } from "../bank";

const tBankTiers: Tier[] = [
  {
    id: "bronze",
    title: "T-Bronze",
    requirements: [
      { key: "monthlyPrice", value: 2_990 },
      { key: "shares", value: 5000 },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 12,
        perMonth: "—",
        limit: 500,
        restriction: ["car-sharing"],
      },
    },
  },
  {
    id: "silver",
    title: "T-Silver",
    requirements: [
      { key: "balance", value: 3_000_000, calculation: "minimum" },
      [
        { key: "spendings", value: 200_000 },
        { key: "balance", value: 1_000_000, calculation: "minimum" },
      ],
      { key: "salary", value: 400_000 },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 12,
        perMonth: "—",
        limit: 500,
        restriction: ["car-sharing"],
      },
    },
  },
  {
    id: "gold",
    title: "T-Gold",
    requirements: [
      { key: "balance", value: 5_000_000, calculation: "minimum" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 12,
        perMonth: "—",
        limit: 2500,
        restriction: ["taxi", "car-sharing"],
        taxiClass: "ultima-only",
      },
    },
  },
  {
    id: "diamond",
    title: "T-Diamond",
    requirements: [
      { key: "balance", value: 10_000_000, calculation: "minimum" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 24,
        perMonth: "—",
        limit: 2500,
        restriction: ["taxi", "car-sharing"],
        taxiClass: "ultima-only",
      },
    },
  },
  {
    id: "private-30",
    title: "T-Private",
    requirements: [
      { key: "balance", value: 30_000_000, calculation: "minimum" },
      { key: "shares", value: 50000 },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 24,
        perMonth: "—",
        limit: 6600,
        restriction: ["taxi", "car-sharing"],
        taxiClass: "ultima-only",
        accumulateMonths: 12,
      },
    },
  },
  {
    id: "private-55",
    title: "T-Private",
    requirements: [
      { key: "balance", value: 55_000_000, calculation: "minimum" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 36,
        perMonth: "—",
        limit: 8000,
        restriction: ["taxi", "car-sharing"],
        taxiClass: "ultima-only",
        accumulateMonths: 12,
      },
    },
  },
  {
    id: "private-100",
    title: "T-Private",
    requirements: [
      { key: "balance", value: 100_000_000, calculation: "minimum" },
    ],
    benefits: {
      taxi: {
        type: "per-trip",
        perYear: 48,
        perMonth: "—",
        limit: 8000,
        restriction: ["taxi", "car-sharing"],
        taxiClass: "ultima-only",
        accumulateMonths: 12,
      },
    },
  },
];

export const tBank: Bank = {
  id: "t",
  name: "Т-Банк",
  logo: "https://images.seeklogo.com/logo-png/66/1/t-bank-logo-png_seeklogo-669141.png",
  tiers: tBankTiers,
};
