import { motion } from 'framer-motion'
import { FADE_UP, STAGGER } from '../lib/constants'
import { Eyebrow } from './ui/Eyebrow'

const STEPS = [
  {
    n: '01',
    title: 'Solicite a cotação',
    desc: 'Envie origem, destino, peso e tipo de carga pelo WhatsApp ou formulário.',
  },
  {
    n: '02',
    title: 'Receba o orçamento em 15 min',
    desc: 'Nossa equipe analisa caso a caso e devolve com prazo, modalidade e valor.',
  },
  {
    n: '03',
    title: 'Confirme e agende a coleta',
    desc: 'Aprovação por mensagem. Coleta fracionada em até 48h, dedicada conforme programação.',
  },
  {
    n: '04',
    title: 'Acompanhe em tempo real',
    desc: 'Rastreamento ativo do embarque até a entrega, com pós-venda dedicado ao final.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-deep-black)' }}
    >
      <div className="container-main flex flex-col gap-14">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow style={{ color: 'rgba(255,255,255,0.45)' }}>FLUXO DE ATENDIMENTO</Eyebrow>
          </motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3 items-center">
            <span className="accent-line" style={{ margin: '0 auto' }} />
            <h2 className="text-section" style={{ color: 'var(--color-pure-white)' }}>
              Do contato à entrega, em 4 passos.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={FADE_UP}
              className="flex flex-col gap-4"
            >
              <span
                style={{
                  fontFamily: 'Fraunces, serif',
                  fontWeight: 400,
                  fontSize: '4rem',
                  color: 'rgba(255,255,255,0.15)',
                  lineHeight: 1,
                  fontFeatureSettings: '"ss01"',
                }}
                aria-hidden="true"
              >
                {step.n}
              </span>

              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    color: 'var(--color-pure-white)',
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <span
                  style={{
                    display: 'block',
                    width: '40px',
                    height: '1px',
                    backgroundColor: 'var(--color-deep-blue)',
                    margin: '4px 0',
                  }}
                  aria-hidden="true"
                />
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'var(--color-mist)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
