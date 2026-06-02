import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HeroCarousel } from './HeroCarousel'
import { QuizModal } from './QuizModal'

const HEADLINE = ['MOVA', 'O QUE', 'NÃO PODE', 'PARAR.']

export function Hero() {
  const [quizOpen, setQuizOpen] = useState(false)

  return (
    <>
      <section className="relative w-full overflow-hidden bg-black h-screen min-h-[640px] max-h-[960px]">

        {/* Camada 1 — Carrossel com Ken Burns */}
        <HeroCarousel />

        {/* Camada 2a — Tonal azul-escuro: forte à esquerda, desvanece à direita */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(3,22,52,0.90) 0%, rgba(5,62,131,0.55) 40%, rgba(5,62,131,0.15) 65%, rgba(0,0,0,0.0) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Camada 2b — Escurecimento esquerda (garante legibilidade do texto) */}
        <div
          className="absolute inset-0 z-[2] hidden md:block"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.30) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.0) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Camada 2c — Vinheta vertical suave (topo/base) para acabamento desktop */}
        <div
          className="absolute inset-0 z-[3] hidden md:block"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,0.55) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Camada 2d — Overlay mobile: gradiente vertical, sem expor lateral */}
        <div
          className="absolute inset-0 z-[3] md:hidden"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.40) 45%, rgba(0,0,0,0.65) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Camada 2e — Grão analógico sutil */}
        <div
          className="absolute inset-0 z-[4] pointer-events-none"
          style={{
            opacity: 0.04,
            mixBlendMode: 'overlay',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        {/* Camada 3 — Conteúdo */}
        <div className="relative z-10 h-full flex items-center">
          <div
            className="mx-auto w-full"
            style={{ maxWidth: '1440px', paddingLeft: 'clamp(1.5rem,8vw,6rem)', paddingRight: 'clamp(1.5rem,8vw,6rem)' }}
          >
            <div style={{ maxWidth: '680px' }}>

              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(11px,1.5vw,13px)',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: 'clamp(24px,4vw,32px)',
                }}
              >
                F1000 Transportes
              </motion.p>

              {/* H1 */}
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(2.75rem,9vw,7.5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.035em',
                  color: '#fff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {HEADLINE.map((word, i) => (
                  <motion.span
                    key={word}
                    className="block"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(0.9375rem,2vw,1.0625rem)',
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '500px',
                  marginTop: 'clamp(28px,4vw,40px)',
                  marginBottom: 'clamp(32px,5vw,48px)',
                }}
              >
                Transporte industrial para cargas críticas. Cobertura nacional,
                cotação em 15 minutos, operação que não admite improviso.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button
                  onClick={() => setQuizOpen(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    color: '#000',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(12px,1.5vw,14px)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,36px)',
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 300ms ease, transform 300ms ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.backgroundColor = '#F5F2EC'; el.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.backgroundColor = '#fff'; el.style.transform = 'translateY(0)' }}
                >
                  Cotar Frete
                </button>

                <Link
                  to="/motorista-parceiro"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(12px,1.5vw,14px)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: 'clamp(13px,2vw,17px) clamp(27px,4vw,35px)',
                    borderRadius: '2px',
                    border: '1px solid rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    transition: 'background-color 300ms ease, border-color 300ms ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'rgba(255,255,255,0.08)'; el.style.borderColor = '#fff' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'transparent'; el.style.borderColor = 'rgba(255,255,255,0.7)' }}
                >
                  Motorista Parceiro
                </Link>
              </motion.div>

              {/* Microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15, duration: 0.6 }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(11px,1.2vw,13px)',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.02em',
                  marginTop: 'clamp(20px,3vw,28px)',
                }}
              >
                Resposta em 15 minutos · Atendimento Seg–Sex, 08h às 18h
              </motion.p>

            </div>
          </div>
        </div>

        {/* Camada 4 — Assinatura inferior esquerda (desktop) */}
        <div
          className="absolute z-10 hidden md:block"
          style={{ bottom: '40px', left: 'clamp(1.5rem,8vw,6rem)' }}
          aria-hidden="true"
        >
          <div style={{ width: '1px', height: '32px', backgroundColor: 'rgba(255,255,255,0.3)', marginBottom: '12px' }} />
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
            Desde 2013 · Betim/MG · Cobertura Nacional
          </p>
        </div>

        {/* Camada 5 — Indicador de carrossel (5 traços, desktop) */}
        <div
          className="absolute z-10 hidden md:flex gap-2 items-center"
          style={{ bottom: '44px', right: 'clamp(1.5rem,8vw,6rem)' }}
          aria-hidden="true"
        >
          {HERO_IMAGES_COUNT.map(i => (
            <div
              key={i}
              style={{ height: '1px', width: '32px', backgroundColor: 'rgba(255,255,255,0.25)' }}
            />
          ))}
        </div>

      </section>

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  )
}

const HERO_IMAGES_COUNT = [0, 1, 2, 3, 4]
