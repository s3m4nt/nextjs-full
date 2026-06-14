"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/users", label: "Users" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="font-black border-b border-slate-500 shadow-md shadow-stone-200 relative z-10 flex justify-center text-4xl p-5">
      <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-around">

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-center underline decoration-2 ${pathname === href || pathname.startsWith(href + '/') ? 'decoration-black' : 'decoration-transparent'}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
