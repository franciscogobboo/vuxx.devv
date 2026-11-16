import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

export function FloatingWhatsApp({ onOpenQuote }: FloatingWhatsAppProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
    >
      <button
        type="button"
        onClick={() => onOpenQuote()}
        aria-label="Solicitar orçamento no WhatsApp"
        className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#6B3DF5] px-4 text-sm font-semibold text-white shadow-lg shadow-[#14121F]/25 transition-all duration-150 hover:bg-[#11C5E8] hover:text-[#14121F] active:scale-95 sm:h-13 sm:px-5"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span className="hidden whitespace-nowrap sm:inline">Orçamento no WhatsApp</span>
      </button>
    </motion.div>
  );
}
