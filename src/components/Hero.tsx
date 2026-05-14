import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Gradiente radial sutil em torno do azul royal */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 30%, oklch(0.28 0.15 265) 0%, oklch(0.18 0.12 265) 60%, oklch(0.12 0.08 265) 100%)",
        }}
      />
      {/* Brilho verde sutil de fundo */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-0 h-[500px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, color-mix(in oklab, var(--secondary) 25%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center md:py-40">
        <span className="mb-8 inline-flex items-center rounded-full border border-stone-50/15 bg-stone-50/5 px-4 py-1.5 text-xs font-medium text-stone-50/80 backdrop-blur">
          Especialistas em crédito imobiliário
        </span>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-stone-50 md:text-6xl">
          Realize o Sonho da Casa Própria:{" "}
          <span className="text-secondary">Financiamento 100% Imobiliário</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-50/70 md:text-lg">
          Consultoria especializada para aprovação de crédito. Se o seu nome
          está negativado com dívidas de até{" "}
          <span className="font-semibold text-stone-50">R$ 3 mil</span>, nós
          ajudamos você na quitação para liberar seu financiamento.
        </p>

        <div className="relative mt-10">
          <span
            aria-hidden
            className="absolute inset-0 -z-0 animate-ping rounded-xl bg-secondary/40 opacity-60"
          />
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="group relative font-bold shadow-[0_0_0_0_color-mix(in_oklab,var(--secondary)_60%,transparent)] transition-shadow duration-300 hover:shadow-[0_0_40px_8px_color-mix(in_oklab,var(--secondary)_45%,transparent)]"
          >
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
                setTimeout(() => {
                  const nome = document.getElementById("nome") as HTMLInputElement | null;
                  nome?.focus({ preventScroll: true });
                }, 700);
              }}
            >
              Simular meu Financiamento Agora
              <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        <p className="mt-6 text-xs text-stone-50/50">
          Avaliação gratuita · Resposta em até 24h
        </p>
      </div>
    </section>
  );
}
