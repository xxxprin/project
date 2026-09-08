import { type Tier } from "../tier";
import { type Bank } from "../bank";

const vtbBankTiers: Tier[] = [
  {
    id: "emerald",
    title: "Изумруд",
    requirements: [
      { key: "monthlyPrice", value: 3_990 },
      { key: "spendings", value: 150_000 },
      { key: "salary", value: 300_000 },
      { key: "shares", value: 9000 },
    ],
    benefits: {},
  },
  {
    id: "sapphire-moscow",
    title: "Сапфир",
    requirements: [
      { key: "balance", value: 2_500_000, calculation: "average" },
      { key: "location", value: "Moscow" },
      [
        { key: "shares", value: 1_500_000 },
        { key: "spendings", value: 125_000 },
      ],
    ],
    benefits: {
      preferences: 2,

      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        perMonth: 2,
        perYear: 12,
        limit: 1000,
      },
    },
  },
  {
    id: "sapphire-regions",
    title: "Сапфир",
    requirements: [
      { key: "balance", value: 2_000_000, calculation: "average" },
      { key: "location", value: "Regions" },
      [
        { key: "shares", value: 1_500_000 },
        { key: "spendings", value: 125_000 },
      ],
    ],
    benefits: {
      preferences: 2,

      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        perMonth: 2,
        perYear: 12,
        limit: 1000,
      },
    },
  },
  {
    id: "ruby",
    title: "Рубин",
    requirements: [
      { key: "balance", value: 6_000_000, calculation: "average" },
    ],
    benefits: {
      preferences: 6,

      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        perMonth: 6,
        perYear: 24,
        limit: 1000,
      },
    },
  },
  {
    id: "diamond",
    title: "Бриллиант",
    requirements: [
      { key: "balance", value: 10_000_000, calculation: "average" },
    ],
    benefits: {
      preferences: 10,

      taxi: {
        type: "per-trip",
        restriction: ["taxi"],
        perMonth: 10,
        perYear: 30,
        limit: 1000,
      },
    },
  },
  {
    id: "prime+16667",
    title: "Прайм плюс 16667",
    requirements: [
      { key: "shares", value: 90000 },
      { key: "monthlyPrice", value: 16667 },
    ],
    benefits: {},
  },
  {
    id: "prime+15",
    title: "Прайм+ 15 млн",
    requirements: [
      { key: "balance", value: 15_000_000, calculation: "average" },
    ],
    benefits: {},
  },
  {
    id: "prime+50-moscow",
    title: "Прайм+ 50 млн",
    requirements: [
      { key: "balance", value: 50_000_000, calculation: "average" },
      { key: "location", value: "Moscow" },
    ],
    benefits: {},
  },
  {
    id: "prime+30-regions",
    title: "Прайм+ 30 млн",
    requirements: [
      { key: "balance", value: 30_000_000, calculation: "average" },
      { key: "location", value: "Regions" },
    ],
    benefits: {},
  },
  {
    id: "prime+100-moscow",
    title: "Прайм+ 100 млн",
    requirements: [
      { key: "balance", value: 100_000_000, calculation: "average" },
      { key: "location", value: "Moscow" },
    ],
    benefits: {},
  },
  {
    id: "prime+50-regions",
    title: "Прайм+ 50 млн",
    requirements: [
      { key: "balance", value: 50_000_000, calculation: "average" },
      { key: "location", value: "Regions" },
    ],
    benefits: {},
  },
];

export const vtbBank: Bank = {
  id: "vtb",
  name: "Втб-Банк",
  logo: "https://brobank.ru/wp-content/uploads/2019/10/vtb_logo_icon.png",
  tiers: vtbBankTiers,
};
