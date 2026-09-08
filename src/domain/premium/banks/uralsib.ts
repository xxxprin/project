import { type Tier } from "../tier";
import { type Bank } from "../bank";

const uralsibBankTiers: Tier[] = [
  {
    id: "premium-start-3000",
    title: "Премиум Старт",
    requirements: [{ key: "monthlyPrice", value: 3_000 }],
    benefits: {},
  },
  {
    id: "premium-start-1.5",
    title: "Премиум Старт",
    requirements: [
      { key: "balance", value: 1_500_000, calculation: "average" },
    ],
    benefits: {},
  },
  {
    id: "premium-2.5",
    title: "Премиум",
    requirements: [
      { key: "balance", value: 2_500_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "month-budget",
        restriction: ["taxi", "transfer"],
        monthAmount: 2000,
      },
    },
  },
  {
    id: "premium-6",
    title: "Премиум",
    requirements: [
      { key: "balance", value: 6_000_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "month-budget",
        restriction: ["taxi", "transfer"],
        monthAmount: 3000,
      },
    },
  },
  {
    id: "premium-15",
    title: "Премиум",
    requirements: [
      { key: "balance", value: 15_000_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "month-budget",
        restriction: ["taxi", "transfer"],
        monthAmount: 5000,
      },
    },
  },
  {
    id: "Private Banking-40",
    title: "Private Banking",
    requirements: [
      { key: "balance", value: 40_000_000, calculation: "average" },
    ],
    benefits: {
      taxi: {
        type: "month-budget",
        restriction: ["taxi", "transfer"],
        monthAmount: 7000,
      },
    },
  },
];

export const uralsib: Bank = {
  id: "uralsib",
  name: "Уралсиб",
  logo: "https://static.rustore.ru/imgproxy/eHsRBKrcflAT6Ljn-1Y2H6s9p7piHu8c7iZfqmAi2kc/preset:vk_og_img/plain/https://static.rustore.ru/apk/1693918655/content/ICON/65eee940-945f-432a-a69f-9d2e62771f20.png@webp",
  tiers: uralsibBankTiers,
};
