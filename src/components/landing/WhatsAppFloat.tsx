import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/6285330000029";

export function WhatsAppFloat() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform group-hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </span>
    </a>
  );
}

export const WHATSAPP_URL = WA;
