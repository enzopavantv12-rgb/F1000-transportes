import { motion } from 'framer-motion'
import { BackgroundGrid } from './ui/BackgroundGrid'
import { FADE_UP, STAGGER, WA_COTACAO, EMAIL } from '../lib/constants'
import { Eyebrow } from './ui/Eyebrow'
import { Button } from './ui/Button'

export function FinalCTA() {
  return (
    <section
      id="cta-final"
      className="relative"
      style={{
        backgroundColor: 'var(--color-deep-black)',
        paddingTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <BackgroundGrid variant="dark" />
      <div className="container-main relative z-10">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow style={{ color: 'rgba(255,255,255,0.45)' }}>COTAÇÃO IMEDIATA</Eyebrow>
          </motion.div>

          <motion.div variants={FADE_UP} className="flex flex-col gap-4 items-center">
            <span className="accent-line" style={{ margin: '0 auto' }} />
            <h2
              className="text-section"
              style={{
                color: 'var(--color-pure-white)',
                maxWidth: '640px',
              }}
            >
              Tem uma carga? Tem prazo? Fale com a gente.
            </h2>
          </motion.div>

          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'Inter',
              fontSize: '1rem',
              color: 'var(--color-mist)',
              letterSpacing: '0.02em',
            }}
          >
            Resposta em 15 minutos · Cotação por WhatsApp ou e-mail
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
            <Button
              href={WA_COTACAO}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotar pelo WhatsApp
            </Button>
            <Button
              href={`mailto:${EMAIL}`}
              variant="ghost-white"
            >
              Enviar por e-mail
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
