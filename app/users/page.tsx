import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default async function Users() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users: { id: number; name: string }[] = await res.json();

  return (
    <PageLayout>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}