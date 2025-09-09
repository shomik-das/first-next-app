
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/signup");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
export default async function Home() {
  const data = await fetchData();
  return (
  <div>
    <h1>Home page</h1>
    <div>{JSON.stringify(data)}</div>
  </div>
  );
}
