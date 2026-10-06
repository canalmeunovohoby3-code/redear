import { Boxes, MapPin, Route, Wrench } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { entrance } from '../lib/motion'

const ITEMS = [
  { icon: Boxes, label: 'Materiais', sub: 'Fornecimento' },
  { icon: Wrench, label: 'Montagem', sub: 'Execução' },
  { icon: Route, label: 'Tubulações', sub: 'Redes de ar' },
  { icon: MapPin, label: 'Todo o Brasil', sub: 'Atendimento' },
]

export function CredibilityBar() {
  const reduce = useReducedMotion()

  return (
    <section aria-label="Principais pontos" className="relative border-y border-steel-200 bg-white">
      <div className="shell">
        <div className="grid grid-cols-2 divide-x divide-y divide-steel-200 sm:grid-cols-4 sm:divide-y-0">
          {ITEMS.map((it, i) => {
            const Icon = it.icon
            return (
              <motion.div
                key={it.label}
                {...entrance(reduce, { x: -60, duration: 0.75, delay: i * 0.16, amount: 0.25 })}
                className="group flex items-center gap-4 px-5 py-7 transition-colors duration-300 hover:bg-steel-50 sm:px-7 sm:py-8"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-steel-200 text-navy-500 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[15px] font-semibold leading-tight text-navy-700 sm:text-base">
                    {it.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-steel-400">
                    {it.sub}
                  </span>
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
