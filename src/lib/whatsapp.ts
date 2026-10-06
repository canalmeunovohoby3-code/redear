import { COMPANY } from '../data/site'

export function whatsappLink(message?: string): string {
  if (!message) return COMPANY.whatsappUrl
  return `${COMPANY.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá, RedeAr! Gostaria de solicitar informações sobre materiais e montagem de tubulações para uma rede de ar comprimido.'

export type QuoteFormData = {
  nome: string
  empresa: string
  telefone: string
  email: string
  solucao: string
  mensagem: string
}

export function buildQuoteMessage(data: QuoteFormData): string {
  const lines = [
    'Olá, RedeAr! Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa || 'Não informado'}`,
    `Telefone/WhatsApp: ${data.telefone}`,
    `E-mail: ${data.email}`,
    `Tipo de solução: ${data.solucao}`,
    '',
    'Mensagem:',
    data.mensagem || '—',
  ]
  return lines.join('\n')
}
