import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle, MoveDown } from 'lucide-react'
import { MEDIA } from '../data/media'
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from '../lib/whatsapp'
import { GridBackdrop, PipeLines } from './ui/Decor'
import { MediaFrame } from './ui/MediaFrame'
import { MediaPlaceholder } from './ui/MediaPlaceholder'

const EASE = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-white via-steel-50 to-white pt-[68px] sm:pt-[76px]"
    >
      <GridBackdrop tone="light" />
      <PipeLines className="absolute inset-0 h-full w-full opacity-60" tone="light" />
      <div className="pointer-events-none absolute -right-32 top-24 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-navy-600/5 blur-[100px]" />

      <div className="shell relative grid items-center gap-14 pb-28 pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-36 lg:pt-28">
        {/* LEFT — identidade, headline e ação */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-6"
        >
          <motion.p variants={item} className="eyebrow">
            RedeAr — Sistemas de ar comprimido
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[2.2rem] font-bold leading-[1.04] tracking-tight text-navy-700 sm:text-5xl lg:text-[3.5rem]"
          >
            Soluções em Ar Comprimido para{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Todo o Brasil</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: reduce ? 0.4 : 1.05, duration: reduce ? 0.4 : 0.8, ease: EASE }}
                className="absolute inset-x-0 bottom-1 z-0 h-3 origin-left bg-brand/30 sm:bottom-2 sm:h-4"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-base leading-relaxed text-steel-500 sm:text-lg"
          >
            Materiais e montagem de redes de ar comprimido com soluções em alumínio, PPR, inox e
            galvanizado.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center"
          >
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#solucoes" className="btn-outline group whitespace-nowrap">
              Conheça nossas soluções
              <MoveDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT — imagem principal (mídia limpa + moldura externa) */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-[470px] sm:max-w-[580px] lg:ml-auto lg:mr-0 lg:max-w-none">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: reduce ? 0 : 0.35, duration: reduce ? 0.5 : 1, ease: EASE }}
              className="relative"
            >
              <MediaFrame>
                <MediaPlaceholder
                  src={MEDIA.hero}
                  alt="Rede de ar comprimido instalada em ambiente industrial"
                  ratio="aspect-[4/3]"
                  priority
                  showTag={false}
                />
              </MediaFrame>
            </motion.div>
          </div>
        </div>
      </div>

      {/* section marker */}
      <div className="shell relative pb-8">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-steel-400">01 / 08</span>
          <span className="h-px flex-1 bg-gradient-to-r from-steel-200 to-transparent" />
        </div>
      </div>
    </section>
  )
}
