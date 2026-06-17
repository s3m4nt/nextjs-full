import PageLayout from "@/components/PageLayout";
import UsersClient from "@/components/UsersClient";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Users() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 60 } }
  );
  const users: { id: number; name: string }[] = await res.json();

  return (
    <PageLayout>
      <UsersClient initialUsers={users} />
    </PageLayout>
  );
}
