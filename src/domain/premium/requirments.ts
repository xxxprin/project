export type Requirement =
  | {
      key: "balance";
      value: number;
      calculation: "minimum" | "end" | "average";
      extra?: string;
    }
  | { key: "spendings"; value: number }
  | { key: "shares"; value: number }
  | { key: "monthlyPrice"; value: number }
  | { key: "jointAccess"; value: number }
  | { key: "location"; value: "Moscow" | "Regions" }
  | { key: "salary"; value: number };
