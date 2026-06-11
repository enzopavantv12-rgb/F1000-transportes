import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useQuiz } from '../lib/QuizContext'

const NAV_ITEMS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Setores', href: '#setores' },
  { label: 'Motorista parceiro', href: '#motorista' },
  { label: 'Contato', href: '#cta-final' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const openQuiz = useQuiz()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          height: '80px',
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div
          className="h-full flex items-center justify-between mx-auto"
          style={{
            maxWidth: '1440px',
            paddingLeft: 'clamp(1.25rem, 5vw, 3rem)',
            paddingRight: 'clamp(1.25rem, 5vw, 3rem)',
          }}
        >
          <a href="#" aria-label="F1000 Transportes - Início" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo-f1000-branca.png"
              alt="F1000 Transportes"
              width={160}
              height={38}
              style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
            />
            {/* Fallback invisible — mantém o link acessível se SVG não carregar */}
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                fontSize: '1.25rem',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'none',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ color: 'var(--color-accent-blue)' }}>F</span>1000
              <span
                style={{
                  fontSize: '0.6875rem',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '2px',
                }}
              >
                Transportes
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#FFFFFF')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={openQuiz}
              style={{
                backgroundColor: 'var(--color-deep-blue)',
                color: '#FFFFFF',
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '0.8125rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '12px 22px',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'background-color 200ms ease',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-accent-blue)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-deep-blue)')}
            >
              Cotação de Frete
            </button>
          </div>

          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            style={{ color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: '#000000' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="flex items-center justify-between mx-auto w-full"
              style={{
                height: '80px',
                maxWidth: '1440px',
                paddingLeft: 'clamp(1.25rem, 5vw, 3rem)',
                paddingRight: 'clamp(1.25rem, 5vw, 3rem)',
              }}
            >
              <img src="/logo-f1000-branca.png" alt="F1000 Transportes" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.8)', padding: '8px' }}
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <nav
              className="flex-1 flex flex-col justify-center gap-6 mx-auto w-full"
              style={{
                maxWidth: '1440px',
                paddingLeft: 'clamp(1.25rem, 5vw, 3rem)',
                paddingRight: 'clamp(1.25rem, 5vw, 3rem)',
              }}
              aria-label="Menu mobile"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 900,
                    fontSize: 'clamp(1.75rem, 6vw, 3rem)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    letterSpacing: '-0.025em',
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div
              className="mx-auto w-full pb-10"
              style={{
                maxWidth: '1440px',
                paddingLeft: 'clamp(1.25rem, 5vw, 3rem)',
                paddingRight: 'clamp(1.25rem, 5vw, 3rem)',
              }}
            >
              <button
                onClick={() => { setMenuOpen(false); openQuiz() }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '18px',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Cotação de Frete
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
