import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <LeadForm />
    </main>
  );
}
