"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type User = {
  id: number;
  name: string;
};

export default function UsersClient({ initialUsers }: { initialUsers: User[] }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<User[]>(initialUsers);

  useEffect(() => {
    const timer = setTimeout(() => {
      const term = search.toLowerCase();
      setFiltered(
        initialUsers.filter((u) => u.name.toLowerCase().includes(term))
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [search, initialUsers]);

  return (
    <div className="p-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search users"
        className="mb-4 p-2 border rounded w-full"
      />
      {filtered.length === 0 ? (
        <p className="font-satoshi font-black text-2xl mt-4 text-center text-gray-500">no users found.</p>
      ) : (
        <ul className="space-y-2">
          {filtered.map((user) => (
            <li key={user.id}>
              <Link
                href={`/users/${user.id}`}
                className="hover:underline"
              >
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
