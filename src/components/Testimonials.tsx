import { motion } from 'framer-motion'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER } from '../lib/constants'

const TESTIMONIALS = [
  {
    text: 'Excelente serviço, equipe muito competente e educada. Minha experiência com a empresa foi extremamente satisfatória, recebi um atendimento eficaz, com segurança e agilidade garantida. Recomendo a todos a F1000 Transportes.',
    name: 'Marcos Antonio',
    role: '11 avaliações · há 10 meses',
    company: '',
  },
  {
    text: 'Facilidade no atendimento e compromisso com a carga, e tem uma equipe sempre pronta pra fazer do melhor pra sua entrega.',
    name: 'Dhyemeson Marinho',
    role: '1 avaliação · há 10 meses',
    company: '',
  },
  {
    text: 'Excelente serviço! A equipe da F1000 Transportes é extremamente profissional, com um atendimento ágil e personalizado. As soluções logísticas são eficientes e garantem total segurança no transporte de cargas. Recomendo a todos que buscam qualidade e confiabilidade.',
    name: 'Alanda Lopes',
    role: '5 avaliações · há 1 ano',
    company: '',
  },
]

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="section-padding relative"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
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
              className="flex flex-col gap-5 p-8 text-center md:text-left items-center md:items-start"
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
