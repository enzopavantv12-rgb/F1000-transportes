import { motion } from 'framer-motion'
import { Truck, Zap, Globe } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { BackgroundGrid } from './ui/BackgroundGrid'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER, WA_COTACAO, WA_URGENTE } from '../lib/constants'

const ACCENT = '#053E83'
const ACCENT2 = '#1E5BB8'

// ── Visuais decorativos ─────────────────────────────────────────────────────

function StatVisual() {
  return (
    <div className="relative flex h-24 w-56 items-center mx-auto">
      {/* Ellipse SVG — mesmo conceito do features-8 "100% customizable" */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 254 104" fill="none">
        <path
          d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
          fill="rgba(255,255,255,0.06)"
        />
      </svg>
      <span
        className="mx-auto block w-fit text-5xl font-bold"
        style={{ fontFamily: 'Inter, sans-serif', fontFeatureSettings: '"ss01"', color: '#fff' }}
      >
        100kg
      </span>
    </div>
  )
}

function RingVisual({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="relative mx-auto flex aspect-square size-28 items-center justify-center rounded-full"
      style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)' }} />
      <Icon size={36} strokeWidth={1.25} style={{ color: ACCENT2 }} />
    </div>
  )
}

function CargoTypesVisual() {
  const types = [
    { label: 'Aço / Bobinas', w: '90%' },
    { label: 'Equipamentos', w: '75%' },
    { label: 'Energia Solar', w: '68%' },
    { label: 'Óleo & Gás',   w: '60%' },
  ]
  return (
    <div className="w-full space-y-3 px-2">
      {types.map(({ label, w }, i) => (
        <div key={label} className="flex items-center gap-3">
          <motion.div
            style={{ height: '4px', borderRadius: '2px', backgroundColor: ACCENT, flexShrink: 0 }}
            initial={{ width: 0 }}
            whileInView={{ width: w }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{label}</span>
        </div>
      ))}
    </div>
  )
}

function UrgencyTimeline() {
  const steps = [
    { time: '08:00', label: 'Solicitação recebida' },
    { time: '08:15', label: 'Cotação enviada' },
    { time: '08:30', label: 'Coleta confirmada' },
    { time: 'Hoje',  label: 'Veículo em rota' },
  ]
  return (
    <div className="relative ml-6 mt-4 flex flex-col gap-5">
      <div className="absolute left-[7px] top-0 bottom-0 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }} />
      {steps.map(({ time, label }, i) => (
        <motion.div
          key={label}
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
        >
          <div
            className="relative z-10 size-[15px] rounded-full flex-shrink-0"
            style={{ backgroundColor: i === 3 ? ACCENT : 'rgba(255,255,255,0.12)', border: `1px solid ${i === 3 ? ACCENT2 : 'rgba(255,255,255,0.2)'}` }}
          />
          <span style={{ fontSize: '13px', fontWeight: 500, color: i === 3 ? '#fff' : 'rgba(255,255,255,0.5)' }}>{label}</span>
          <span className="ml-auto" style={{ fontSize: '11px', color: i === 3 ? ACCENT2 : 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{time}</span>
        </motion.div>
      ))}
    </div>
  )
}

function CoverageVisual() {
  const routes = [
    { dest: 'São Paulo / SP', pct: 88 },
    { dest: 'Recife / PE',    pct: 72 },
    { dest: 'Porto Alegre / RS', pct: 65 },
    { dest: 'Goiânia / GO',  pct: 58 },
  ]
  return (
    <div className="flex flex-col gap-3 py-2">
      {routes.map(({ dest, pct }, i) => (
        <div key={dest} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>BH → {dest}</span>
            <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>{pct}%</span>
          </div>
          <div style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', backgroundColor: ACCENT2, borderRadius: '2px' }}
              initial={{ width: 0 }}
              whileInView={{ width: `${pct}%` }}
              transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function Eyebrow2({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'Inter', fontSize: '11px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT2 }}>
      {children}
    </p>
  )
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '1.125rem', color: '#fff', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
      {children}
    </h3>
  )
}

function CardDesc({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>
      {children}
    </p>
  )
}

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontFamily: 'Inter', fontSize: '0.875rem', fontWeight: 500, color: ACCENT2, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = ACCENT2)}
    >
      {children} →
    </a>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

export function Services() {
  return (
    <section id="servicos" className="section-padding relative" style={{ backgroundColor: 'var(--color-deep-black)' }}>
      <BackgroundGrid variant="dark" />
      <div className="container-main flex flex-col gap-14 relative z-10">

        {/* Header */}
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
            <h2 className="text-section" style={{ color: '#fff' }}>Como movemos sua carga.</h2>
          </motion.div>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="relative z-10 grid grid-cols-6 gap-4"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >

          {/* ── Card 1 — Fracionado LTL (2/6) ── */}
          <motion.div variants={FADE_UP} className="col-span-full lg:col-span-2">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center gap-6 pt-8 h-full">
                <StatVisual />
                <div className="space-y-2 text-center mt-2">
                  <Eyebrow2>01 · LTL</Eyebrow2>
                  <CardTitle>Frete Fracionado Pesado</CardTitle>
                  <CardDesc>
                    Consolidação inteligente a partir de 100 kg, com rastreamento e tratamento
                    individual em cada nota fiscal.
                  </CardDesc>
                  <div className="pt-2">
                    <CardLink href={WA_COTACAO}>Cotar fracionado</CardLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Card 2 — Dedicado FTL (2/6) ── */}
          <motion.div variants={FADE_UP} className="col-span-full sm:col-span-3 lg:col-span-2">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center gap-6 pt-8 h-full">
                <RingVisual icon={Truck} />
                <div className="space-y-2 text-center mt-2">
                  <Eyebrow2>02 · FTL</Eyebrow2>
                  <CardTitle>Frete Dedicado / Carga Fechada</CardTitle>
                  <CardDesc>
                    Veículo exclusivo para sua operação. Saída programada e SLA acordado caso a caso.
                  </CardDesc>
                  <div className="pt-2">
                    <CardLink href={WA_COTACAO}>Cotar dedicado</CardLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Card 3 — Especial PROJETO (2/6) ── */}
          <motion.div variants={FADE_UP} className="col-span-full sm:col-span-3 lg:col-span-2">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center gap-6 pt-8 h-full">
                <div className="w-full px-2 pt-2">
                  <CargoTypesVisual />
                </div>
                <div className="space-y-2 text-center mt-2">
                  <Eyebrow2>03 · PROJETO</Eyebrow2>
                  <CardTitle>Aço, Bobinas e Equipamentos</CardTitle>
                  <CardDesc>
                    Amarração técnica, plano de rigging e descarregamento em nível de calçada
                    quando exigido.
                  </CardDesc>
                  <div className="pt-2">
                    <CardLink href={WA_COTACAO}>Carga especial</CardLink>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Card 4 — Urgente EXPRESS (3/6) ── */}
          <motion.div variants={FADE_UP} className="col-span-full lg:col-span-3">
            <Card className="h-full">
              <CardContent className="grid sm:grid-cols-2 pt-6 h-full gap-6">
                {/* Texto */}
                <div className="flex flex-col justify-between gap-8 text-center sm:text-left items-center sm:items-start">
                  <div
                    className="relative flex aspect-square size-12 rounded-full items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)' }} />
                    <Zap size={22} strokeWidth={1.25} style={{ color: ACCENT2 }} />
                  </div>
                  <div className="space-y-2">
                    <Eyebrow2>04 · EXPRESS</Eyebrow2>
                    <CardTitle>Frete Urgente / Coleta Imediata</CardTitle>
                    <CardDesc>
                      Para quando a parada de linha custa mais que o frete. Acionamento
                      prioritário, coleta no mesmo dia.
                    </CardDesc>
                    <div className="pt-2">
                      <CardLink href={WA_URGENTE}>Acionamento urgente</CardLink>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div
                  className="rounded-xl p-4 sm:ml-4"
                  style={{ border: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(0,0,0,0.3)' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="size-2 rounded-full" style={{ backgroundColor: '#22C55E' }} />
                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Fluxo express
                    </span>
                  </div>
                  <UrgencyTimeline />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* ── Card 5 — Cobertura Nacional (3/6) ── */}
          <motion.div variants={FADE_UP} className="col-span-full lg:col-span-3">
            <Card className="h-full">
              <CardContent className="grid sm:grid-cols-2 pt-6 h-full gap-6">
                {/* Texto */}
                <div className="flex flex-col justify-between gap-8">
                  <div
                    className="relative flex aspect-square size-12 rounded-full items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <div className="absolute -inset-2 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)' }} />
                    <Globe size={22} strokeWidth={1.25} style={{ color: ACCENT2 }} />
                  </div>
                  <div className="space-y-2">
                    <Eyebrow2>COBERTURA</Eyebrow2>
                    <CardTitle>Cobertura Nacional</CardTitle>
                    <CardDesc>
                      Sul, Sudeste, Centro-Oeste, Nordeste e Norte. Eixos BH–SP,
                      BH–Nordeste e BH–Sul com saídas recorrentes.
                    </CardDesc>
                    <div className="pt-2">
                      <CardLink href={WA_COTACAO}>Verificar minha rota</CardLink>
                    </div>
                  </div>
                </div>

                {/* Coverage bars */}
                <div
                  className="rounded-xl p-4 sm:ml-4 flex flex-col justify-center"
                  style={{ border: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(0,0,0,0.3)' }}
                >
                  <p style={{ fontSize: '11px', fontFamily: 'Inter', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '16px' }}>
                    Volume por eixo
                  </p>
                  <CoverageVisual />
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
