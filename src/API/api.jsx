const url = "http://localhost:8090";

export async function getAds() {
  const response = await fetch(`${url}/ads`);

  if (!response.ok) {
    throw new Error("ошибка сервера");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
