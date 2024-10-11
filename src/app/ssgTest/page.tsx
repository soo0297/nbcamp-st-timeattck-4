export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/10");
  const data = res.json();
  return data;
}
export default async function ssgTestPage() {
  const data = await getData();
  return (
    <div>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>
  );
}
