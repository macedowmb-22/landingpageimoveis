import React from "react";
import ReactDOM from "react-dom/client";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import "./styles.css";

function App() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#050B18" }}
    >
      {/* Deep Navy Fintech Gradient — radial accents */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 10%, #0A192F 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 85% 55%, #0A192F 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 50% 100%, #0A192F 0%, transparent 70%)",
        }}
      />
      {/* Subtle emerald + blue mesh blobs for cinematic depth */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="absolute -left-40 top-[-10%] h-[600px] w-[600px] rounded-full"
          style={{ background: "rgba(16,185,129,0.08)", filter: "blur(150px)" }}
        />
        <div
          className="absolute -right-40 top-[40%] h-[700px] w-[700px] rounded-full"
          style={{ background: "rgba(59,130,246,0.08)", filter: "blur(150px)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-6 p-3 sm:p-5 md:gap-8 md:p-6">
        <Hero />
        <Features />
        <LeadForm />
      </div>
      <Footer />
      <WhatsAppButton />
      <Toaster position="top-center" richColors />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
