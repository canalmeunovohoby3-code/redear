import type { MotionProps } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

type EntranceOpts = {
  x?: number
  y?: number
  scale?: number
  duration?: number
  delay?: number
  amount?: number
}

/**
 * Entrada de seção que SEMPRE anima.
 * Sob `prefers-reduced-motion`, vira um fade curto (sem deslocamento/escala),
 * garantindo que o conteúdo continue sendo revelado de forma perceptível.
 */
export function entrance(reduce: boolean | null, o: EntranceOpts = {}): MotionProps {
  const { x = 0, y = 0, scale = 1, duration = 0.85, delay = 0, amount = 0.2 } = o
  const f = reduce ? 0 : 1
  return {
    initial: { opacity: 0, x: x * f, y: y * f, scale: 1 + (scale - 1) * f },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    viewport: { once: true, amount },
    transition: {
      duration: reduce ? 0.45 : duration,
      delay: reduce ? Math.min(delay, 0.15) : delay,
      ease: EASE,
    },
  }
}
