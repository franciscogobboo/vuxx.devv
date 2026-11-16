import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { HERO_IMAGE, VALUE_STRIP_ITEMS } from '../data/siteData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

export function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#E4E3EC] bg-white pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Subtle monochrome backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#F6F5FA] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-24 h-[320px] w-[320px] rounded-full bg-[#ECEBF2] opacity-80 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typography Hierarchy & Primary Action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="mb-4 text-sm font-medium text-[#636073]">
              Agência de sites e identidade visual · Foco em pequenos negócios
            </p>

            <h1
              className="font-display font-extrabold tracking-tight text-[#14121F]"
              style={{
                fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)',
                lineHeight: 1.06,
                textWrap: 'balance',
              }}
            >
              Inovação ao alcance do{' '}
              <span className="bg-gradient-to-r from-[#6B3DF5] to-[#0B8CA8] bg-clip-text text-transparent">
                seu negócio.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4A4859] sm:text-lg">
              Criamos sites institucionais e renovamos a identidade visual de empresas que querem
              aumentar sua visibilidade na internet — com tecnologia atual, entrega rápida e preço
              justo que cabe na realidade do seu negócio.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#6B3DF5] px-6 py-3.5 text-base font-semibold text-white whitespace-nowrap shrink-0 shadow-sm transition-all duration-150 hover:bg-[#582AD8] active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Solicitar orçamento no WhatsApp</span>
              </button>

              <a
                href="#portfolio"
                className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border border-[#D5D4DF] bg-white px-5 py-3.5 text-sm font-semibold text-[#14121F] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#14121F] hover:bg-[#F6F5FA]"
              >
                <span>Ver projetos reais</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Striking Showcase Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#E4E3EC] bg-[#F6F5FA] p-3 sm:p-4 lg:min-h-[440px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
                <SafeImage
                  src={HERO_IMAGE}
                  alt="Composição arquitetônica apresentando site institucional moderno da vuxx.dev"
                  fallbackTitle="vuxx.dev — Presença Digital"
                  className="h-full w-full object-cover lg:h-full"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14121F]/90 via-[#14121F]/55 to-transparent p-5 sm:p-6">
                  <p className="text-xs font-medium text-[#38E8A0]">
                    Design estratégico · Performance móvel · Entrega ágil
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                    Sites pensados para transformar buscas em clientes no WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Proof & Value Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-4 border-t border-[#E4E3EC] pt-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8"
        >
          {VALUE_STRIP_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="text-xs font-medium text-[#636073]">{item.label}</span>
              <span className="mt-1 font-display text-lg font-bold tracking-tight text-[#14121F] tabular-nums">
                {item.value}
              </span>
              <span className="mt-0.5 text-sm text-[#4A4859]">{item.detail}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
