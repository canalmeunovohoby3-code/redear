export const COMPANY = {
  name: 'RedeAr',
  segment: 'Sistemas de Ar Comprimido',
  phoneDisplay: '(16) 98106-0114',
  whatsappNumber: '5516981060114',
  whatsappUrl: 'https://wa.me/5516981060114',
  coverage: 'Todo o Brasil',
  address: 'R. Américo Sembenelli, 50',
  district: 'Itanhangá',
  city: 'Ribeirão Preto',
  state: 'SP',
  addressFull: 'R. Américo Sembenelli, 50 - Itanhangá, Ribeirão Preto - SP',
} as const

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  COMPANY.addressFull,
)}&t=m&z=17&ie=UTF8&iwloc=near&output=embed`

export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.addressFull,
)}`

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
] as const

export type SolutionKey = 'aluminio' | 'ppr' | 'inox' | 'galvanizado'

export type Solution = {
  key: SolutionKey
  index: string
  name: string
  tag: string
  description: string
}

export const SOLUTIONS: Solution[] = [
  {
    key: 'aluminio',
    index: '01',
    name: 'Alumínio',
    tag: 'Rede de ar comprimido',
    description: 'Solução em alumínio para sistemas de ar comprimido.',
  },
  {
    key: 'ppr',
    index: '02',
    name: 'PPR',
    tag: 'Rede de ar comprimido',
    description: 'Solução em PPR para sistemas de ar comprimido.',
  },
  {
    key: 'inox',
    index: '03',
    name: 'Inox',
    tag: 'Rede de ar comprimido',
    description: 'Solução em inox para sistemas de ar comprimido.',
  },
  {
    key: 'galvanizado',
    index: '04',
    name: 'Galvanizado',
    tag: 'Rede de ar comprimido',
    description: 'Solução em tubulação galvanizada para sistemas de ar comprimido.',
  },
]

export type Step = {
  index: string
  title: string
  description: string
}

export const STEPS: Step[] = [
  {
    index: '01',
    title: 'Entendimento da necessidade',
    description: 'Levantamento do cenário e do que a sua operação precisa.',
  },
  {
    index: '02',
    title: 'Escolha da solução',
    description: 'Definição do material mais adequado para a aplicação.',
  },
  {
    index: '03',
    title: 'Fornecimento dos materiais',
    description: 'Materiais e acessórios para a execução da rede.',
  },
  {
    index: '04',
    title: 'Montagem da tubulação',
    description: 'Execução e organização da rede de ar comprimido.',
  },
  {
    index: '05',
    title: 'Entrega da solução',
    description: 'Rede pronta para integrar a sua operação.',
  },
]

export type SolutionOption = {
  value: string
  label: string
}

export const SOLUTION_OPTIONS: SolutionOption[] = [
  { value: 'Alumínio', label: 'Alumínio' },
  { value: 'PPR', label: 'PPR' },
  { value: 'Inox', label: 'Inox' },
  { value: 'Galvanizado', label: 'Galvanizado' },
  { value: 'Montagem de tubulação', label: 'Montagem de tubulação' },
  { value: 'Outro', label: 'Outro' },
]

export const CREDIBILITY = [
  'Materiais',
  'Montagem',
  'Tubulações',
  'Atendimento em todo o Brasil',
] as const
