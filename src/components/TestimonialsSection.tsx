import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="border-b border-[#E4E3EC] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#636073]">Quem já confiou na vuxx.dev</p>
          <h2
            className="mt-2 font-display text-3xl font-bold tracking-tight text-[#14121F] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Histórias reais de pequenos negócios que ganharam voz e clientes online
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-[#E4E3EC] bg-[#F6F5FA] p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-[#636073]">{item.service}</span>
                  <Quote className="h-5 w-5 text-[#A8A5B8]" aria-hidden="true" />
                </div>

                <p className="mt-4 text-sm font-semibold text-[#14121F]">{item.beforeAfter}</p>

                <blockquote className="mt-3 text-sm leading-relaxed text-[#4A4859] sm:text-base">
                  “{item.quote}”
                </blockquote>
              </div>

              <footer className="mt-6 border-t border-[#E4E3EC] pt-4">
                <p className="font-display text-base font-bold text-[#14121F]">{item.name}</p>
                <p className="text-xs text-[#636073]">
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
