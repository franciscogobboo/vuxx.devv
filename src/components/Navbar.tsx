import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { VuxxLogo } from './VuxxLogo';

interface NavbarProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#planos', label: 'Planos' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E4E3EC] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark + symbol in standard PDF colors */}
        <a href="#inicio" aria-label="Vuxx.dev - Início" className="whitespace-nowrap shrink-0">
          <VuxxLogo variant="light" />
        </a>

        {/* Zone 2: 5 concise single-line nav links in neutral gray/black */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4859]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#14121F] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#14121F] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA button in PDF Violeta */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenQuote()}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#6B3DF5] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#582AD8] active:scale-[0.98]"
          >
            Solicitar orçamento
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E4E3EC] text-[#14121F] transition-colors hover:bg-[#F6F5FA] md:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E4E3EC] bg-white px-4 pb-5 pt-3 md:hidden">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#14121F] transition-colors hover:bg-[#F6F5FA]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="mt-3 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#6B3DF5] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#582AD8]"
          >
            Solicitar orçamento no WhatsApp
          </button>
        </div>
      )}
    </header>
  );
}
