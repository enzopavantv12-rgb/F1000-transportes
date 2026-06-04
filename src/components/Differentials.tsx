import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

const BORDER_COLOR = 'rgba(5,62,131,0.12)'

// ── Count-up animado ──────────────────────────────────────────────────────────

function CountUp({ to, duration = 1.2 }: { to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v: number) => Math.round(v))
  const isInView = useInView(nodeRef, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    const controls = animate(count, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })
    return controls.stop
  }, [isInView, to, duration, count])

  return <motion.span ref={nodeRef}>{rounded}</motion.span>
}

// ── Variantes de entrada ──────────────────────────────────────────────────────

const ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

// ── Tag numérica de card ──────────────────────────────────────────────────────

function CardNum({ n }: { n: string }) {
  return (
    <span
      className="block transition-all duration-300 group-hover:opacity-100"
      style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--color-deep-blue)',
        opacity: 0.4,
      }}
    >
      {n}
    </span>
  )
}

// ── Card compacto (B, C, D, F) ────────────────────────────────────────────────

function CardCompact({
  n, title, desc,
  borderRight,
  custom,
}: {
  n: string; title: string; desc: string
  borderRight?: boolean; custom: number
}) {
  return (
    <motion.div
      custom={custom}
      variants={ITEM}
      className="group flex flex-col justify-between p-8 md:p-10 text-center md:text-left items-center md:items-start"
      style={{
        borderRight: borderRight ? `1px solid ${BORDER_COLOR}` : undefined,
        borderBottom: `1px solid ${BORDER_COLOR}`,
      }}
    >
      <div className="flex flex-col gap-6">
        <CardNum n={n} />
        <h3
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            color: 'var(--color-deep-black)',
            fontFeatureSettings: '"ss01"',
          }}
        >
          {title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9375rem',
          lineHeight: 1.6,
          color: 'var(--color-steel)',
          marginTop: '24px',
        }}
      >
        {desc}
      </p>
      {/* Hover underline */}
      <div
        className="mt-6 h-px w-0 group-hover:w-10 transition-all duration-400"
        style={{ backgroundColor: 'var(--color-deep-blue)' }}
      />
    </motion.div>
  )
}

// ── Seção principal ───────────────────────────────────────────────────────────

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative section-padding overflow-hidden"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      {/* Ruído analógico sutil */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
        }}
      />

      {/* Marca d'água "EST. 2013" */}
      <div
        className="absolute bottom-0 right-0 leading-none pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: 'clamp(120px, 18vw, 260px)',
          fontWeight: 200,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(5,62,131,0.06)',
          lineHeight: 0.85,
          userSelect: 'none',
          fontFeatureSettings: '"ss01"',
        }}
      >
        EST.<br />2013
      </div>

      <div className="container-main relative z-10">

        {/* ── Eyebrow + Headline ── */}
        <motion.div
          className="flex flex-col gap-4 mb-16 text-center md:text-left items-center md:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Marcador de seção */}
          <motion.span
            variants={ITEM}
            custom={0}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(5,62,131,0.45)',
            }}
          >
            § 02
          </motion.span>

          {/* Eyebrow + traço */}
          <motion.div variants={ITEM} custom={1} className="flex flex-col gap-2">
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--color-deep-blue)',
              }}
            >
              O QUE NOS DIFERENCIA
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-deep-blue)' }} />
          </motion.div>

          {/* Headline — alinhada à esquerda, itálico em "individual" */}
          <motion.h2
            variants={ITEM}
            custom={2}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
              color: 'var(--color-deep-black)',
              fontFeatureSettings: '"ss01"',
              maxWidth: '700px',
            }}
          >
            Operação madura,<br />
            tratamento{' '}
            <em style={{ fontStyle: 'italic' }}>individual</em>,<br />
            escala nacional.
          </motion.h2>
        </motion.div>

        {/* ── Bento grid 12 colunas ── */}
        <motion.div
          className="grid grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >

          {/* ── CARD HERO — 13 ANOS (6 cols) ── */}
          <motion.div
            custom={0}
            variants={ITEM}
            className="group col-span-12 lg:col-span-6 p-8 md:p-10 flex flex-col justify-between text-center md:text-left items-center md:items-start"
            style={{
              borderBottom: `1px solid ${BORDER_COLOR}`,
              borderRight: undefined,
            }}
          >
            <div className="flex flex-col">
              <CardNum n="01" />

              {/* Numeral gigante */}
              <div
                className="my-4 leading-none"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(6rem, 13vw, 10rem)',
                  color: 'var(--color-deep-black)',
                  fontFeatureSettings: '"cv11", "ss03", "cv02"',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                <CountUp to={13} />
              </div>

              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-blue)',
                  opacity: 0.6,
                  marginBottom: '20px',
                }}
              >
                ANOS
              </span>

              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                  letterSpacing: '-0.01em',
                  color: 'var(--color-deep-black)',
                  marginBottom: '12px',
                  fontFeatureSettings: '"ss01"',
                }}
              >
                13 anos de mercado
              </h3>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'var(--color-steel)',
                  maxWidth: '460px',
                }}
              >
                Operação consolidada desde 2013, com histórico técnico e fiscal limpo.
              </p>
            </div>

            <div
              className="mt-8 h-px w-0 group-hover:w-12 transition-all duration-500"
              style={{ backgroundColor: 'var(--color-deep-blue)' }}
            />
          </motion.div>

          {/* ── CARD B — Cobertura nacional (3 cols) ── */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3"
            style={{ borderLeft: `1px solid ${BORDER_COLOR}` }}
          >
            <CardCompact
              n="02"
              title="Cobertura nacional"
              desc="Sul, Sudeste, Centro-Oeste, Nordeste e pontos estratégicos do Norte."
              borderRight
              custom={1}
            />
          </div>

          {/* ── CARD C — Especialização industrial (3 cols) ── */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3"
            style={{ borderLeft: `1px solid ${BORDER_COLOR}` }}
          >
            <CardCompact
              n="03"
              title="Especialização industrial"
              desc="Foco real em aço, bobinas, equipamentos, energia, mineração e óleo & gás."
              custom={2}
            />
          </div>

          {/* ── CARD D — Rastreamento (3 cols) ── */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3 md:order-4 lg:order-4"
          >
            <CardCompact
              n="04"
              title="Rastreamento em tempo real"
              desc="Visibilidade completa do embarque até a entrega final."
              borderRight
              custom={3}
            />
          </div>

          {/* ── CARD DESTAQUE — Galpão 700 m² (6 cols) ── */}
          <motion.div
            custom={4}
            variants={ITEM}
            className="group col-span-12 md:col-span-12 lg:col-span-6 p-8 md:p-10 flex flex-col justify-between text-center md:text-left items-center md:items-start
                       border-b md:border-b-0 md:order-6 lg:order-5"
            style={{
              borderBottom: `1px solid ${BORDER_COLOR}`,
              borderLeft: `1px solid ${BORDER_COLOR}`,
              borderRight: `1px solid ${BORDER_COLOR}`,
            }}
          >
            <div className="flex flex-col">
              <CardNum n="05" />

              <div
                className="mt-4 mb-2 leading-none flex items-baseline gap-3"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(4.5rem, 8vw, 6.5rem)',
                  color: 'var(--color-deep-black)',
                  fontFeatureSettings: '"cv11", "ss03", "cv02"',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                <CountUp to={700} duration={1.4} />
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  m²
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--color-deep-blue)',
                  opacity: 0.6,
                  marginBottom: '20px',
                }}
              >
                GALPÃO PRÓPRIO
              </span>

              <h3
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                  letterSpacing: '-0.01em',
                  color: 'var(--color-deep-black)',
                  marginBottom: '12px',
                  fontFeatureSettings: '"ss01"',
                }}
              >
                Galpão próprio em Betim/MG
              </h3>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                  color: 'var(--color-steel)',
                  maxWidth: '460px',
                }}
              >
                700 m² operacionais com empilhadeira, docas e área de movimentação.
              </p>
            </div>

            <div
              className="mt-8 h-px w-0 group-hover:w-12 transition-all duration-500"
              style={{ backgroundColor: 'var(--color-deep-blue)' }}
            />
          </motion.div>

          {/* ── CARD F — Documentação fiscal (3 cols) ── */}
          <div
            className="col-span-12 md:col-span-6 lg:col-span-3 md:order-5 lg:order-6"
          >
            <CardCompact
              n="06"
              title="Documentação fiscal completa"
              desc="CT-e, MDF-e, RNTRC ativo, seguros RCTR-C e RCF-DC inclusos."
              custom={5}
            />
          </div>

        </motion.div>
      </div>
    </section>
  )
}
