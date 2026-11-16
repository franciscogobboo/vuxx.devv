import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Instagram, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/siteData';

interface ContactFormState {
  name: string;
  business: string;
  whatsapp: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  business?: string;
  whatsapp?: string;
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    business: '',
    whatsapp: '',
    service: 'Criação de Site Institucional',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome para podermos responder.';
    }
    if (form.business.trim().length < 2) {
      nextErrors.business = 'Informe o nome da sua empresa ou projeto.';
    }
    const digitsOnly = form.whatsapp.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.whatsapp = 'Digite um WhatsApp válido com DDD (ex: 11 99999-9999).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const composed = [
      `Olá, equipe Vuxx.dev! Meu nome é ${form.name.trim()}.`,
      `Empresa: ${form.business.trim()}`,
      `Meu WhatsApp: ${form.whatsapp.trim()}`,
      `Tenho interesse em: ${form.service}`,
      form.message.trim() ? `Detalhes do projeto: ${form.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    setSubmittedMessage(composed);
  };

  return (
    <section id="contato" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Invitation & Channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-sm font-semibold text-[#636073]">Vamos tirar seu site do papel</p>
              <h2
                className="mt-2 font-display text-3xl font-bold tracking-tight text-[#14121F] sm:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                Peça seu orçamento sem compromisso pelo WhatsApp
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4A4859]">
                Preencha os dados ao lado para montar sua solicitação pronta ou fale com a gente
                diretamente. Explicamos prazos, investimento e etapas com total clareza.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-[#E4E3EC] bg-[#F6F5FA] p-5">
                  <p className="text-xs font-semibold text-[#636073]">Atendimento principal</p>
                  <p className="mt-1 font-display text-lg font-bold text-[#14121F]">
                    Orçamento rápido via WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-[#4A4859]">
                    Resposta objetiva em linguagem simples, sem reuniões longas desnecessárias.
                  </p>
                </div>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[60px] items-center justify-between rounded-2xl border border-[#E4E3EC] bg-white p-5 transition-colors hover:border-[#14121F]"
                >
                  <div>
                    <p className="text-xs font-semibold text-[#636073]">Nosso Instagram</p>
                    <p className="mt-0.5 font-display text-lg font-bold text-[#14121F]">
                      {INSTAGRAM_HANDLE}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6F5FA] text-[#14121F]">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-[#E4E3EC] bg-[#F6F5FA] p-6 sm:p-8 lg:p-10">
              {submittedMessage ? (
                <div className="space-y-5 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#38E8A0]/20 text-[#0B6B46]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#14121F]">
                      Solicitação pronta para envio
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A4859]">
                      Preparamos sua mensagem com os dados do seu negócio. Clique no botão abaixo
                      para enviar diretamente no WhatsApp da vuxx.dev.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E4E3EC] bg-white p-4">
                    <p className="text-xs font-semibold text-[#636073]">Resumo da mensagem</p>
                    <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#14121F]">
                      {submittedMessage}
                    </pre>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl(submittedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#6B3DF5] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#582AD8]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Solicitar orçamento no WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedMessage(null)}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[#D5D4DF] bg-white px-5 py-3 text-sm font-semibold text-[#14121F] whitespace-nowrap transition-colors hover:bg-[#ECEBF2]"
                    >
                      Editar informações
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-[#14121F]"
                      >
                        Seu nome
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Ex: Marina Silva"
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#D5D4DF] bg-white px-4 py-2.5 text-sm text-[#14121F] placeholder:text-[#868496] focus:border-[#14121F]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#14121F]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-business"
                        className="block text-sm font-semibold text-[#14121F]"
                      >
                        Nome do seu negócio
                      </label>
                      <input
                        id="contact-business"
                        type="text"
                        required
                        value={form.business}
                        onChange={(e) => {
                          setForm({ ...form, business: e.target.value });
                          if (errors.business) setErrors({ ...errors, business: undefined });
                        }}
                        placeholder="Ex: Padaria Trigo Bom"
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#D5D4DF] bg-white px-4 py-2.5 text-sm text-[#14121F] placeholder:text-[#868496] focus:border-[#14121F]"
                      />
                      {errors.business && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#14121F]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.business}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-sm font-semibold text-[#14121F]"
                      >
                        Seu WhatsApp com DDD
                      </label>
                      <input
                        id="contact-whatsapp"
                        type="tel"
                        required
                        value={form.whatsapp}
                        onChange={(e) => {
                          setForm({ ...form, whatsapp: e.target.value });
                          if (errors.whatsapp) setErrors({ ...errors, whatsapp: undefined });
                        }}
                        placeholder="(11) 99999-9999"
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#D5D4DF] bg-white px-4 py-2.5 text-sm text-[#14121F] placeholder:text-[#868496] focus:border-[#14121F]"
                      />
                      {errors.whatsapp && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#14121F]">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.whatsapp}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-sm font-semibold text-[#14121F]"
                      >
                        O que você precisa?
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="mt-1.5 min-h-[44px] w-full rounded-xl border border-[#D5D4DF] bg-white px-4 py-2.5 text-sm text-[#14121F] focus:border-[#14121F]"
                      >
                        <option value="Criação de Site Institucional">
                          Criação de Site Institucional
                        </option>
                        <option value="Renovação de Identidade Visual">
                          Renovação de Identidade Visual
                        </option>
                        <option value="Pacote Identidade Visual + Site">
                          Pacote Identidade Visual + Site
                        </option>
                        <option value="Plano Presença Essencial">Plano Presença Essencial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-[#14121F]"
                    >
                      Conte brevemente sobre sua empresa (opcional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ex: Hoje só tenho Instagram e quero um site para aparecer no Google e receber orçamentos."
                      className="mt-1.5 w-full rounded-xl border border-[#D5D4DF] bg-white px-4 py-3 text-sm text-[#14121F] placeholder:text-[#868496] focus:border-[#14121F]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#6B3DF5] px-6 py-3.5 text-base font-semibold text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#582AD8] active:scale-[0.99]"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    <span>Solicitar orçamento no WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
