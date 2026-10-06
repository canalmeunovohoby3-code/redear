import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'clip'

type RevealProps = {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  amount?: number
  once?: boolean
}

const EASE = [0.22, 1, 0.36, 1] as const

function buildVariants(direction: Direction, distance: number): Variants {
  switch (direction) {
    case 'left':
      return { hidden: { opacity: 0, x: -distance }, show: { opacity: 1, x: 0 } }
    case 'right':
      return { hidden: { opacity: 0, x: distance }, show: { opacity: 1, x: 0 } }
    case 'down':
      return { hidden: { opacity: 0, y: -distance }, show: { opacity: 1, y: 0 } }
    case 'scale':
      return { hidden: { opacity: 0, scale: 0.92, y: distance * 0.35 }, show: { opacity: 1, scale: 1, y: 0 } }
    case 'clip':
      return {
        hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)', y: distance * 0.5 },
        show: { opacity: 1, clipPath: 'inset(0 0 0% 0)', y: 0 },
      }
    case 'up':
    default:
      return { hidden: { opacity: 0, y: distance }, show: { opacity: 1, y: 0 } }
  }
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.85,
  className,
  amount = 0.2,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion()
  const variants = buildVariants(direction, reduce ? 0 : 62)

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration: reduce ? 0.45 : duration, delay: reduce ? Math.min(delay, 0.15) : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  stagger = 0.17,
  delay = 0,
  amount = 0.15,
  once = true,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  amount?: number
  once?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0.08 : stagger, delayChildren: reduce ? 0 : delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
  distance = 62,
  duration = 0.85,
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  distance?: number
  duration?: number
}) {
  const reduce = useReducedMotion()
  const variants = buildVariants(direction, reduce ? 0 : distance)
  return (
    <motion.div className={className} variants={variants} transition={{ duration: reduce ? 0.45 : duration, ease: EASE }}>
      {children}
    </motion.div>
  )
}

export const motionEase = EASE
