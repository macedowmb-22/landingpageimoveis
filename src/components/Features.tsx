import { Home, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Home,
    title: "Financiamento 100%",
    description:
      "Oportunidade exclusiva para conquistar seu imóvel sem necessidade de entrada.",
  },
  {
    icon: ShieldCheck,
    title: "Regularização de Nome",
    description:
      "Dívidas entre R$ 2 mil e R$ 3 mil? Nós auxiliamos na quitação para viabilizar seu crédito.",
  },
  {
    icon: Zap,
    title: "Análise de Elite",
    description:
      "Processo rápido, seguro e transparente para você e seu negócio.",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Glow sutil ao fundo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--secondary) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-50 md:text-4xl">
            Por que somos a escolha certa
          </h2>
          <p className="mt-3 text-stone-50/60">
            Três pilares que destravam o seu financiamento.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-xl border border-stone-50/10 bg-stone-50/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:bg-stone-50/[0.07] hover:shadow-[0_0_40px_-10px_color-mix(in_oklab,var(--secondary)_60%,transparent)]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-stone-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-50/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
