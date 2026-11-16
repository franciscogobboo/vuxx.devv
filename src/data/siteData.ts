export type ProjectCategory = 'Todos' | 'Sites Institucionais' | 'Identidade Visual';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  sector: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  deliveryTime: string;
  impactMetric: string;
  summary: string;
  beforeState: string;
  solutionApplied: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  accentHex: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  service: string;
  beforeAfter: string;
  quote: string;
}

export interface PlanItem {
  id: string;
  name: string;
  audience: string;
  price: string;
  installments: string;
  delivery: string;
  featured?: boolean;
  description: string;
  features: string[];
  whatsappMessage: string;
}

export const HERO_IMAGE = '/src/assets/images/vuxx_hero_showcase_1794823465853.jpg';

export const INSTAGRAM_HANDLE = '@vuxx.dev';
export const INSTAGRAM_URL = 'https://instagram.com/vuxx.dev';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export const VALUE_STRIP_ITEMS = [
  {
    label: 'Prazo médio',
    value: '7 a 14 dias úteis',
    detail: 'Do primeiro contato à publicação',
  },
  {
    label: 'Especialidade',
    value: 'Pequenos negócios',
    detail: 'Estrutura pensada para gerar contatos',
  },
  {
    label: 'Atendimento',
    value: 'Direto no WhatsApp',
    detail: 'Sem termos técnicos complicados',
  },
  {
    label: 'Desempenho',
    value: 'Pronto para o Google',
    detail: 'Carregamento rápido no celular',
  },
];

export const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Foco em pequenos negócios',
    description:
      'Entendemos a rotina de quem empreende. Criamos páginas diretas ao ponto, feitas para transformar visitantes do Google e do Instagram em conversas reais no seu WhatsApp.',
  },
  {
    number: '02',
    title: 'Inovação com linguagem simples',
    description:
      'Aplicamos tecnologia atual de performance e design contemporâneo, explicando cada etapa em português claro. Você acompanha tudo sem precisar decifrar jargões técnicos.',
  },
  {
    number: '03',
    title: 'Entrega rápida e preço justo',
    description:
      'Processos enxutos permitem entregar sites profissionais em poucos dias, sem mensalidades abusivas nem orçamentos inflados que comprometem o caixa da empresa.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Alinhamento no WhatsApp',
    description: 'Você conta o que faz, quem atende e quais serviços quer destacar. Definimos escopo e prazo no mesmo dia.',
  },
  {
    step: '02',
    title: 'Protótipo e visual da marca',
    description: 'Desenhamos o layout completo e, se necessário, renovamos cores, tipografia e logo antes de programar.',
  },
  {
    step: '03',
    title: 'Construção ágil e responsiva',
    description: 'Desenvolvemos o site com foco em velocidade no celular, textos persuasivos e botões estratégicos de contato.',
  },
  {
    step: '04',
    title: 'Publicação e autonomia',
    description: 'Colocamos no ar com seu domínio, configuramos o básico de SEO para o Google e entregamos pronto para vender.',
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'torra-viva',
    title: 'Origin Torrefação & Café',
    client: 'Origin Coffee Roasters',
    sector: 'Alimentação artesanal',
    category: 'Sites Institucionais',
    deliveryTime: '10 dias úteis',
    impactMetric: '+165% pedidos de orçamento em 90 dias',
    summary:
      'Site institucional e catálogo de grãos especiais desenvolvido para atrair cafeterias parceiras e clientes locais via busca orgânica.',
    beforeState:
      'Dependia apenas do perfil no Instagram e perdia clientes que pesquisavam fornecedores de café no Google.',
    solutionApplied:
      'Arquitetura de página única com cardápio visual, história da torrefação e botão direto de pedido atacado no WhatsApp.',
    deliverables: [
      'Site institucional responsivo',
      'Copywriting focado em conversão',
      'SEO local para buscas regionais',
      'Integração direta com WhatsApp',
    ],
    image: '/src/assets/images/portfolio_cafe_botanica_1794823466840.jpg',
    imageAlt: 'Notebook exibindo site institucional moderno para cafeteria e torrefação artesanal',
    accentHex: '#14121F',
  },
  {
    id: 'clinica-serene',
    title: 'Clínica Serene Bem-Estar',
    client: 'Serene Wellness',
    sector: 'Saúde e bem-estar',
    category: 'Identidade Visual',
    deliveryTime: '12 dias úteis',
    impactMetric: '2,4x mais agendamentos semanais',
    summary:
      'Renovação completa da identidade visual e novo site institucional para transmitir acolhimento, confiança e facilitar o agendamento pelo celular.',
    beforeState:
      'Visual antigo e desalinhado com o nível dos atendimentos presenciais, gerando insegurança em novos pacientes.',
    solutionApplied:
      'Nova paleta equilibrada, papelaria institucional, tipografia editorial e página leve com apresentação clara dos tratamentos.',
    deliverables: [
      'Renovação de identidade visual',
      'Manual de marca e papelaria',
      'Site institucional mobile-first',
      'Fluxo de agendamento via WhatsApp',
    ],
    image: '/src/assets/images/portfolio_clinica_aurora_1794823467300.jpg',
    imageAlt: 'Tablet e papelaria de identidade visual renovada para clínica de bem-estar',
    accentHex: '#4A4859',
  },
  {
    id: 'vibrant-studio',
    title: 'Vibrant Marca & Presença Digital',
    client: 'Vibrant Cosméticos & Design',
    sector: 'Marca autoral',
    category: 'Identidade Visual',
    deliveryTime: '14 dias úteis',
    impactMetric: '+120% de reconhecimento em lançamentos',
    summary:
      'Construção de identidade visual marcante em roxo e rosa combinada com página de apresentação mobile-first para lançamentos.',
    beforeState:
      'Comunicação visual genérica que não diferenciava os produtos da marca frente aos concorrentes do setor.',
    solutionApplied:
      'Sistema gráfico geométrico proprietário, embalagens, guia de tipografia e vitrine web otimizada para links da bio.',
    deliverables: [
      'Sistema de marca e logotipo',
      'Direção de embalagens e guia visual',
      'Landing page mobile-first',
      'Kit de templates para redes sociais',
    ],
    image: '/src/assets/images/portfolio_estudio_forma_1794823468181.jpg',
    imageAlt: 'Apresentação de identidade visual roxa e rosa com manual de marca, embalagens e site mobile',
    accentHex: '#14121F',
  },
  {
    id: 'architectura-nord',
    title: 'Architectura Studio',
    client: 'Architectura Studio',
    sector: 'Arquitetura e interiores',
    category: 'Sites Institucionais',
    deliveryTime: '11 dias úteis',
    impactMetric: '+80% solicitações de projetos residenciais',
    summary:
      'Portfólio institucional editorial para escritório de arquitetura apresentar obras concluídas com credibilidade e agilidade.',
    beforeState:
      'Enviava PDFs pesados por e-mail que demoravam para abrir no celular dos potenciais clientes.',
    solutionApplied:
      'Site institucional com galeria leve, apresentação da metodologia do escritório e captura direta para reuniões iniciais.',
    deliverables: [
      'Site portfólio editorial',
      'Otimização de imagens para carregamento rápido',
      'Estrutura de depoimentos e processos',
      'Formulário conectado ao WhatsApp',
    ],
    image: '/src/assets/images/portfolio_arquitetura_nord_1794823468495.jpg',
    imageAlt: 'Monitor em mesa branca exibindo site institucional editorial para estúdio de arquitetura',
    accentHex: '#4A4859',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'depoimento-camila',
    name: 'Camila Ferreira',
    role: 'Sócia-fundadora',
    company: 'Clínica Serene Bem-Estar',
    service: 'Identidade Visual · Site Institucional',
    beforeAfter: 'De visual desatualizado para 2,4x mais agendamentos no WhatsApp em 60 dias',
    quote:
      'Antes da Vuxx.dev, eu tinha vergonha de mandar o link da clínica para os pacientes. Eles explicaram cada passo sem enrolação, renovaram nossa marca e entregaram o site em menos de duas semanas. Hoje grande parte dos novos agendamentos chega direto pelo botão do WhatsApp.',
  },
  {
    id: 'depoimento-rodrigo',
    name: 'Rodrigo Mendes',
    role: 'Proprietário',
    company: 'Origin Torrefação & Café',
    service: 'Site Institucional',
    beforeAfter: 'De zero presença no Google para +165% pedidos de orçamento em 3 meses',
    quote:
      'Precisávamos de um site profissional que coubesse no orçamento da nossa torrefação. O atendimento foi direto pelo WhatsApp do início ao fim, com entrega muito rápida. Passamos a ser encontrados por cafeterias que antes nem sabiam que existíamos.',
  },
  {
    id: 'depoimento-juliana',
    name: 'Juliana Bastos',
    role: 'Arquiteta titular',
    company: 'Architectura Studio',
    service: 'Site Institucional',
    beforeAfter: 'Substituiu PDFs lentos por um portfólio web que gera reuniões semanais',
    quote:
      'Sempre achei que contratar agência seria caro e cheio de reuniões intermináveis. A Vuxx.dev entendeu exatamente o perfil do meu escritório, organizou nossos projetos com clareza e colocou tudo no ar no prazo combinado.',
  },
];

export const PRICING_PLANS: PlanItem[] = [
  {
    id: 'essencial',
    name: 'Presença Essencial',
    audience: 'Para autônomos e negócios locais que precisam entrar no ar rápido',
    price: 'R$ 550',
    installments: 'ou 3x de R$ 199 no cartão (R$ 597)',
    delivery: 'Entrega em até 7 dias úteis',
    description:
      'Página única estratégica (One Page) com apresentação do negócio, serviços, prova social e botão direto para o seu WhatsApp.',
    features: [
      'Design exclusivo em até 5 seções estratégicas',
      'Adaptação total para celular e tablet',
      'Textos revisados para persuadir clientes',
      'Botão flutuante e links diretos para WhatsApp',
      'Configuração inicial para aparecer no Google',
    ],
    whatsappMessage:
      'Olá, equipe Vuxx.dev! Gostaria de solicitar um orçamento para o plano Presença Essencial (R$ 550).',
  },
  {
    id: 'institucional-pro',
    name: 'Site Institucional Completo',
    audience: 'O mais escolhido por pequenas empresas em expansão',
    price: 'R$ 1.290',
    installments: 'ou 4x de R$ 350 no cartão (R$ 1.400)',
    delivery: 'Entrega em até 12 dias úteis',
    featured: true,
    description:
      'Estrutura completa multi-seções ou multi-páginas para empresas que buscam autoridade, portfólio detalhado e geração constante de orçamentos.',
    features: [
      'Tudo do plano Presença Essencial incluído',
      'Páginas ou blocos dedicados para Portfólio e Planos',
      'SEO técnico otimizado para buscas locais',
      'Formulário inteligente conectado ao WhatsApp',
      '30 dias de suporte pós-lançamento sem custo extra',
    ],
    whatsappMessage:
      'Olá, equipe Vuxx.dev! Quero solicitar um orçamento para o Site Institucional Completo (R$ 1.290).',
  },
  {
    id: 'marca-e-site',
    name: 'Identidade Visual + Site',
    audience: 'Para marcas que querem renovar o visual e lançar o novo site juntos',
    price: 'R$ 2.490',
    installments: 'ou 5x de R$ 530 no cartão (R$ 2.650)',
    delivery: 'Entrega em até 14 dias úteis',
    description:
      'Pacote integrado com renovação completa da sua identidade visual (logotipo, cores e tipografia) aplicada ao seu novo site institucional.',
    features: [
      'Renovação de logotipo e sistema visual completo',
      'Paleta de cores, tipografia e manual prático de uso',
      'Site Institucional Completo alinhado à nova marca',
      'Kit de capa e avatar para Instagram (@suaempresa)',
      'Acompanhamento próximo em cada aprovação via WhatsApp',
    ],
    whatsappMessage:
      'Olá, equipe Vuxx.dev! Tenho interesse no pacote completo de Identidade Visual + Site (R$ 2.490) e gostaria de um orçamento.',
  },
];
