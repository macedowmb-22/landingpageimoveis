import { useState, type FormEvent, type ChangeEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

// Máscara: (99) 99999-9999
function maskPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.replace(/(\d{0,2})/, "($1");
  if (digits.length <= 7)
    return digits.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}

// Máscara monetária BRL
function maskCurrency(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  if (!digits) return "";
  const number = Number(digits) / 100;
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const leadSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Nome muito curto")
    .max(100, "Nome muito longo"),
  whatsapp: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, "WhatsApp inválido. Use (99) 99999-9999"),
  valor: z.string().min(1, "Informe o valor do imóvel"),
});

export function LeadForm() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", valor: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof typeof form, transform?: (v: string) => string) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = transform ? transform(e.target.value) : e.target.value;
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
    // Simula envio
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    toast.success("Solicitação enviada!", {
      description: "Entraremos em contato pelo WhatsApp em breve.",
    });
  }

  return (
    <section id="contato" className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-lg md:p-12">
        {sent ? (
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Recebemos seus dados!
            </h3>
            <p className="mt-2 max-w-md text-muted-foreground">
              Em breve um especialista entrará em contato pelo seu WhatsApp para
              dar continuidade à avaliação do seu imóvel.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Receba sua avaliação gratuita
              </h2>
              <p className="mt-2 text-muted-foreground">
                Preencha os dados e fale com um especialista hoje mesmo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={update("nome")}
                  maxLength={100}
                  aria-invalid={!!errors.nome}
                />
                {errors.nome && (
                  <p className="text-xs text-destructive">{errors.nome}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  placeholder="(11) 99999-9999"
                  inputMode="tel"
                  value={form.whatsapp}
                  onChange={update("whatsapp", maskPhone)}
                  aria-invalid={!!errors.whatsapp}
                />
                {errors.whatsapp && (
                  <p className="text-xs text-destructive">{errors.whatsapp}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="valor">Valor estimado do imóvel</Label>
                <Input
                  id="valor"
                  placeholder="R$ 0,00"
                  inputMode="numeric"
                  value={form.valor}
                  onChange={update("valor", maskCurrency)}
                  aria-invalid={!!errors.valor}
                />
                {errors.valor && (
                  <p className="text-xs text-destructive">{errors.valor}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Solicitar avaliação"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
