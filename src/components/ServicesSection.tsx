import { motion } from 'motion/react';
import { ArrowUpRight, Check, Globe, Palette, Smartphone, Zap } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

export function ServicesSection({ onOpenQuote }: ServicesSectionProps) {
  return (
    <section id="servicos" className="border-b border-[#E4E3EC] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#636073]">Serviços sob medida</p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#14121F] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Tudo o que sua empresa precisa para ser encontrada e escolhida na internet
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#4A4859]">
            Unimos design marcante e estrutura focada em vendas para pequenos negócios que querem
            se destacar da concorrência.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 01: Wide Marquee Service */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-[#E4E3EC] bg-[#F6F5FA] p-7 sm:p-9 lg:col-span-7"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm font-medium text-[#636073] tabular-nums">
                  01. Serviço Principal
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14121F] text-white">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-[#14121F] sm:text-3xl">
                Criação de Sites Institucionais
              </h3>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#4A4859]">
                Sites modernos, rápidos e persuasivos que apresentam sua empresa com autoridade,
                funcionam perfeitamente no celular e levam o visitante direto para o seu WhatsApp.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Layout exclusivo sem cara de modelo pronto',
                  'Textos claros que explicam seu valor rápido',
                  'Estrutura preparada para ranquear no Google',
                  'Integração direta com WhatsApp e Instagram',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#14121F]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#14121F]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#E4E3EC] pt-5">
              <span className="text-xs font-medium text-[#4A4859]">
                Entrega rápida · 7 a 14 dias úteis
              </span>
              <button
                type="button"
                onClick={() => onOpenQuote('Site Institucional Completo')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B3DF5] whitespace-nowrap transition-colors hover:text-[#14121F]"
              >
                <span>Solicitar orçamento</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.article>

          {/* Card 02: Bold Contrast Tinta Card */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl bg-[#14121F] p-7 text-white sm:p-9 lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm font-medium text-[#A8A5B8] tabular-nums">
                  02. Branding & Design
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Palette className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Renovação de Identidade Visual
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[#D4D2DF]">
                Seu negócio cresceu, mas o visual parou no tempo? Atualizamos logotipo, cores e
                tipografia para sua marca transmitir confiança imediata em todos os canais.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Novo logotipo versátil para web e impressos',
                  'Paleta de cores marcante e tipografia coerente',
                  'Guia rápido de aplicação para redes sociais',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D4D2DF]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/15 pt-5">
              <button
                type="button"
                onClick={() => onOpenQuote('Identidade Visual + Site')}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#11C5E8] px-4 py-2.5 text-sm font-semibold text-[#14121F] whitespace-nowrap transition-colors hover:bg-[#38E8A0]"
              >
                <span>Renovar minha marca no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.article>

          {/* Card 03: Supporting Capability - Mobile & Performance */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-[#E4E3EC] bg-white p-7 lg:col-span-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6F5FA] text-[#14121F]">
                <Smartphone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-xs font-medium text-[#636073]">
                  03. Experiência Móvel
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-[#14121F]">
                  Pensado primeiro para quem acessa pelo celular
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4859]">
                  Mais de 80% dos clientes de pequenos negócios chegam pelo smartphone. Garantimos
                  leitura confortável, botões acessíveis e carregamento instantâneo até em conexões
                  4G.
                </p>
              </div>
            </div>
          </motion.article>

          {/* Card 04: Supporting Capability - Speed & SEO */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-[#E4E3EC] bg-white p-7 lg:col-span-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6F5FA] text-[#14121F]">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono text-xs font-medium text-[#636073]">
                  04. Visibilidade & Agilidade
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-[#14121F]">
                  SEO local e fluxo de conversão para WhatsApp
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4859]">
                  Estruturamos títulos, descrições e velocidade para o Google entender exatamente o
                  que você vende, conectando cada página a um botão de orçamento sem atrito.
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
