import { useState, type FormEvent, type ChangeEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2, MessageCircle, Clock, Lock } from "lucide-react";

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, "($1");
  if (digits.length <= 7) return digits.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

const VALOR_OPTIONS = [
  "Até R$ 200 mil",
  "R$ 200 mil – R$ 350 mil",
  "R$ 350 mil – R$ 500 mil",
  "R$ 500 mil – R$ 800 mil",
  "Acima de R$ 800 mil",
] as const;

const STATUS_OPTIONS = [
  "Nome Limpo",
  "Restrição até R$ 3 mil",
] as const;

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  whatsapp: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "WhatsApp inválido. Use (99) 99999-9999"),
  valor: z.enum(VALOR_OPTIONS, { message: "Selecione o valor do imóvel" }),
  status: z.enum(STATUS_OPTIONS, { message: "Selecione o status do nome" }),
});

type FormState = {
  nome: string;
  whatsapp: string;
  valor: string;
  status: string;
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    whatsapp: "",
    valor: "",
    status: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const updateText =
    (field: keyof FormState, transform?: (v: string) => string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = transform ? transform(e.target.value) : e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
    };

  const updateSelect = (field: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = leadSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mrejvayz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nome: form.nome,
          whatsapp: form.whatsapp,
          valor: form.valor,
          status: form.status,
        }),
      });

      if (!response.ok) throw new Error("Falha no envio");

      const teamMessage =
        `NOVO LEAD SITE\n\n` +
        `Nome: ${form.nome}\n` +
        `WhatsApp: ${form.whatsapp}\n` +
        `Imóvel: ${form.valor}\n` +
        `Status: ${form.status}`;
      const teamUrl = `https://wa.me/5561991513859?text=${encodeURIComponent(teamMessage)}`;
      window.open(teamUrl, "_blank", "noopener,noreferrer");

      setSent(true);
      toast.success("Dados enviados com sucesso!");
    } catch (err) {
      console.error(err);
      toast.error(
        "Ops! Ocorreu um erro. Tente novamente ou use o botão flutuante.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contato"
      className="border-beam relative mx-auto w-full max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 px-6 py-20 transition-all duration-500 md:px-10 md:py-28"
      style={{
        backgroundColor: "#050B18",
        backgroundImage:
          "radial-gradient(ellipse 60% 50% at 80% 50%, #0A192F 0%, transparent 70%)",
        boxShadow:
          "inset 0 0 30px rgba(16,185,129,0.05), 0 30px 80px -40px rgba(0,0,0,0.6)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, color-mix(in oklab, var(--secondary) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Lado esquerdo */}
        <div className="text-center lg:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Consultores online agora
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-stone-50 md:text-5xl">
            Pronto para o <span className="text-secondary">próximo passo?</span>
          </h2>
          <p className="mt-5 text-base text-stone-50/70 md:text-lg">
            Nossos consultores estão online e prontos para analisar seu caso de
            forma gratuita e personalizada.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-stone-50/75">
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <Clock size={18} className="text-secondary" />
              Resposta em menos de 24h
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <MessageCircle size={18} className="text-secondary" />
              Atendimento direto pelo WhatsApp
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <Lock size={18} className="text-secondary" />
              Seus dados protegidos e sigilosos
            </li>
          </ul>
        </div>

        {/* Lado direito - card */}
        <div
          className="group relative rounded-3xl border border-white/10 bg-stone-50/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.5)] md:p-9"
          style={{ boxShadow: "inset 0 0 20px rgba(16,185,129,0.05)" }}
        >
          {sent ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary ring-4 ring-secondary/10">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-50">
                Dados enviados!
              </h3>
              <p className="mt-3 max-w-sm text-stone-50/70">
                Um especialista entrará em contato em breve via WhatsApp para
                sua simulação.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-50">
                  Solicite sua simulação gratuita
                </h3>
                <p className="mt-1 text-sm text-stone-50/60">
                  Preencha os dados abaixo. É rápido.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-stone-50/85">
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={updateText("nome")}
                    maxLength={100}
                    aria-invalid={!!errors.nome}
                    className="border-stone-50/15 bg-stone-50/5 text-stone-50 placeholder:text-stone-50/40"
                  />
                  {errors.nome && (
                    <p className="text-xs text-destructive">{errors.nome}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-stone-50/85">
                    WhatsApp
                  </Label>
                  <Input
                    id="whatsapp"
                    placeholder="(11) 99999-9999"
                    inputMode="tel"
                    value={form.whatsapp}
                    onChange={updateText("whatsapp", maskPhone)}
                    aria-invalid={!!errors.whatsapp}
                    className="border-stone-50/15 bg-stone-50/5 text-stone-50 placeholder:text-stone-50/40"
                  />
                  {errors.whatsapp && (
                    <p className="text-xs text-destructive">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="valor" className="text-stone-50/85">
                    Valor do imóvel desejado
                  </Label>
                  <Select
                    value={form.valor}
                    onValueChange={updateSelect("valor")}
                  >
                    <SelectTrigger
                      id="valor"
                      aria-invalid={!!errors.valor}
                      className="border-stone-50/15 bg-stone-50/5 text-stone-50 data-[placeholder]:text-stone-50/40"
                    >
                      <SelectValue placeholder="Selecione uma faixa" />
                    </SelectTrigger>
                    <SelectContent>
                      {VALOR_OPTIONS.map((v) => (
                        <SelectItem key={v} value={v}>
                          {v}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.valor && (
                    <p className="text-xs text-destructive">{errors.valor}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status" className="text-stone-50/85">
                    Status do nome
                  </Label>
                  <Select
                    value={form.status}
                    onValueChange={updateSelect("status")}
                  >
                    <SelectTrigger
                      id="status"
                      aria-invalid={!!errors.status}
                      className="border-stone-50/15 bg-stone-50/5 text-stone-50 data-[placeholder]:text-stone-50/40"
                    >
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.status && (
                    <p className="text-xs text-destructive">{errors.status}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="mt-2 w-full shadow-[0_0_0_0_color-mix(in_oklab,var(--secondary)_60%,transparent)] transition-shadow duration-300 hover:shadow-[0_0_30px_4px_color-mix(in_oklab,var(--secondary)_45%,transparent)]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar e Simular Agora"
                  )}
                </Button>

                <p className="text-center text-[11px] text-stone-50/45">
                  Ao enviar você concorda em receber o contato de um consultor.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
