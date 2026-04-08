import { Phone, MessageCircle } from 'lucide-react';

const whatsappHref = 'https://api.whatsapp.com/send/?phone=6366666760&text=Hi+AdoMobi+Team%2C&type=phone_number&app_absent=0';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp with 6366666760"
        title="Chat on WhatsApp with 6366666760"
        className="group flex items-center gap-3 rounded-full bg-white/95 px-3 py-2 shadow-[0_16px_40px_rgba(15,23,42,0.18)] ring-1 ring-black/5 backdrop-blur hover:-translate-y-0.5 transition-transform"
      >
        <span className="hidden sm:inline text-sm font-medium text-slate-700 whitespace-nowrap">
          Chat on WhatsApp with 6366666760
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform group-hover:scale-105">
          <MessageCircle className="h-7 w-7" />
        </span>
      </a>

      <a
        href="tel:6366666760"
        aria-label="Call 6366666760"
        title="Call 6366666760"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f97316] text-white shadow-[0_16px_40px_rgba(249,115,22,0.32)] ring-1 ring-white/20 hover:-translate-y-0.5 transition-transform"
      >
        <Phone className="h-7 w-7" />
      </a>
    </div>
  );
}