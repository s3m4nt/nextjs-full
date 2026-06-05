"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="font-black border-b border-slate-500 shadow-md shadow-stone-200 relative z-10 flex justify-center text-4xl p-5">
      <div className="flex flex-row gap-6 justify-around w-1/2">

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "border-b-2 border-black" : ""}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
