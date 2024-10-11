import Link from "next/link";

const page = () => {
  return (
    <div className="flex gap-4">
      <Link href="/todos">Todos</Link>
      <Link href="/sstTest">sstTest</Link>
      <Link href="/isrTest">isrTest</Link>
    </div>
  );
};

export default page;
