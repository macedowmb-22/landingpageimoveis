import { Home, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
};

const features: Feature[] = [
  {
    icon: Home,
    title: "Financiamento 100%",
    description:
      "Oportunidade exclusiva para conquistar seu imóvel sem necessidade de entrada. Aprovação direta com bancos parceiros e condições estendidas para você.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Regularização de Nome",
    description:
      "Dívidas entre R$ 2 mil e R$ 3 mil? Auxiliamos na quitação para viabilizar seu crédito.",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Zap,
    title: "Análise de Elite",
    description:
      "Processo rápido, seguro e transparente.",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function Features() {
  return (
    <section
      className="group/island relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-primary px-6 py-20 transition-all duration-500 hover:border-emerald-400/40 hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.35)] md:px-10 md:py-28"
      style={{
        boxShadow:
          "inset 0 0 20px rgba(16,185,129,0.05), 0 30px 80px -40px rgba(0,0,0,0.6)",
      }}
    >
      {/* Glow sutil ao fundo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--secondary) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-50 md:text-4xl">
            Por que somos a escolha certa
          </h2>
          <p className="mt-3 text-stone-50/60">
            Três pilares que destravam o seu financiamento.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[180px]">
          {features.map(({ icon: Icon, title, description, className }) => (
            <div
              key={title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-stone-50/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-stone-50/[0.07] hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)] ${className}`}
              style={{
                boxShadow: "inset 0 0 20px rgba(16,185,129,0.05)",
              }}
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
