export interface BanksFilter {
  selectedBanks: string[];
  onToggle: (bankName: string) => void;
}
