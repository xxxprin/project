export interface CapitalAndCondtions {
  sliderIndex: number;
  onSliderIndexChange: (value: number) => void;
  conditions: {
    hideSalary: boolean;
    hideSpendings: boolean;
  };
  onToggleSalary: () => void;
  onToggleSpendings: () => void;
}
