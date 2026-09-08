export function getSliderValue(index: number) {
  if (index <= 15) {
    return index;
  }

  const steps = index - 15;

  return 15 + steps * 5;
}
