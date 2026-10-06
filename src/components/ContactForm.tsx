import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Globe2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { COMPANY, SOLUTION_OPTIONS } from '../data/site'
import { buildQuoteMessage, type QuoteFormData } from '../lib/whatsapp'
import { Reveal } from './ui/Reveal'

type Errors = Partial<Record<keyof QuoteFormData, string>>

const initialState: QuoteFormData = {
  nome: '',
  empresa: '',
  telefone: '',
  email: '',
  solucao: '',
  mensagem: '',
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export function ContactForm() {
  const [data, setData] = useState<QuoteFormData>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const contactItems = useMemo(
    () => [
      { icon: Phone, label: 'WhatsApp', value: COMPANY.phoneDisplay },
      { icon: MapPin, label: 'Endereço', value: COMPANY.addressFull },
      { icon: Globe2, label: 'Atendimento', value: COMPANY.coverage },
      { icon: Mail, label: 'Segmento', value: COMPANY.segment },
    ],
    [],
  )

  function update(field: keyof QuoteFormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    setSent(false)
  }

  function validate(): Errors {
    const next: Errors = {}
    if (!data.nome.trim()) next.nome = 'Informe seu nome.'
    if (!data.telefone.trim()) next.telefone = 'Informe seu telefone/WhatsApp.'
    else if (data.telefone.replace(/\D/g, '').length < 10) next.telefone = 'Telefone incompleto.'
    if (!data.email.trim()) next.email = 'Informe seu e-mail.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = 'E-mail inválido.'
    if (!data.solucao) next.solucao = 'Selecione o tipo de solução.'
    return next
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0]
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }
    const message = buildQuoteMessage(data)
    window.open(`https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const inputClass = (field: keyof QuoteFormData) =>
    `field ${errors[field] ? '!border-red-400 !bg-red-50/60' : ''}`

  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden bg-steel-50 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-grid-64 opacity-50" />
      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* coluna informativa */}
        <div className="lg:col-span-5">
          <Reveal direction="left">
            <p className="eyebrow">Contato</p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-700 sm:text-4xl lg:text-[2.9rem]">
              Solicite seu orçamento
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-steel-500">
              Preencha os dados e envie diretamente pelo WhatsApp. Retornamos com as informações sobre
              materiais e montagem de tubulações.
            </p>
          </Reveal>

          <div className="mt-9 space-y-3">
            {contactItems.map((item, i) => {
              const Icon = item.icon
              return (
                <Reveal key={item.label} direction="left" delay={0.1 + i * 0.08}>
                  <div className="flex items-center gap-4 border border-steel-200 bg-white px-5 py-4">
                    <span className="flex h-10 w-10 items-center justify-center border border-steel-200 text-brand">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel-400">
                        {item.label}
                      </p>
                      <p className="font-display text-sm font-semibold text-navy-700">{item.value}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal direction="left" delay={0.35}>
            <div className="mt-6 border border-navy-600/15 bg-navy-700 p-6 text-white">
              <div className="tech-corners text-white/40">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  Preferencialmente
                </p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug">
                  Falar agora pelo WhatsApp
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  Envie sua necessidade e receba o retorno da nossa equipe.
                </p>
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-light mt-5"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                  {COMPANY.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* formulário */}
        <div className="lg:col-span-7">
          <Reveal direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative border border-steel-200 bg-white p-6 shadow-card sm:p-8 lg:p-10"
            >
              <div className="absolute left-0 top-0 h-1 w-24 bg-brand" />
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel-400">
                    Formulário de orçamento
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-navy-700">
                    Dados para contato
                  </h3>
                </div>
                <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-400 sm:block">
                  * campos obrigatórios
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="field-nome" className="field-label">
                    Nome *
                  </label>
                  <input
                    id="field-nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    value={data.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => update('nome', e.target.value)}
                    className={inputClass('nome')}
                    placeholder="Seu nome"
                    aria-invalid={!!errors.nome}
                  />
                  {errors.nome && <p className="mt-1.5 text-xs text-red-500">{errors.nome}</p>}
                </div>

                <div>
                  <label htmlFor="field-empresa" className="field-label">
                    Empresa
                  </label>
                  <input
                    id="field-empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    value={data.empresa}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => update('empresa', e.target.value)}
                    className="field"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label htmlFor="field-telefone" className="field-label">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="field-telefone"
                    name="telefone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={data.telefone}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => update('telefone', formatPhone(e.target.value))}
                    className={inputClass('telefone')}
                    placeholder="(00) 00000-0000"
                    aria-invalid={!!errors.telefone}
                  />
                  {errors.telefone && <p className="mt-1.5 text-xs text-red-500">{errors.telefone}</p>}
                </div>

                <div>
                  <label htmlFor="field-email" className="field-label">
                    E-mail *
                  </label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => update('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="voce@empresa.com.br"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="field-solucao" className="field-label">
                    Tipo de solução *
                  </label>
                  <select
                    id="field-solucao"
                    name="solucao"
                    value={data.solucao}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => update('solucao', e.target.value)}
                    className={`${inputClass('solucao')} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23003468' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                    aria-invalid={!!errors.solucao}
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {SOLUTION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.solucao && <p className="mt-1.5 text-xs text-red-500">{errors.solucao}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="field-mensagem" className="field-label">
                    Mensagem
                  </label>
                  <textarea
                    id="field-mensagem"
                    name="mensagem"
                    rows={4}
                    value={data.mensagem}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => update('mensagem', e.target.value)}
                    className="field resize-none"
                    placeholder="Descreva sua necessidade"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn-primary group w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                  Enviar pelo WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="max-w-xs text-xs leading-relaxed text-steel-400">
                  Ao enviar, abriremos o WhatsApp com a mensagem já preenchida.
                </p>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center gap-3 border border-brand/40 bg-brand/10 px-5 py-4"
                  role="status"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" strokeWidth={2} />
                  <p className="text-sm text-navy-700">
                    Tudo certo! Se o WhatsApp não abriu automaticamente, verifique o bloqueador de
                    pop-ups e tente novamente.
                  </p>
                </motion.div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
