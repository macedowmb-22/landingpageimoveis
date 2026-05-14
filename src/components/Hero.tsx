import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Sutil gradiente radial de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in oklab, var(--secondary) 18%, transparent), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-6 inline-flex items-center rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          Avaliação gratuita em 24h
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          Venda seu imóvel pelo <span className="text-secondary">preço justo</span>, sem dor de cabeça.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Conectamos você aos compradores certos com estratégia, transparência e a melhor avaliação do mercado.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button variant="secondary" size="lg">
            Quero minha avaliação gratuita
            <ArrowRight />
          </Button>
          <Button variant="outline" size="lg">
            Saber mais
          </Button>
        </div>
      </div>
    </section>
  );
}
