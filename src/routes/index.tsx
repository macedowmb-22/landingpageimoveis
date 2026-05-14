import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04060d]">
      {/* Mesh gradient background — fixed, blurred, cinematic depth */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -left-40 top-[-10%] h-[600px] w-[600px] rounded-full"
          style={{
            background: "rgba(16,185,129,0.12)",
            filter: "blur(150px)",
          }}
        />
        <div
          className="absolute -right-40 top-[40%] h-[700px] w-[700px] rounded-full"
          style={{
            background: "rgba(59,130,246,0.12)",
            filter: "blur(150px)",
          }}
        />
        <div
          className="absolute left-1/3 bottom-[-10%] h-[500px] w-[500px] rounded-full"
          style={{
            background: "rgba(16,185,129,0.08)",
            filter: "blur(150px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-6 p-3 sm:p-5 md:gap-8 md:p-6">
        <Hero />
        <Features />
        <LeadForm />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
