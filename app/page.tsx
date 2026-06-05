import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <span>THIS IS THE HOMEPAGE</span>
        
        <Image
          src="https://images.unsplash.com/photo-1501789605990-988ca86e9ff3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVtb3JpYWwlMjBkYXl8ZW58MHx8MHx8fDA%3D"
          alt="Valentino Funghi"
          width={700}
          height={20}
          priority
        />
        <div className="text-center text-sm text-gray-500 absolute bottom-0">&copy; all rights  2026</div>
      </main>
    </div>
  );
}
