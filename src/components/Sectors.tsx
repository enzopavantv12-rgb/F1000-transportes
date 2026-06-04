import { motion } from 'framer-motion'
import { Flame, Sun, Mountain, Factory } from 'lucide-react'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER } from '../lib/constants'

const SECTORS = [
  {
    icon: Flame,
    title: 'Óleo & Gás',
    desc: 'Equipamentos críticos, prazos auditados, documentação integral.',
  },
  {
    icon: Sun,
    title: 'Energia',
    desc: 'Painéis solares, materiais para concessionárias, projetos de energia.',
  },
  {
    icon: Mountain,
    title: 'Mineração',
    desc: 'Insumos pesados, alto volume, rotas de difícil acesso.',
  },
  {
    icon: Factory,
    title: 'Metalurgia & Siderurgia',
    desc: 'Aço, bobinas, chapas, tubos — amarração técnica e seguro reforçado.',
  },
]

export function Sectors() {
  return (
    <section
      id="setores"
      className="section-padding relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-deep-black)' }}
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.12, filter: 'saturate(0)' }}
          loading="lazy"
        />
      </div>

      <div className="container-main flex flex-col gap-14 relative">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow style={{ color: 'rgba(255,255,255,0.45)' }}>EXPERIÊNCIA SETORIAL</Eyebrow>
          </motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3 items-center">
            <span className="accent-line" style={{ margin: '0 auto' }} />
            <h2 className="text-section" style={{ color: 'var(--color-pure-white)' }}>
              Setores que confiam na F1000.
            </h2>
          </motion.div>
          <motion.p
            variants={FADE_UP}
            style={{
              fontFamily: 'Inter',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'var(--color-mist)',
              maxWidth: '540px',
            }}
          >
            Atuamos em verticais onde o erro logístico tem custo desproporcional. Cada setor exige um protocolo específico — e nós temos.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SECTORS.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={FADE_UP}
                className="flex flex-col gap-4 p-8 text-center sm:text-left items-center sm:items-start"
                style={{
                  backgroundColor: 'var(--color-graphite)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '4px',
                }}
              >
                <Icon size={28} strokeWidth={1.25} style={{ color: 'var(--color-mist)' }} aria-hidden="true" />
                <h3
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    color: 'var(--color-pure-white)',
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    color: 'var(--color-mist)',
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
