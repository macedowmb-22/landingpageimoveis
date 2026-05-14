import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d1a] py-12">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Nível 1 — Selo de Segurança */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary ring-1 ring-secondary/30">
            <ShieldCheck size={20} />
          </span>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            <span className="font-semibold text-stone-50">
              Ambiente 100% Seguro.
            </span>{" "}
            Seus dados são criptografados de ponta a ponta e tratados em
            rigorosa conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>

        {/* Nível 2 — Disclaimer Financeiro */}
        <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
          A aprovação do financiamento imobiliário e as condições de
          regularização de crédito estão sujeitas à análise técnica, capacidade
          de pagamento e políticas das instituições financeiras parceiras.{" "}
          <span className="font-medium text-slate-400">Importante:</span> nós
          nunca solicitamos depósitos ou transferências antecipadas para
          liberação de simulações.
        </p>

        {/* Nível 3 — Informações Legais */}
        <p className="mt-8 text-xs leading-relaxed text-slate-600">
          © 2026 [Nome da Sua Empresa]. CNPJ: XX.XXX.XXX/0001-XX. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
