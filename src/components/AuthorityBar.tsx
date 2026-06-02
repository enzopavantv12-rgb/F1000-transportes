import { motion } from 'framer-motion'
import { FADE_UP, STAGGER } from '../lib/constants'

const KPIS = [
  { number: '13', label: 'Anos de operação' },
  { number: '700 t', label: 'Movimentadas por mês' },
  { number: '97%', label: 'Entregas no prazo' },
  { number: '100+', label: 'Clientes ativos' },
  { number: 'R$ 90 mi', label: 'Em NF carregadas/ano' },
]

export function AuthorityBar() {
  return (
    <section
      id="autoridade"
      style={{ backgroundColor: 'var(--color-deep-black)', padding: '100px 0' }}
    >
      <div className="container-main">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {KPIS.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              variants={FADE_UP}
              className="flex flex-col items-center text-center gap-2 relative"
            >
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12"
                  style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.12)' }}
                  aria-hidden="true"
                />
              )}
              <span
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: 'var(--color-pure-white)',
                  lineHeight: 1,
                  fontFeatureSettings: '"ss01"',
                }}
              >
                {kpi.number}
              </span>
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-mist)',
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
