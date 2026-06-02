import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FADE_UP, STAGGER } from '../lib/constants'

interface KPI {
  value: number
  prefix: string
  suffix: string
  label: string
  duration?: number
}

const KPIS: KPI[] = [
  { value: 13,  prefix: '',    suffix: '',    label: 'Anos de operação',        duration: 1200 },
  { value: 700, prefix: '',    suffix: ' t',  label: 'Movimentadas por mês',    duration: 1800 },
  { value: 97,  prefix: '',    suffix: '%',   label: 'Entregas no prazo',       duration: 1500 },
  { value: 100, prefix: '',    suffix: '+',   label: 'Clientes ativos',         duration: 1400 },
  { value: 90,  prefix: 'R$ ', suffix: ' mi', label: 'Em NF carregadas/ano',    duration: 1300 },
]

function CountUp({ value, prefix, suffix, duration = 1500 }: KPI) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const startTime = useRef<number | null>(null)
  const rafId = useRef<number>()

  useEffect(() => {
    if (!inView) return
    startTime.current = null

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) rafId.current = requestAnimationFrame(step)
    }

    rafId.current = requestAnimationFrame(step)
    return () => { if (rafId.current) cancelAnimationFrame(rafId.current) }
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function AuthorityBar() {
  return (
    <section
      id="autoridade"
      style={{ backgroundColor: 'var(--color-deep-black)', padding: '64px 0' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 3rem)' }}>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              variants={FADE_UP}
              className="flex flex-col items-center text-center gap-1.5 relative"
            >
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-8"
                  style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.12)' }}
                  aria-hidden="true"
                />
              )}
              <span
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: 'var(--color-pure-white)',
                  lineHeight: 1,
                  fontFeatureSettings: '"ss01"',
                  whiteSpace: 'nowrap',
                }}
              >
                <CountUp {...kpi} />
              </span>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-mist)',
                  whiteSpace: 'nowrap',
                }}
              >
                {kpi.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
