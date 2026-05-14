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
      "Oportunidade exclusiva para conquistar seu imóvel sem necessidade de entrada. Aprovação direta com bancos parceiros.",
  },
  {
    icon: ShieldCheck,
    title: "Regularização de Nome",
    description:
      "Dívidas entre R$ 2 mil e R$ 3 mil? Auxiliamos na quitação para viabilizar seu crédito.",
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
    <section
      className="border-beam relative mx-auto w-full max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 px-6 py-20 transition-all duration-500 md:px-10 md:py-28"
      style={{
        backgroundColor: "#050B18",
        backgroundImage:
          "radial-gradient(ellipse 70% 60% at 50% 0%, #0A192F 0%, transparent 70%)",
        boxShadow:
          "inset 0 0 30px rgba(16,185,129,0.05), 0 30px 80px -40px rgba(0,0,0,0.6)",
      }}
    >
      {/* subtle emerald glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.08), transparent 70%)",
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

        {/* Symmetric grid — equal heights via h-full + flex */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
            >
              {/* Inner light reflection — only on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-3xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="relative text-lg font-semibold text-stone-50">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-stone-50/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
