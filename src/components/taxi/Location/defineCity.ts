export function defineCity(ip: string) {
  return fetch(`http://ip-api.com/json/${ip}`)
    .then((res) => res.json())
    .then((data) => data.city);
}
