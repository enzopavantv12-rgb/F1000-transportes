import { motion } from 'framer-motion'
import { Boxes, Truck, Wrench, Zap } from 'lucide-react'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER, WA_COTACAO, WA_URGENTE } from '../lib/constants'

const SERVICES = [
  {
    code: '01 · LTL',
    icon: Boxes,
    title: 'Frete Fracionado Pesado',
    description: 'Consolidação inteligente para cargas a partir de 100 kg, com prazo, rastreamento e tratamento individual em cada nota fiscal.',
    attributes: ['Peso mínimo 100 kg', 'Cotação em 15 min', 'Cobertura nacional'],
    cta: 'Frete Fracionado',
    href: WA_COTACAO,
  },
  {
    code: '02 · FTL',
    icon: Truck,
    title: 'Frete Dedicado / Carga Fechada',
    description: 'Veículo exclusivo para sua operação. Saída programada, prazo de trânsito controlado e SLA acordado caso a caso.',
    attributes: ['Veículo exclusivo', '600 km/dia médio', 'Coleta porta-a-porta'],
    cta: 'Frete Dedicado',
    href: WA_COTACAO,
  },
  {
    code: '03 · PROJETO',
    icon: Wrench,
    title: 'Aço, Bobinas e Equipamentos',
    description: 'Operação especializada para cargas industriais com amarração técnica, plano de rigging e descarregamento em nível de calçada quando exigido.',
    attributes: ['Aço e bobinas', 'Içamento de baixa complexidade', 'Plano de rigging'],
    cta: 'Falar sobre carga especial',
    href: WA_COTACAO,
  },
  {
    code: '04 · EXPRESS',
    icon: Zap,
    title: 'Frete Urgente / Coleta Imediata',
    description: 'Para quando a parada de linha custa mais que o frete. Acionamento prioritário, coleta no mesmo dia e rastreamento direto com o operacional.',
    attributes: ['Coleta no mesmo dia', 'Prioridade absoluta', 'Linha direta operacional'],
    cta: 'Acionamento urgente',
    href: WA_URGENTE,
  },
]

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const Icon = service.icon

  return (
    <motion.div
      variants={FADE_UP}
      custom={index}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5 p-8 relative"
      style={{
        backgroundColor: 'var(--color-graphite)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '4px',
        transition: 'border-color 300ms ease',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(5,62,131,0.6)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)')}
    >
      <div className="flex flex-col gap-4">
        <Icon size={32} strokeWidth={1.25} style={{ color: 'var(--color-mist)' }} aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <span
            style={{
              fontFamily: 'Inter',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            {service.code}
          </span>
          <h3
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '1.375rem',
              letterSpacing: '-0.01em',
              color: 'var(--color-pure-white)',
              lineHeight: 1.3,
            }}
          >
            {service.title}
          </h3>
        </div>
        <p style={{ fontFamily: 'Inter', fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-steel)' }}>
          {service.description}
        </p>
      </div>

      <div className="flex flex-col mt-auto">
        {service.attributes.map((attr, i) => (
          <div key={attr}>
            {i === 0 && <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: '12px' }} />}
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.45)',
                paddingBottom: '12px',
              }}
            >
              {attr}
            </p>
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: '12px' }} />
          </div>
        ))}

        <a
          href={service.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'Inter',
            fontSize: '0.9375rem',
            fontWeight: 500,
            color: 'var(--color-accent-blue)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '4px',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#FFFFFF')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent-blue)')}
        >
          {service.cta} →
        </a>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section
      id="servicos"
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
            <Eyebrow style={{ color: 'rgba(255,255,255,0.45)' }}>MODALIDADES</Eyebrow>
          </motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3 items-center">
            <span className="accent-line" style={{ margin: '0 auto' }} />
            <h2 className="text-section" style={{ color: 'var(--color-pure-white)' }}>
              Como movemos sua carga.
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.code} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
