export default async function getData() {
  const response = await fetch(process.env.API_URL)
  const data = await response.json()
  return data
}
