import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { DIFFERENTIATORS, PROCESS_STEPS } from '../data/siteData';

interface AboutSectionProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

export function AboutSection({ onOpenQuote }: AboutSectionProps) {
  return (
    <section id="sobre" className="border-b border-[#E4E3EC] bg-[#F6F5FA] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Intro Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-sm font-semibold text-[#636073]">Sobre a vuxx.dev</p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#14121F] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Tecnologia atual e preço justo para quem faz o negócio acontecer.
            </h2>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#6B3DF5] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#582AD8]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-5 lg:col-span-7"
          >
            <p className="text-base leading-relaxed text-[#14121F] sm:text-lg">
              A <strong>Vuxx.dev</strong> é uma agência de criação de sites institucionais para
              pequenos negócios. Acreditamos que toda empresa merece uma presença digital
              profissional, sem comprometer o orçamento.
            </p>
            <p className="text-base leading-relaxed text-[#4A4859]">
              Por isso, unimos tecnologia atual a um preço justo. Conduzimos cada projeto com
              clareza: explicamos cada etapa em linguagem simples e mantemos o contato direto pelo
              WhatsApp. Nosso objetivo é apresentar bem o seu negócio e ajudá-lo a ser encontrado
              por novos clientes.
            </p>
          </motion.div>
        </div>

        {/* 3 Core Differentiators */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item, idx) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-[#E4E3EC] bg-white p-6 sm:p-7"
            >
              <div>
                <span className="font-mono text-sm font-medium text-[#636073] tabular-nums">
                  {item.number}.
                </span>
                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#14121F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A4859] sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bold Architectural Process Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 overflow-hidden rounded-2xl bg-[#14121F] p-6 text-white sm:p-8 lg:p-10"
        >
          <div className="flex flex-col justify-between gap-4 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-medium text-[#A8A5B8]">Como trabalhamos</p>
              <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white">
                Do primeiro oi até o site no ar, tudo explicado sem mistério
              </h3>
            </div>
            <p className="text-sm text-[#D4D2DF]">4 etapas claras · Acompanhamento direto</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="flex flex-col">
                <span className="font-mono text-sm font-medium text-[#A8A5B8] tabular-nums">
                  Etapa {step.step}
                </span>
                <h4 className="mt-2 font-display text-base font-bold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#D4D2DF]">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
