import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Truck, Shield, Clock, MapPin, Instagram, Linkedin } from 'lucide-react'
import { DriverRegistrationForm } from '../components/DriverRegistrationForm'
import { MinimalistHero } from '../components/ui/minimalist-hero'
import { FADE_UP } from '../lib/constants'

const BENEFICIOS = [
  { icon: Truck,  title: 'Cargas industriais', desc: 'Aço, equipamentos, energia, mineração. Cargas com valor e prazo bem definidos.' },
  { icon: MapPin, title: 'Rotas nacionais',    desc: 'Eixos BH–SP, BH–Nordeste e BH–Sul são recorrentes. Cobertura nacional.' },
  { icon: Clock,  title: 'Pagamento em dia',   desc: 'Sem atraso, sem desconto inesperado. Prazo combinado no embarque é cumprido.' },
  { icon: Shield, title: 'Documentação clara', desc: 'CT-e e MDF-e emitidos antes do carregamento. Sem improviso, sem pendência.' },
]

export default function MotoristaParceiro() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F2EC' }}>
      <Helmet>
        <title>Motorista Parceiro — F1000 Transportes</title>
        <meta name="description" content="Cadastre-se como motorista parceiro da F1000 Transportes. Rotas industriais recorrentes, CT-e e MDF-e emitidos antes do carregamento, pagamento no prazo." />
        <link rel="canonical" href="https://f1000transportes.com/motorista-parceiro" />
        <meta property="og:url" content="https://f1000transportes.com/motorista-parceiro" />
        <meta property="og:title" content="Motorista Parceiro — F1000 Transportes" />
        <meta property="og:description" content="Cadastre-se como motorista parceiro da F1000. Rotas industriais recorrentes, pagamento no prazo." />
      </Helmet>

      {/* Skip-link */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600 }}
      >
        Pular para o conteúdo
      </a>

      {/* Header minimalista */}
      <header
        className="sticky top-0 z-50"
        style={{
          backgroundColor: 'rgba(245,242,236,0.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--color-mist)',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          className="w-full mx-auto flex items-center justify-between"
          style={{ maxWidth: '1280px', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}
        >
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--color-deep-black)', fontFamily: 'Inter', fontSize: '0.875rem', fontWeight: 500, transition: 'color 150ms' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--color-deep-blue)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--color-deep-black)')}
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Voltar ao site
          </Link>

          <img
            src="/logo-f1000-normal.png"
            alt="F1000 Transportes"
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
          />
        </div>
      </header>

      <main id="conteudo">

      {/* Hero — MinimalistHero adaptado */}
      <MinimalistHero
        eyebrow="Motoristas · Agregados · Parceiros"
        mainText="Rotas industriais recorrentes. CT-e e MDF-e emitidos antes do carregamento. Pagamento no prazo combinado, sempre. Documentação 100% em dia."
        onScrollToForm={() => {
          const el = document.getElementById('formulario-motorista')
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }}
        readMoreLabel="Quero me cadastrar"
        imageSrc="/imagens-hero/scania.deitada%20final.webp"
        imageAlt="Caminhão Scania em operação F1000 Transportes"
        overlayText={{ part1: 'ROTA', part2: 'CERTA.' }}
        socialLinks={[
          { icon: Instagram, href: 'https://instagram.com/f1000transportesltda', label: 'Instagram F1000' },
          { icon: Linkedin,  href: 'https://linkedin.com/company/f1000-transportes',  label: 'LinkedIn F1000' },
        ]}
        locationText="Betim/MG · Cobertura Nacional"
      />

      {/* Benefícios */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) 0', backgroundColor: '#F5F2EC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
            Por que rodar com a F1000
          </p>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--color-deep-black)', lineHeight: 1.1, letterSpacing: '-0.015em', marginBottom: '64px', maxWidth: '700px', fontFeatureSettings: '"ss01"' }}>
            Operação madura, gestão clara, fluxo constante.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFICIOS.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={FADE_UP}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                  style={{ backgroundColor: '#fff', border: '1px solid var(--color-mist)', borderRadius: '2px', padding: '32px' }}
                >
                  <Icon size={28} strokeWidth={1.25} style={{ color: 'var(--color-deep-blue)', marginBottom: '24px' }} />
                  <h3 style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '1.0625rem', color: 'var(--color-deep-black)', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'var(--color-steel)', lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section
        id="formulario-motorista"
        style={{ padding: 'clamp(4rem,8vw,7rem) 0', backgroundColor: '#0A0A0A', scrollMarginTop: '80px' }}
      >
        <div style={{ maxWidth: '920px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
            Cadastro
          </p>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.015em', marginBottom: '16px', fontFeatureSettings: '"ss01"' }}>
            Envie seus dados.
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '48px', maxWidth: '560px' }}>
            Preenchimento em 2 minutos. Retornamos quando surgir uma rota compatível com seu veículo e região-base.
          </p>
          <DriverRegistrationForm />
        </div>
      </section>

      </main>

      {/* Footer reduzido */}
      <footer style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '48px 0' }}>
        <div
          className="flex flex-col sm:flex-row justify-between gap-4"
          style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)', fontFamily: 'Inter', fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)' }}
        >
          <p>© 2026 F1000 Transportes · Betim/MG</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
            >
              Voltar ao site
            </Link>
            <a href="https://wa.me/5531973495550" target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
