import { Instagram } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/siteData';
import { VuxxLogo } from './VuxxLogo';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E4E3EC] bg-[#14121F] py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#inicio" aria-label="Vuxx.dev - Topo da página" className="inline-block">
              <VuxxLogo variant="dark" />
            </a>
            <p className="mt-3 max-w-sm text-sm text-[#D4D2DF]">
              Inovação ao alcance do seu negócio. Sites institucionais e renovação de identidade
              visual para pequenos negócios.
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#D4D2DF]"
          >
            <a href="#sobre" className="transition-colors hover:text-white">
              Sobre
            </a>
            <a href="#servicos" className="transition-colors hover:text-white">
              Serviços
            </a>
            <a href="#portfolio" className="transition-colors hover:text-white">
              Portfólio
            </a>
            <a href="#planos" className="transition-colors hover:text-white">
              Planos
            </a>
            <a href="#contato" className="transition-colors hover:text-white">
              Contato
            </a>
          </nav>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors hover:border-white hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            <span>{INSTAGRAM_HANDLE}</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-[#A8A5B8] sm:flex-row sm:items-center">
          <p>© {year} vuxx.dev. Todos os direitos reservados.</p>
          <p>Atendimento direto pelo WhatsApp e Instagram {INSTAGRAM_HANDLE}</p>
        </div>
      </div>
    </footer>
  );
}
