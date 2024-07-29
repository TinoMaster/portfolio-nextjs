import { Hero } from "@/components/ui/Hero";
import { ReasonForOurService } from "@/components/ui/ReasonForOurService";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-darkMode">
      <Hero />
      <div className="bg-gradient-to-r from-slate-700/5 via-transparent to-slate-600/5 w-screen">
        <ReasonForOurService />
      </div>
    </main>
  );
}
