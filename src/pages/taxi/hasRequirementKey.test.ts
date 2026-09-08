import { hasRequirementKey } from "./hasRequirmentKey";
import { test, describe, expect } from "vitest";
import { type Requirement } from "../../domain/premium/requirments";

describe("hasRequirementKey", () => {
  test("находит ключ в массиве объектов", () => {
    const data: Requirement[] = [
      { key: "shares", value: 1 },
      { key: "spendings", value: 2 },
    ];

    expect(hasRequirementKey(data, "spendings")).toBe(true);
    expect(hasRequirementKey(data, "shares")).toBe(true);
    expect(hasRequirementKey(data, "salary")).toBe(false);
  });

  test("находит ключ в массиве объектов + двойном массиве", () => {
    const data: (Requirement | Requirement[])[] = [
      { key: "shares", value: 1 },
      { key: "spendings", value: 2 },
      [
        { key: "balance", value: 1, calculation: "average" },
        { key: "monthlyPrice", value: 2 },
      ],
    ];

    expect(hasRequirementKey(data, "spendings")).toBe(true);
    expect(hasRequirementKey(data, "balance")).toBe(true);
    expect(hasRequirementKey(data, "salary")).toBe(false);
  });
});
