export function send(url, body) {
  return fetch(url, { method: "POST", body: JSON.stringify(body) });
}
