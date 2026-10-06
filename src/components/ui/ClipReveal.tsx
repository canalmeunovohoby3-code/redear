import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type ClipRevealProps = {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  className?: string
  delay?: number
  duration?: number
  amount?: number
  scaleFrom?: number
}

const EASE = [0.22, 1, 0.36, 1] as const

const CLIP = {
  left: 'inset(0 0 0 100%)',
  right: 'inset(0 100% 0 0)',
  up: 'inset(0 0 100% 0)',
  down: 'inset(100% 0 0 0)',
} as const

export function ClipReveal({
  children,
  direction = 'left',
  className = '',
  delay = 0,
  duration = 1.1,
  amount = 0.25,
  scaleFrom = 0.96,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })
  const reduce = useReducedMotion()

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, clipPath: CLIP[direction], scale: scaleFrom }
  const show = reduce ? { opacity: 1 } : { opacity: 1, clipPath: 'inset(0 0 0 0)', scale: 1 }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={hidden}
        animate={inView ? show : hidden}
        transition={{ delay: reduce ? 0 : delay, duration: reduce ? 0.45 : duration, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}
