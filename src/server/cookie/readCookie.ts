const COOKIE_NAME = "premium_filters";

export function readCookie(): string | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) {
    return null;
  }

  return match.slice(COOKIE_NAME.length + 1);
}
