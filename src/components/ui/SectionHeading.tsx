import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'left' | 'center'
  className?: string
  delay?: number
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = 'dark',
  align = 'left',
  className = '',
  delay = 0,
}: SectionHeadingProps) {
  const isLight = tone === 'light'
  return (
    <div
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <Reveal direction="up" delay={delay}>
          <p className={`eyebrow ${isLight ? 'eyebrow-light' : ''} ${align === 'center' ? 'justify-center' : ''}`}>
            {index && <span className={isLight ? 'text-brand' : 'text-brand'}>{index}</span>}
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal direction="up" delay={delay + 0.1}>
        <h2
          className={`mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.9rem] ${
            isLight ? 'text-white' : 'text-navy-700'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={delay + 0.2}>
          <p className={`mt-5 text-base leading-relaxed sm:text-lg ${isLight ? 'text-white/70' : 'text-steel-500'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
