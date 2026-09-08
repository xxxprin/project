const COOKIE_NAME = "premium_filters";

export function saveCookie(value: string) {
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${365 * 24 * 60 * 60}; samesite=lax`;
}
