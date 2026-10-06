import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { COMPANY, NAV_LINKS } from '../data/site'
import { MEDIA } from '../data/media'
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '../lib/whatsapp'
import { Logo } from './ui/Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? 'border-b border-steel-200/80 bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_-30px_rgba(0,52,104,0.6)]'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6 sm:h-[76px]">
          <Logo variant="dark" src={MEDIA.logo} heightClass="h-9 sm:h-10 lg:h-12" />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 font-display text-sm font-medium text-navy-700/85 transition-colors duration-200 hover:text-navy-600"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-5 !py-3"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center border border-steel-200 bg-white/70 text-navy-700 backdrop-blur transition-colors hover:border-navy-600 lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand/70 via-navy-600/20 to-transparent transition-transform duration-700 ${
            scrolled ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl"
            >
              <div className="flex h-[68px] items-center justify-between border-b border-steel-200 px-5">
          <Logo variant="dark" src={MEDIA.logo} heightClass="h-9 sm:h-10" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="flex h-11 w-11 items-center justify-center border border-steel-200 text-navy-700 transition-colors hover:border-navy-600"
                >
                  <X className="h-5 w-5" strokeWidth={1.8} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col px-5 py-6" aria-label="Navegação mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center justify-between border-b border-steel-100 py-4 font-display text-xl font-semibold text-navy-700 transition-colors hover:text-brand"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-5 w-5 -translate-x-1 text-steel-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-brand group-hover:opacity-100" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="border-t border-steel-200 px-5 py-6"
              >
                <a
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.2} />
                  Solicitar orçamento
                </a>
                <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-steel-400">
                  {COMPANY.phoneDisplay}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
