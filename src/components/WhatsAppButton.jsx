
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "243970854444";

  const message =
    "Bonjour JOSUNICO, je vous contacte depuis votre site web. J'aimerais obtenir des informations sur vos services.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter JOSUNICO sur WhatsApp"
      title="Discuter avec JOSUNICO sur WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={28} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
