import Footer from "@/components/Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col py-12 px-16 bg-white dark:bg-black">
        {children}
        <Footer />
      </main>
    </div>
  );
}
