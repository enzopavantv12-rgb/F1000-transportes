import { motion } from 'framer-motion'
import { Eyebrow } from './ui/Eyebrow'
import { BackgroundGrid } from './ui/BackgroundGrid'
import { FADE_UP, STAGGER } from '../lib/constants'

const TESTIMONIALS = [
  {
    text: '[Depoimento a ser coletado — gerente de logística de cliente do setor de energia]',
    name: 'Nome Sobrenome',
    role: 'Gerente de Logística',
    company: 'Empresa do Setor de Energia',
  },
  {
    text: '[Depoimento a ser coletado — comprador de transporte de indústria metalúrgica]',
    name: 'Nome Sobrenome',
    role: 'Comprador de Transporte',
    company: 'Indústria Metalúrgica',
  },
  {
    text: '[Depoimento a ser coletado — supervisor de expedição de cliente recorrente]',
    name: 'Nome Sobrenome',
    role: 'Supervisor de Expedição',
    company: 'Cliente Recorrente',
  },
]

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-padding relative"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <BackgroundGrid variant="light" />
      <div className="container-main flex flex-col gap-14 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}><Eyebrow>O QUE DIZEM DE NÓS</Eyebrow></motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3 items-center">
            <span className="accent-line" style={{ margin: '0 auto' }} />
            <h2 className="text-section" style={{ color: 'var(--color-deep-black)' }}>
              Operações reais, parceiros reais.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={FADE_UP}
              className="flex flex-col gap-5 p-8"
              style={{
                backgroundColor: 'var(--color-pure-white)',
                border: '1px solid var(--color-mist)',
                borderRadius: '4px',
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: 'var(--color-deep-blue)',
                  fontWeight: 900,
                }}
                aria-hidden="true"
              >
                "
              </span>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.125rem',
                  lineHeight: 1.5,
                  color: 'var(--color-deep-black)',
                  flex: 1,
                }}
              >
                {t.text}
              </p>

              <div
                style={{
                  height: '1px',
                  backgroundColor: 'var(--color-mist)',
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1">
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: 'var(--color-deep-black)',
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.875rem',
                    color: 'var(--color-steel)',
                  }}
                >
                  {t.role} · {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
