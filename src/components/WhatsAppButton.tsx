import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5561991513859";
const WHATSAPP_MESSAGE =
  "Olá, gostaria de falar agora com um consultor sobre o financiamento 100%";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_4px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <MessageCircle size={26} fill="currentColor" strokeWidth={0} />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-stone-50 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Fale conosco
      </span>
    </a>
  );
}
