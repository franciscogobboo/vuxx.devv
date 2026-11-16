import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  initialPlan?: string;
  onClose: () => void;
}

const PLAN_OPTIONS = [
  'Site Institucional Completo',
  'Presença Essencial',
  'Identidade Visual + Site',
  'Renovação de Identidade Visual',
  'Orçamento personalizado',
];

export function WhatsAppDrawer({ isOpen, initialPlan, onClose }: WhatsAppDrawerProps) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan || PLAN_OPTIONS[0]);
  const [businessName, setBusinessName] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setSelectedPlan(initialPlan);
    }
  }, [initialPlan]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const composedMessage = businessName.trim()
    ? `Olá, equipe Vuxx.dev! Tenho interesse em "${selectedPlan}" para a empresa ${businessName.trim()}. Gostaria de solicitar um orçamento.`
    : `Olá, equipe Vuxx.dev! Tenho interesse em "${selectedPlan}" e gostaria de solicitar um orçamento para o meu negócio.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(composedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#14121F]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-quote-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-lg rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#636073]">Contato direto vuxx.dev</p>
                <h3
                  id="whatsapp-quote-title"
                  className="mt-1 font-display text-2xl font-bold text-[#14121F]"
                >
                  Solicitar orçamento no WhatsApp
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar janela de orçamento"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E3EC] text-[#14121F] transition-colors hover:bg-[#F6F5FA]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#14121F]">
                  Qual serviço ou plano procura?
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {PLAN_OPTIONS.map((option) => {
                    const active = selectedPlan === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSelectedPlan(option)}
                        className={`min-h-[38px] rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                          active
                            ? 'border-[#6B3DF5] bg-[#6B3DF5] text-white'
                            : 'border-[#E4E3EC] bg-[#F6F5FA] text-[#4A4859] hover:border-[#14121F]/40 hover:text-[#14121F]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="drawer-business"
                  className="block text-sm font-semibold text-[#14121F]"
                >
                  Nome do seu negócio (opcional)
                </label>
                <input
                  id="drawer-business"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Ex: Studio Bela Forma"
                  className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#D5D4DF] bg-white px-4 py-2.5 text-sm text-[#14121F] placeholder:text-[#868496] focus:border-[#14121F]"
                />
              </div>

              <div className="rounded-xl border border-[#E4E3EC] bg-[#F6F5FA] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#636073]">
                    Mensagem pronta para enviar
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#14121F] hover:text-[#6B3DF5]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiar texto</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#14121F]">{composedMessage}</p>
              </div>

              <a
                href={buildWhatsAppUrl(composedMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#6B3DF5] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#582AD8]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Abrir conversa no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
