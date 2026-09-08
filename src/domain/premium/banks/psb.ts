import { type Tier } from "../tier";
import { type Bank } from "../bank";

const psbBankTiers: Tier[] = [
  {
    id: "orange-3990-moscow",
    title: "Orange Premium Club",
    requirements: [
      { key: "monthlyPrice", value: 3_990 },
      { key: "salary", value: 300_000 },
      { key: "location", value: "Moscow" },
    ],
    benefits: {},
  },
  {
    id: "orange-3990-regions",
    title: "Orange Premium Club",
    requirements: [
      { key: "monthlyPrice", value: 3_990 },
      { key: "salary", value: 200_000 },
      { key: "location", value: "Regions" },
    ],
    benefits: {},
  },
  {
    id: "orange-3-moscow",
    title: "Orange Premium Club",
    requirements: [
      { key: "balance", value: 3_000_000, calculation: "average" },
      [
        { key: "balance", value: 1_000_000, calculation: "average" },
        { key: "shares", value: 50_000 },
      ],
      { key: "salary", value: 300_000 },
      { key: "location", value: "Moscow" },
    ],
    benefits: {},
  },
  {
    id: "orange-3-regions",
    title: "Orange Premium Club",
    requirements: [
      { key: "balance", value: 1_500_000, calculation: "average" },
      [
        { key: "balance", value: 1_000_000, calculation: "average" },
        { key: "shares", value: 50_000 },
      ],
      { key: "salary", value: 300_000 },
      { key: "location", value: "Regions" },
    ],
    benefits: {},
  },
  {
    id: "orange-4",
    title: "Orange Premium Club",
    requirements: [
      { key: "balance", value: 4_000_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 4000,
      },
    },
  },
  {
    id: "orange-7",
    title: "Orange Premium Club",
    requirements: [
      { key: "balance", value: 7_000_000, calculation: "average" },
    ],

    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 10_000,
      },
    },
  },
  {
    id: "orange-5-shares",
    title: "Orange Premium Club +",
    requirements: [
      [
        { key: "balance", value: 5_000_000, calculation: "average" },
        { key: "shares", value: 150_000 },
      ],
    ],
    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 4_000,
      },
    },
  },
  {
    id: "orange-10-moscow",
    title: "Orange Premium Club +",
    requirements: [
      { key: "balance", value: 10_000_000, calculation: "average" },
      { key: "location", value: "Moscow" },
    ],

    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 20_000,
      },
    },
  },
  {
    id: "orange-10-regions",
    title: "Orange Premium Club +",
    requirements: [
      { key: "balance", value: 7_000_000, calculation: "average" },
      { key: "location", value: "Regions" },
    ],

    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 20_000,
      },
    },
  },
  {
    id: "orange-50-moscow",
    title: "Элемент",
    requirements: [
      { key: "balance", value: 50_000_000, calculation: "average" },
      { key: "monthlyPrice", value: 30_000 },
      { key: "location", value: "Moscow" },
    ],

    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 25_000,
      },
    },
  },
  {
    id: "orange-25-regions",
    title: "Элемент",
    requirements: [
      { key: "balance", value: 25_000_000, calculation: "average" },
      { key: "monthlyPrice", value: 30_000 },
      { key: "location", value: "Regions" },
    ],

    benefits: {
      taxi: {
        type: "year-budget",
        restriction: ["taxi", "car-sharing", "transfer"],
        yearAmount: 25_000,
      },
    },
  },
];

export const psb: Bank = {
  id: "psb",
  name: "Промсвязьбанк",
  logo: "https://cdn.ruplay.market/data/images/62c7f132-8069-45c0-82e4-724e7098ef26",
  tiers: psbBankTiers,
};
