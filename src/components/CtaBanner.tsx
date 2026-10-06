import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/whatsapp'
import { entrance } from '../lib/motion'
import { PipeLines } from './ui/Decor'

const EASE = [0.22, 1, 0.36, 1] as const

export function CtaBanner() {
  const reduce = useReducedMotion()
  const enter = (delay: number, y = 52, scale = 1) => ({
    initial: { opacity: 0, y: reduce ? 0 : y, scale: reduce ? 1 : scale },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: {
      delay: reduce ? Math.min(delay, 0.15) : delay,
      duration: reduce ? 0.45 : 0.9,
      ease: EASE,
    },
  })

  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech-light bg-grid-64 opacity-60" />
      <PipeLines className="absolute inset-0 h-full w-full" tone="dark" />
      <motion.div
        {...entrance(reduce, { scale: 0.8, duration: 1.2, amount: 0.3 })}
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[130px]"
      />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-[320px] w-[320px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p {...enter(0, 40)} className="eyebrow eyebrow-light">
              Orçamento
            </motion.p>
            <motion.h2
              {...enter(0.14, 66, 0.96)}
              className="mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[3rem]"
            >
              Precisa de uma solução em ar comprimido?
            </motion.h2>
            <motion.p
              {...enter(0.3, 54)}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              Fale com a RedeAr e solicite informações sobre materiais e montagem de tubulações para
              sua necessidade.
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:text-right">
            <motion.div
              {...enter(0.5, 62, 0.9)}
              className="relative inline-flex w-full justify-center lg:w-auto lg:justify-end"
            >
              {!reduce && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: [0, 0.55, 0], scale: [0.85, 1.12, 1.28] }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 1.1, duration: 1.3, ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-0 bg-brand/50"
                  aria-hidden="true"
                />
              )}
              <motion.a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduce ? undefined : { y: -4 }}
                className="group relative inline-flex w-full items-center justify-center gap-2.5 bg-brand px-6 py-5 text-center font-display text-sm font-semibold leading-tight text-navy-900 shadow-[0_20px_50px_-18px_rgba(5,176,250,0.9)] transition-colors duration-300 hover:bg-white sm:text-base lg:w-auto lg:whitespace-nowrap lg:text-sm xl:text-base"
              >
                <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2.2} />
                <span>Solicitar orçamento pelo WhatsApp</span>
                <ArrowRight className="hidden h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:block" />
              </motion.a>
            </motion.div>
            <motion.p
              {...enter(0.68, 28)}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50"
            >
              Resposta pelo WhatsApp
            </motion.p>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4 border-t border-white/10 pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">08 / 08</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
        </div>
      </div>
    </section>
  )
}
