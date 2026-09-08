export function tryBrowserGeolocation(
  onResult: (location: "Moscow" | "Regions") => void,
) {
  navigator.geolocation.getCurrentPosition((pos) => {
    const { latitude, longitude } = pos.coords;
    const isMoscow =
      latitude > 55.5 &&
      latitude < 56.0 &&
      longitude > 37.3 &&
      longitude < 37.9;

    onResult(isMoscow ? "Moscow" : "Regions");
  });
}
