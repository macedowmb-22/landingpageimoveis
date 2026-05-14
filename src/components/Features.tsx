import { ShieldCheck, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Total Transparência",
    description:
      "Acompanhe cada etapa do processo com relatórios claros e comunicação direta.",
  },
  {
    icon: TrendingUp,
    title: "Avaliação Justa",
    description:
      "Análise de mercado profunda para garantir o melhor preço pelo seu imóvel.",
  },
  {
    icon: Clock,
    title: "Vendas Rápidas",
    description:
      "Estratégia de marketing que conecta o seu imóvel ao comprador ideal em tempo recorde.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Por que escolher a gente
        </h2>
        <p className="mt-3 text-muted-foreground">
          Três pilares que fazem toda a diferença na venda do seu imóvel.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
              <Icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
