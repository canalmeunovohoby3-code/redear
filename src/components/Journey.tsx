import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ClipboardList, Layers, Package, Wrench } from 'lucide-react'
import { useEffect, useState } from 'react'
import { STEPS } from '../data/site'
import { EASE, entrance } from '../lib/motion'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const ICONS = [ClipboardList, Layers, Package, Wrench, CheckCircle2]

const STEP_MS = 2400
const TRANS = 0.55

export function Journey() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % STEPS.length)
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [])

  const dur = reduce ? 0.28 : TRANS

  return (
    <section id="processo" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28">
      <div className="shell relative">
        <SectionHeading
          index="05"
          eyebrow="Como podemos ajudar"
          title="Do material à montagem"
          description="Um percurso objetivo, do entendimento da necessidade até a entrega da solução."
        />

        {/* Desktop e tablet — cards alinhados em sequência com ativação automática */}
        <div className="relative mt-14 hidden sm:block">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {STEPS.map((step, i) => {
              const Icon = ICONS[i]
              const isLast = i === STEPS.length - 1
              const isActive = i === active
              return (
                <Reveal key={step.index} direction="up" delay={i * 0.15} className="relative h-full">
                  <motion.article
                    initial={false}
                    animate={{
                      borderColor: isActive ? 'rgba(5,176,250,0.85)' : 'rgba(221,228,235,1)',
                      backgroundColor: isActive ? 'rgba(5,176,250,0.05)' : 'rgba(255,255,255,1)',
                      boxShadow: isActive
                        ? '0 0 0 1px rgba(5,176,250,0.45), 0 26px 60px -26px rgba(5,176,250,0.6)'
                        : '0 1px 2px rgba(0,21,43,0.05), 0 12px 40px -30px rgba(0,52,104,0.18)',
                      scale: isActive && !reduce ? 1.03 : 1,
                      y: isActive && !reduce ? -6 : 0,
                    }}
                    transition={{ duration: dur, ease: EASE }}
                    data-step={step.index}
                    data-active={isActive ? 'true' : 'false'}
                    className="group relative flex h-full flex-col border border-steel-200 bg-white p-5 xl:p-6"
                  >
                    <motion.span
                      initial={false}
                      animate={{ width: isActive ? '100%' : '0%' }}
                      transition={{ duration: dur, ease: EASE }}
                      className="absolute left-0 top-0 h-px bg-brand"
                      aria-hidden="true"
                    />

                    <motion.span
                      initial={false}
                      animate={{
                        borderColor: isActive ? 'rgba(5,176,250,1)' : 'rgba(163,196,230,1)',
                        color: isActive ? '#05B0FA' : '#003468',
                        boxShadow: isActive
                          ? '0 0 0 4px rgba(5,176,250,0.12), 0 0 22px -4px rgba(5,176,250,0.7)'
                          : '0 0 0 0 rgba(5,176,250,0)',
                        scale: isActive && !reduce ? 1.06 : 1,
                      }}
                      transition={{ duration: dur, ease: EASE }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-600"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </motion.span>

                    <div className="mt-5 flex items-center gap-2">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                        Etapa {step.index}
                      </p>
                      <motion.span
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.5 }}
                        transition={{ duration: dur, ease: EASE }}
                        className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(5,176,250,0.95)]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy-700">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-500">{step.description}</p>

                    <motion.span
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{
                        duration: isActive ? (reduce ? dur : STEP_MS / 1000) : dur * 0.6,
                        ease: isActive ? 'linear' : 'easeOut',
                      }}
                      className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-brand to-brand/30"
                      aria-hidden="true"
                    />
                  </motion.article>

                  {!isLast && (
                    <motion.span
                      {...entrance(reduce, { x: -8, scale: 0.6, delay: 0.6 + i * 0.15, duration: 0.5, amount: 0.6 })}
                      className="pointer-events-none absolute -right-5 top-[38px] z-10 hidden h-5 w-5 items-center justify-center text-brand lg:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                    </motion.span>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Mobile — sequência vertical com ativação automática */}
        <ol className="relative mt-14 sm:hidden">
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0.5 : 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-[27px] top-4 w-px origin-top bg-gradient-to-b from-brand/50 via-navy-200 to-brand/50"
          />
          {STEPS.map((step, i) => {
            const Icon = ICONS[i]
            const isActive = i === active
            return (
              <Reveal key={step.index} direction="left" delay={i * 0.12} className="relative pb-9 last:pb-0">
                <li data-step={step.index} data-active={isActive ? 'true' : 'false'} className="relative flex gap-5">
                  <motion.span
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: dur, ease: EASE }}
                    className="pointer-events-none absolute -inset-x-2 -inset-y-1 rounded-lg bg-brand/[0.06]"
                    aria-hidden="true"
                  />
                  <motion.span
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ delay: reduce ? 0.05 : 0.1 + i * 0.08, duration: reduce ? 0.3 : 0.5 }}
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center"
                  >
                    <motion.span
                      initial={false}
                      animate={{
                        borderColor: isActive ? 'rgba(5,176,250,1)' : 'rgba(163,196,230,1)',
                        color: isActive ? '#05B0FA' : '#003468',
                        boxShadow: isActive
                          ? '0 0 0 4px rgba(5,176,250,0.12), 0 0 24px -6px rgba(5,176,250,0.8)'
                          : '0 0 0 0 rgba(5,176,250,0)',
                        scale: isActive && !reduce ? 1.06 : 1,
                      }}
                      transition={{ duration: dur, ease: EASE }}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-600 shadow-card"
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </motion.span>
                    <motion.span
                      initial={false}
                      animate={{ scale: isActive && !reduce ? 1.12 : 1 }}
                      transition={{ duration: dur, ease: EASE }}
                      className="absolute -bottom-0.5 -right-0.5 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brand font-mono text-[9px] font-semibold text-navy-900"
                    >
                      {step.index}
                    </motion.span>
                  </motion.span>
                  <div className="relative z-10 pt-1">
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
                        Etapa {step.index}
                      </p>
                      <motion.span
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.5 }}
                        transition={{ duration: dur, ease: EASE }}
                        className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(5,176,250,0.95)]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-navy-700">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-steel-500">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
