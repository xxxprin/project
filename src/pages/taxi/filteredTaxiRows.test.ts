import { describe, test, expect } from "vitest";
import { filterTaxiRows } from "./filteredTaxiRows";
import type { TaxiFilters } from "./filteredTaxiRows";

const mockRows = [
  {
    bank: { id: "vtb", name: "ВТБ", logo: "" },
    tier: {
      id: "vtb-1",
      title: "Привилегия",
      requirements: [
        { key: "balance", value: 3_000_000, calculation: "average" },
      ],
    },
    taxi: {
      type: "per-trip",
      restriction: ["taxi", "car-sharing"],
      limit: 2000,
      perMonth: 2,
    },
  },
  {
    bank: { id: "alfa", name: "Альфа-Банк", logo: "" },
    tier: {
      id: "alfa-1",
      title: "Only",
      requirements: [
        { key: "balance", value: 10_000_000, calculation: "average" },
        { key: "salary", value: 400_000 },
      ],
    },
    taxi: {
      type: "per-trip",
      restriction: ["taxi"],
      taxiClass: "ultima-only",
      limit: 3000,
      perMonth: 1,
    },
  },
  {
    bank: { id: "t", name: "Т-Банк", logo: "" },
    tier: {
      id: "t-1",
      title: "Private",
      requirements: [
        { key: "spendings", value: 200_000 },
        { key: "location", value: "Regions" },
      ],
    },
    taxi: {
      type: "per-trip",
      restriction: ["car-sharing"],
      limit: 1500,
      perMonth: 3,
    },
  },
  {
    bank: { id: "uralsib", name: "Уралсиб", logo: "" },
    tier: {
      id: "u-1",
      title: "Премиум",
      requirements: [],
    },
    taxi: {
      type: "month-budget",
      restriction: ["taxi", "transfer"],
      monthAmount: 2000,
    },
  },
] as const;

const rows = mockRows as unknown as Parameters<typeof filterTaxiRows>[0];

const baseFilters: TaxiFilters = {
  selectedBanks: [],
  selectedOptions: [],
  sliderIndex: 32,
  hideSalary: false,
  hideSpendings: false,
  hideUltima: false,
  locationFilter: "Moscow",
};

describe("filterTaxiRows", () => {
  test("пустые фильтры — все строки (с учётом location Moscow)", () => {
    const result = filterTaxiRows(rows, baseFilters);

    expect(result.map((r) => r.tier.id)).toEqual(
      expect.arrayContaining(["vtb-1", "alfa-1", "u-1"]),
    );
    expect(result.find((r) => r.tier.id === "t-1")).toBeUndefined();
  });

  test("пустой selectedBanks — банки не режутся", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      locationFilter: "Regions",
    });

    const names = result.map((r) => r.bank.name);
    expect(names).toContain("ВТБ");
    expect(names).toContain("Т-Банк");
  });

  test("фильтр по банку", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      selectedBanks: ["ВТБ"],
    });

    expect(result.length).toBeGreaterThan(0);
    expect(result.every((r) => r.bank.name === "ВТБ")).toBe(true);
  });

  test("фильтр по нескольким банкам", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      selectedBanks: ["ВТБ", "Альфа-Банк"],
    });

    expect(
      result.every((r) => ["ВТБ", "Альфа-Банк"].includes(r.bank.name)),
    ).toBe(true);
  });

  test("фильтр по услуге taxi", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      selectedOptions: ["taxi"],
    });

    expect(result.every((r) => r.taxi?.restriction?.includes("taxi"))).toBe(
      true,
    );
    expect(result.find((r) => r.tier.id === "t-1")).toBeUndefined();
  });

  test("фильтр по услуге car-sharing", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      locationFilter: "Regions",
      selectedOptions: ["car-sharing"],
    });

    expect(
      result.every((r) => r.taxi?.restriction?.includes("car-sharing")),
    ).toBe(true);
  });

  test("фильтр по капиталу — отсекает большой баланс", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      sliderIndex: 1,
    });

    expect(result.find((r) => r.tier.id === "alfa-1")).toBeUndefined();
    expect(result.find((r) => r.tier.id === "u-1")).toBeDefined();
  });

  test("hideSalary — скрывает тарифы с salary", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      hideSalary: true,
    });

    expect(result.find((r) => r.tier.id === "alfa-1")).toBeUndefined();
    expect(result.find((r) => r.tier.id === "vtb-1")).toBeDefined();
  });

  test("hideSpendings — скрывает тарифы с spendings", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      locationFilter: "Regions",
      hideSpendings: true,
    });

    expect(result.find((r) => r.tier.id === "t-1")).toBeUndefined();
  });

  test("hideUltima — скрывает ultima-only когда выбран только taxi", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      selectedOptions: ["taxi"],
      hideUltima: true,
    });

    expect(result.find((r) => r.tier.id === "alfa-1")).toBeUndefined();
    expect(result.find((r) => r.tier.id === "vtb-1")).toBeDefined();
  });

  test("hideUltima не действует если выбрано не только taxi", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      selectedOptions: ["taxi", "car-sharing"],
      hideUltima: true,
    });

    expect(result.find((r) => r.tier.id === "alfa-1")).toBeDefined();
  });

  test("location Moscow — только Moscow и без location", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      locationFilter: "Moscow",
    });

    expect(result.find((r) => r.tier.id === "t-1")).toBeUndefined();
    expect(result.find((r) => r.tier.id === "u-1")).toBeDefined();
  });

  test("location Regions — только Regions и без location", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      locationFilter: "Regions",
    });

    expect(result.find((r) => r.tier.id === "t-1")).toBeDefined();
    expect(result.find((r) => r.tier.id === "u-1")).toBeDefined();
  });

  test("комбинация банк + услуга", () => {
    const result = filterTaxiRows(rows, {
      ...baseFilters,
      selectedBanks: ["ВТБ"],
      selectedOptions: ["taxi"],
    });

    expect(result.every((r) => r.bank.name === "ВТБ")).toBe(true);
    expect(result.every((r) => r.taxi?.restriction?.includes("taxi"))).toBe(
      true,
    );
  });
});
