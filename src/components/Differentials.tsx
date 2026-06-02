import { motion } from 'framer-motion'
import { CalendarDays, Globe, Warehouse, HardHat, ScanLine, FileCheck } from 'lucide-react'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER } from '../lib/constants'

const ITEMS = [
  {
    icon: CalendarDays,
    title: '13 anos de mercado',
    desc: 'Operação consolidada desde 2013, com histórico técnico e fiscal limpo.',
  },
  {
    icon: Globe,
    title: 'Cobertura nacional',
    desc: 'Sul, Sudeste, Centro-Oeste, Nordeste e pontos estratégicos do Norte.',
  },
  {
    icon: Warehouse,
    title: 'Galpão próprio em Betim/MG',
    desc: '700 m² operacionais com empilhadeira, docas e área de movimentação.',
  },
  {
    icon: HardHat,
    title: 'Especialização industrial',
    desc: 'Foco real em aço, bobinas, equipamentos, energia, mineração e óleo & gás.',
  },
  {
    icon: ScanLine,
    title: 'Rastreamento em tempo real',
    desc: 'Visibilidade completa do embarque até a entrega final.',
  },
  {
    icon: FileCheck,
    title: 'Documentação fiscal completa',
    desc: 'CT-e, MDF-e, RNTRC ativo, seguros RCTR-C e RCF-DC inclusos.',
  },
]

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-paper)' }}
    >
      <div className="container-main flex flex-col gap-14">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}><Eyebrow>O QUE NOS DIFERENCIA</Eyebrow></motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3 items-center">
            <span className="accent-line" style={{ margin: '0 auto' }} />
            <h2 className="text-section" style={{ color: 'var(--color-deep-black)', maxWidth: '600px' }}>
              Operação madura, tratamento individual, escala nacional.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            const isBottom = i >= 3
            const isRight = (i + 1) % 3 === 0

            return (
              <motion.div
                key={item.title}
                variants={FADE_UP}
                className="flex flex-col gap-3 p-8"
                style={{
                  borderBottom: !isBottom ? '1px solid var(--color-mist)' : undefined,
                  borderRight: !isRight ? '1px solid var(--color-mist)' : undefined,
                }}
              >
                <Icon size={28} strokeWidth={1.25} style={{ color: 'var(--color-deep-blue)' }} aria-hidden="true" />
                <h3
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: 'var(--color-deep-black)',
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'var(--color-steel)',
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
