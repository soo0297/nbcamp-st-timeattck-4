export async function getAdviceData() {
  const res = await fetch(
    "https://korean-advice-open-api.vercel.app/api/advice",
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = res.json();
  return data;
}
export default async function isrTestPage() {
  const data = await getAdviceData();
  return (
    <div>
      <p>{data.author}</p>
      <p>{data.authorProfile}</p>
      <p>{data.message}</p>
    </div>
  );
}
