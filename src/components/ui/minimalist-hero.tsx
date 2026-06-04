import { motion } from 'framer-motion'
import { LucideIcon, ArrowDown } from 'lucide-react'

interface MinimalistHeroProps {
  eyebrow?: string
  mainText: string
  onScrollToForm?: () => void
  readMoreLabel?: string
  imageSrc: string
  imageAlt: string
  overlayText: { part1: string; part2: string }
  socialLinks?: { icon: LucideIcon; href: string; label: string }[]
  locationText?: string
  className?: string
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 200ms ease', display: 'flex' }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
    >
      <Icon size={18} strokeWidth={1.5} />
    </a>
  )
}

export function MinimalistHero({
  eyebrow,
  mainText,
  onScrollToForm,
  readMoreLabel = 'Quero me cadastrar',
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className = '',
}: MinimalistHeroProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-between overflow-hidden bg-black ${className}`}
      style={{
        minHeight: 'calc(100vh - 72px)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 8vw, 6rem)',
      }}
    >
      {/* Grão analógico de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Conteúdo principal — 3 colunas com proporções ajustadas */}
      <div
        className="relative w-full mx-auto flex-grow flex items-center"
        style={{ maxWidth: '1280px' }}
      >
        <div
          className="grid w-full gap-8 md:gap-4 items-center grid-cols-1"
          style={{
            gridTemplateColumns: 'minmax(0,1fr)',
          }}
        >
          {/* Grade desktop: 23% · 34% · 43% */}
          <style>{`
            @media (min-width: 768px) {
              .hero-3col { grid-template-columns: 23fr 34fr 43fr !important; }
            }
          `}</style>
          <div className="hero-3col grid w-full gap-10 md:gap-10 items-center grid-cols-1">

            {/* Coluna esquerda — texto descritivo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 md:order-1 text-center md:text-left"
            >
              {eyebrow && (
                <p
                  style={{
                    fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'rgba(5,62,131,0.85)',
                    marginBottom: '28px',
                  }}
                >
                  {eyebrow}
                </p>
              )}

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(1rem, 1.15vw, 1.25rem)',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '340px',
                  margin: '0 auto',
                  marginBottom: '40px',
                }}
                className="md:mx-0"
              >
                {mainText}
              </p>

              {/* CTA — botão branco sólido com texto preto */}
              <button
                onClick={onScrollToForm}
                aria-label="Rolar para o formulário de cadastro"
                className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '2px',
                  padding: '14px 28px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'background-color 250ms ease-out, gap 250ms ease-out, transform 250ms ease-out',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.backgroundColor = '#F5F2EC'
                  el.style.gap = '14px'
                  el.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.backgroundColor = '#ffffff'
                  el.style.gap = '10px'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {readMoreLabel}
                <ArrowDown
                  size={14}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </button>
            </motion.div>

            {/* Coluna central — círculo + imagem */}
            <div className="order-1 md:order-2 relative flex justify-center items-center py-8">
              {/* Círculo azul — proporcional à imagem */}
              <motion.div
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 rounded-full"
                style={{
                  backgroundColor: '#053E83',
                  width: 'clamp(280px, 36vw, 500px)',
                  height: 'clamp(280px, 36vw, 500px)',
                  opacity: 0.9,
                }}
              />

              {/* Imagem do caminhão — maior */}
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 object-cover"
                style={{
                  width: 'clamp(240px, 32vw, 460px)',
                  height: 'clamp(300px, 42vw, 600px)',
                  maxHeight: '500px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'saturate(0.75) contrast(1.1)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                onError={e => {
                  const el = e.currentTarget as HTMLImageElement
                  el.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format&fit=crop'
                }}
              />

              {/* Linha decorativa abaixo */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{ width: '1px', height: '60px', backgroundColor: 'rgba(255,255,255,0.12)' }}
                aria-hidden="true"
              />
            </div>

            {/* Coluna direita — headline display — intocada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="order-3 flex items-center justify-center md:justify-start"
            >
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 9vw, 8.5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                  textTransform: 'uppercase',
                  margin: 0,
                  fontFeatureSettings: '"cv11", "ss03", "cv02"',
                }}
              >
                {overlayText.part1}
                <br />
                {overlayText.part2}
              </h1>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Rodapé do hero — social + localização */}
      {(socialLinks || locationText) && (
        <motion.footer
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="relative z-10 flex w-full items-center justify-between"
          style={{ maxWidth: '1280px', marginTop: '3rem' }}
        >
          {socialLinks && (
            <div className="flex items-center gap-5">
              {socialLinks.map((link, i) => (
                <SocialIcon key={i} href={link.href} icon={link.icon} label={link.label} />
              ))}
            </div>
          )}
          {locationText && (
            <p
              style={{
                fontFamily: 'JetBrains Mono, ui-monospace, monospace',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {locationText}
            </p>
          )}
        </motion.footer>
      )}
    </div>
  )
}
