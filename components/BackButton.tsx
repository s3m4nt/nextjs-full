"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="mt-7 w-full text-right text-[#3333a4]"
      onClick={() => router.back()}
    >
      &#x300A; Go Back
    </button>
  );
}
