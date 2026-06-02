import { motion } from 'framer-motion'
import { FADE_UP, STAGGER } from '../lib/constants'
import { Eyebrow } from './ui/Eyebrow'

export function Institutional() {
  return (
    <section
      id="sobre"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="container-main grid md:grid-cols-12 gap-12 md:gap-16 items-center">

        {/* Texto */}
        <motion.div
          className="md:col-span-7 flex flex-col gap-6"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow>INSTITUCIONAL</Eyebrow>
          </motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3">
            <span className="accent-line" />
            <h2 className="text-section" style={{ color: 'var(--color-deep-black)' }}>
              A transportadora que trata cada carga como única.
            </h2>
          </motion.div>

          <motion.p
            variants={FADE_UP}
            style={{ fontFamily: 'Inter', fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--color-steel)' }}
          >
            Fundada em 2013 com o propósito de oferecer logística confiável e sob medida para o mercado brasileiro, a F1000 cresceu de forma estruturada — aliando gestão profissional, compromisso operacional e excelência em atendimento.
          </motion.p>

          <motion.p
            variants={FADE_UP}
            style={{ fontFamily: 'Inter', fontSize: '1.0625rem', lineHeight: '1.65', color: 'var(--color-steel)' }}
          >
            Da nossa sede em Betim/MG, atendemos toda a malha nacional com foco em indústrias que não podem se permitir falha: óleo &amp; gás, energia, mineração e metalurgia. Cada frete é cotado, programado e acompanhado individualmente.
          </motion.p>

          <motion.div variants={FADE_UP} className="flex flex-col gap-2 pt-2">
            <span className="accent-line" />
            <span
              style={{
                fontFamily: 'Inter',
                fontSize: '0.8125rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-steel)',
              }}
            >
              Sede operacional · Betim, MG
            </span>
          </motion.div>
        </motion.div>

        {/* Foto */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: '4/5' }}
          >
            <img
              src="https://images.unsplash.com/photo-1565793979286-e3bb7e78e00b?w=700&q=80&auto=format&fit=crop"
              alt="Equipe operacional da F1000 Transportes no galpão de Betim"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(0.75) contrast(1.05)' }}
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
