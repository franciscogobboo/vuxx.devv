import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, MessageCircle, X } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  type ProjectCategory,
  type ProjectItem,
} from '../data/siteData';
import { SafeImage } from './SafeImage';

interface PortfolioSectionProps {
  onOpenQuote: (defaultPlan?: string) => void;
}

const CATEGORIES: ProjectCategory[] = ['Todos', 'Sites Institucionais', 'Identidade Visual'];

export function PortfolioSection({ onOpenQuote }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="portfolio" className="border-b border-[#E4E3EC] bg-[#F6F5FA] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Segmented Filter */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#636073]">Portfólio selecionado</p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#14121F] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Projetos reais desenhados para gerar resultados e autoridade
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar projetos por categoria"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#E4E3EC] bg-white p-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 sm:text-sm ${
                    isActive
                      ? 'bg-[#6B3DF5] text-white'
                      : 'text-[#4A4859] hover:bg-[#F6F5FA] hover:text-[#14121F]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Editorial Project Grid */}
        <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E4E3EC] bg-white transition-colors duration-200 hover:border-[#14121F]/40"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-[#F6F5FA] text-left focus-visible:outline-none"
                aria-label={`Ver detalhes do projeto ${project.title}`}
              >
                <SafeImage
                  src={project.image}
                  alt={project.imageAlt}
                  fallbackTitle={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>

              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#636073]">
                    <span className="font-semibold text-[#14121F]">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.sector}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{project.deliveryTime}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-[#14121F]">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A4859] sm:text-base">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 flex flex-col justify-between gap-3 border-t border-[#E4E3EC] pt-4 sm:flex-row sm:items-center">
                  <p className="text-sm font-semibold text-[#14121F] tabular-nums">
                    {project.impactMetric}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#6B3DF5] whitespace-nowrap shrink-0 transition-colors hover:text-[#14121F]"
                  >
                    <span>Ver estudo do caso</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#14121F]/75 p-4 backdrop-blur-sm sm:p-6"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar detalhes do projeto"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#14121F] shadow-md transition-colors hover:bg-[#F6F5FA]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden bg-[#F6F5FA]">
                <SafeImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#636073]">
                  <span className="font-semibold text-[#14121F]">{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.client}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.deliveryTime}</span>
                </div>

                <h3
                  id="modal-project-title"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-[#14121F] sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#4A4859] tabular-nums">
                  Resultado obtido: {selectedProject.impactMetric}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="rounded-xl bg-[#F6F5FA] p-4">
                    <p className="text-xs font-semibold text-[#636073]">Desafio anterior</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#14121F]">
                      {selectedProject.beforeState}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#E4E3EC] bg-white p-4">
                    <p className="text-xs font-semibold text-[#636073]">Solução vuxx.dev</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#14121F]">
                      {selectedProject.solutionApplied}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold text-[#636073]">Entregas realizadas</p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedProject.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="flex items-center gap-2 text-sm text-[#14121F]"
                      >
                        <Check className="h-4 w-4 shrink-0 text-[#14121F]" aria-hidden="true" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 border-t border-[#E4E3EC] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#4A4859]">
                    Quer um resultado parecido para o seu negócio?
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const plan =
                        selectedProject.category === 'Identidade Visual'
                          ? 'Identidade Visual + Site'
                          : 'Site Institucional Completo';
                      setSelectedProject(null);
                      onOpenQuote(plan);
                    }}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#6B3DF5] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#582AD8]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Solicitar orçamento no WhatsApp</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
