import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionWithMockup from './ui/SectionWithMockup'
import { InstitutionalDashboard } from './InstitutionalDashboard'
import { WA_COTACAO } from '../lib/constants'

const SECONDARY_IMG =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format&fit=crop'

const title = (
  <>
    A transportadora que trata<br />
    cada carga como única.
  </>
)

const description = (
  <div className="flex flex-col gap-4">
    <p>
      Fundada em 2013 com o propósito de oferecer logística confiável e sob medida para o mercado
      brasileiro, a F1000 cresceu de forma estruturada — aliando gestão profissional, compromisso
      operacional e excelência em atendimento.
    </p>
    <p>
      Da nossa sede em Betim/MG, atendemos toda a malha nacional com foco em indústrias que não podem
      se permitir falha: óleo &amp; gás, energia, mineração e metalurgia. Cada frete é cotado,
      programado e acompanhado individualmente.
    </p>

    <div className="flex flex-col gap-3 mt-2">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '60px', height: '1px', backgroundColor: '#053E83', flexShrink: 0 }} />
        <span style={{ fontFamily: 'Inter', fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B7280' }}>
          Sede operacional · Betim, MG
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <motion.a
          href={WA_COTACAO}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#053E83',
            color: '#fff',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '14px 28px',
            borderRadius: '2px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Solicitar cotação
        </motion.a>
        <Link
          to="/motorista-parceiro"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            color: '#000',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '13px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '13px 27px',
            borderRadius: '2px',
            border: '1px solid #D4D7DD',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Motorista parceiro
        </Link>
      </div>
    </div>
  </div>
)

export function Institutional() {
  return (
    <section id="sobre">
      <SectionWithMockup
        title={title}
        description={description}
        primaryContent={<InstitutionalDashboard />}
        secondaryImageSrc={SECONDARY_IMG}
        light
      />
    </section>
  )
}
