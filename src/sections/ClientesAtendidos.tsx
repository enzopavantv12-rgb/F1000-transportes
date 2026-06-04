import { motion } from 'framer-motion'
import { LogoCloud } from '../components/ui/logo-cloud'

// Nomes originais com espaços mantidos — encodados via %20 no src
// "Barbosa melo" tem dois espaços entre "melo" e "logo" — %20%20
const CLIENTES = [
  { src: '/logos-clientes/Barbosa%20melo%20%20logo%20sem%20fundo.png', alt: 'Barbosa Melo' },
  { src: '/logos-clientes/cogera%20energia%20logo%20sem%20fundo.png',  alt: 'Cogera Energia' },
  { src: '/logos-clientes/Energisa%20logo%20sem%20fundo.png',          alt: 'Energisa' },
  { src: '/logos-clientes/Generac%20logo%20sem%20fundo.png',           alt: 'Generac' },
  { src: '/logos-clientes/gnllink%20logo%20sem%20fundo.png',           alt: 'GNL Link' },
  { src: '/logos-clientes/Himoinsa%20logo%20sem%20fundo.png',          alt: 'Himoinsa' },
  { src: '/logos-clientes/pipe%20logo%20sem%20fundo.png',              alt: 'Pipe' },
  { src: '/logos-clientes/Sempel%20logo%20sem%20fundo.png',            alt: 'Sempel' },
  { src: '/logos-clientes/Vgrow%20logo%20sem%20fundo.png',             alt: 'Vgrow' },
]

export function ClientesAtendidos() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-paper)', padding: 'clamp(5rem,10vw,8rem) 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}>

        {/* Cabeçalho editorial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto text-center"
          style={{ maxWidth: '720px', marginBottom: 'clamp(3rem,6vw,5rem)' }}
        >
          {/* Eyebrow mono */}
          <p
            style={{
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(5,62,131,0.6)',
              marginBottom: '24px',
            }}
          >
            § 03 · Quem Confia
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--color-deep-black)',
              margin: 0,
              fontFeatureSettings: '"cv11", "ss03", "cv02"',
            }}
          >
            Operações críticas,{' '}
            <br className="hidden md:block" />
            <em style={{ fontStyle: 'italic', fontWeight: 400 }}>
              confiadas há mais de uma década.
            </em>
          </h2>

          {/* Subtítulo */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(0.9375rem,2vw,1.0625rem)',
              lineHeight: 1.65,
              color: 'var(--color-steel)',
              marginTop: '20px',
              maxWidth: '540px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Indústrias de energia, óleo &amp; gás, geração e infraestrutura
            escolhem a F1000 para o que não admite improviso.
          </p>
        </motion.div>

        {/* Linha divisória superior */}
        <div
          className="mx-auto mb-12"
          style={{
            height: '1px',
            maxWidth: '400px',
            background: 'var(--color-deep-blue)',
            opacity: 0.15,
            maskImage: 'linear-gradient(to right, transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
          }}
        />

        {/* Carrossel de logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <LogoCloud logos={CLIENTES} />
        </motion.div>

        {/* Linha divisória inferior */}
        <div
          className="mx-auto mt-12"
          style={{
            height: '1px',
            maxWidth: '400px',
            background: 'var(--color-deep-blue)',
            opacity: 0.15,
            maskImage: 'linear-gradient(to right, transparent, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
          }}
        />

        {/* Rodapé técnico */}
        <p
          className="mt-10 text-center"
          style={{
            fontFamily: 'JetBrains Mono, ui-monospace, monospace',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(107,114,128,0.7)',
          }}
        >
          + de 13 anos · operação betim/mg · cobertura nacional
        </p>

      </div>
    </section>
  )
}
