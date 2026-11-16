import { motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData';

interface PricingSectionProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

export function PricingSection({ onOpenQuote }: PricingSectionProps) {
  return (
    <section id="planos" className="border-b border-[#E4E3EC] bg-[#F6F5FA] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#636073]">Preços transparentes</p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#14121F] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Planos pensados para caber no orçamento de pequenos negócios
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#4A4859]">
            Valores claros desde o primeiro contato, pagamento facilitado e zero letras miúdas.
            Precisa de algo diferente? Montamos sob medida no WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = Boolean(plan.featured);
            return (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col justify-between rounded-2xl p-7 sm:p-8 ${
                  isFeatured
                    ? 'bg-[#14121F] text-white ring-2 ring-[#6B3DF5]'
                    : 'border border-[#E4E3EC] bg-white text-[#14121F]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-xs font-semibold ${
                        isFeatured ? 'text-[#38E8A0]' : 'text-[#6B3DF5]'
                      }`}
                    >
                      {isFeatured ? 'Mais procurado · ' : ''}
                      {plan.delivery}
                    </span>
                  </div>

                  <h3
                    className={`mt-3 font-display text-2xl font-bold tracking-tight ${
                      isFeatured ? 'text-white' : 'text-[#14121F]'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isFeatured ? 'text-[#D4D2DF]' : 'text-[#4A4859]'
                    }`}
                  >
                    {plan.audience}
                  </p>

                  <div
                    className={`mt-6 border-y py-5 ${
                      isFeatured ? 'border-white/15' : 'border-[#E4E3EC]'
                    }`}
                  >
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-display text-4xl font-extrabold tracking-tight tabular-nums ${
                          isFeatured ? 'text-white' : 'text-[#14121F]'
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isFeatured ? 'text-[#D4D2DF]' : 'text-[#636073]'
                        }`}
                      >
                        à vista no Pix
                      </span>
                    </div>
                    <p
                      className={`mt-1 font-mono text-xs tabular-nums ${
                        isFeatured ? 'text-[#11C5E8]' : 'text-[#6B3DF5]'
                      }`}
                    >
                      {plan.installments}
                    </p>
                  </div>

                  <p
                    className={`mt-5 text-sm leading-relaxed ${
                      isFeatured ? 'text-[#D4D2DF]' : 'text-[#4A4859]'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2.5 text-sm ${
                          isFeatured ? 'text-white' : 'text-[#14121F]'
                        }`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            isFeatured ? 'text-[#38E8A0]' : 'text-[#6B3DF5]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenQuote(plan.name)}
                    className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
                      isFeatured
                        ? 'bg-[#11C5E8] text-[#14121F] hover:bg-[#38E8A0]'
                        : 'bg-[#6B3DF5] text-white hover:bg-[#582AD8]'
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Solicitar orçamento no WhatsApp</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
