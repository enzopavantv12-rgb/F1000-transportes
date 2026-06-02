import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Truck, Shield, Clock, MapPin } from 'lucide-react'
import { DriverRegistrationForm } from '../components/DriverRegistrationForm'
import { FADE_UP } from '../lib/constants'

const BENEFICIOS = [
  { icon: Truck,  title: 'Cargas industriais', desc: 'Aço, equipamentos, energia, mineração. Cargas com valor e prazo bem definidos.' },
  { icon: MapPin, title: 'Rotas nacionais',    desc: 'Eixos BH–SP, BH–Nordeste e BH–Sul são recorrentes. Cobertura nacional.' },
  { icon: Clock,  title: 'Pagamento em dia',   desc: 'Sem atraso, sem desconto inesperado. Prazo combinado no embarque é cumprido.' },
  { icon: Shield, title: 'Documentação clara', desc: 'CT-e e MDF-e emitidos antes do carregamento. Sem improviso, sem pendência.' },
]

export default function MotoristaParceiro() {
  useEffect(() => {
    document.title = 'Motorista Parceiro · F1000 Transportes'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Cadastre-se como motorista ou agregado parceiro da F1000 Transportes. Operação industrial, rotas nacionais, pagamento em dia.')
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F2EC' }}>

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

          <span style={{ fontFamily: 'Inter', fontWeight: 900, fontSize: '1.125rem', color: 'var(--color-deep-black)', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'var(--color-accent-blue)' }}>F</span>1000
            <span style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-steel)', marginLeft: '6px' }}>Transportes</span>
          </span>
        </div>
      </header>

      {/* Hero curto */}
      <section style={{ backgroundColor: '#000', color: '#fff', padding: 'clamp(4rem,10vw,8rem) 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent-blue)', marginBottom: '32px' }}
          >
            Motoristas e Agregados
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(2.5rem,6vw,4.5rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '900px', fontFeatureSettings: '"ss01"' }}
          >
            Rotas industriais, pagamento em dia, parceria que dura.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ marginTop: '40px', maxWidth: '640px', fontFamily: 'Inter', fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.6)' }}
          >
            Buscamos motoristas e transportadores parceiros com documentação em dia, perfil técnico e disposição para operações recorrentes. Cadastre-se e nosso operacional entra em contato quando houver rota compatível.
          </motion.p>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{ padding: 'clamp(4rem,8vw,7rem) 0', backgroundColor: '#F5F2EC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
            Por que rodar com a F1000
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--color-deep-black)', lineHeight: 1.1, letterSpacing: '-0.015em', marginBottom: '64px', maxWidth: '700px', fontFeatureSettings: '"ss01"' }}>
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
      <section style={{ padding: 'clamp(4rem,8vw,7rem) 0', backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', paddingLeft: 'clamp(1.25rem,5vw,3rem)', paddingRight: 'clamp(1.25rem,5vw,3rem)' }}>
          <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
            Cadastro
          </p>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: 'clamp(1.875rem,3.5vw,2.75rem)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.015em', marginBottom: '16px', fontFeatureSettings: '"ss01"' }}>
            Envie seus dados.
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '48px', maxWidth: '560px' }}>
            Preenchimento em 2 minutos. Retornamos quando surgir uma rota compatível com seu veículo e região-base.
          </p>
          <DriverRegistrationForm />
        </div>
      </section>

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
