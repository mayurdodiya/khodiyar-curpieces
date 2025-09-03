import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+919173007171";
  const message = "Hello! I'm interested in your fabric collections. I check your website: https://khodiyarcutpieces.netlify.app/";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-elegant transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
      
      {/* Pulsing animation rings */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10 animation-delay-75" />
    </button>
  );
};

export default WhatsAppButton;