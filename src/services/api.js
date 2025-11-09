export async function sendChat({ model, messages }) {
  console.log(model);
  const res = await fetch(`http://localhost:3001/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, messages }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}`);
  }
  return res.json();
}
