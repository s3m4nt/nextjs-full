import PageLayout from "@/components/PageLayout";
import { notFound } from "next/navigation";

// Ensure this route is rendered on each request
export const dynamic = "force-dynamic";

// User type definition
type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { street: string; city: string };
};

async function fetchUser(id: string): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    return null;
  }
  return (await res.json()) as User;
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    // Show the 404 page if the user doesn't exist
    notFound();
  }

  return (
    <PageLayout>
      <div>
        <h1>{user.name}</h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website}
          </a>
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
      </div>
    </PageLayout>
  );
}
