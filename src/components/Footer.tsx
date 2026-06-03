import { Instagram, Linkedin, MapPin, Clock, Phone, Mail } from 'lucide-react'
import { BackgroundGrid } from './ui/BackgroundGrid'
import { ADDRESS, EMAIL, HOURS, INSTAGRAM, LINKEDIN, PHONE_PRIMARY, PHONE_SECONDARY } from '../lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative" style={{ backgroundColor: 'var(--color-ink)' }}>
      <BackgroundGrid variant="dark" />
      <div
        className="container-main relative z-10"
        style={{ paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: '2rem' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 pb-12">

          {/* Col 1 — Logo + endereço */}
          <div className="flex flex-col gap-5">
            <img
              src="/logo-f1000-branca.png"
              alt="F1000 Transportes"
              style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
            />

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <MapPin size={14} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.35)', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  {ADDRESS.street}<br />
                  {ADDRESS.district} · {ADDRESS.city}<br />
                  CEP {ADDRESS.cep}
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Clock size={14} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.35)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                  {HOURS}
                </span>
              </div>
            </div>

            <span style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>
              CNPJ: XX.XXX.XXX/XXXX-XX
            </span>
          </div>

          {/* Col 2 — Navegação */}
          <div className="flex flex-col gap-4">
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
              Navegação
            </span>
            {[
              { label: 'Serviços', href: '#servicos' },
              { label: 'Sobre a F1000', href: '#sobre' },
              { label: 'Setores', href: '#setores' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Motorista parceiro', href: '#motorista' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.9375rem',
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  transition: 'color 150ms',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'white')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Col 3 — Contato */}
          <div className="flex flex-col gap-4">
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
              Contato
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\D/g, '')}`}
                className="flex items-center gap-3"
                style={{ textDecoration: 'none' }}
              >
                <Phone size={14} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.35)' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)' }}>{PHONE_PRIMARY}</span>
              </a>
              <a
                href={`tel:${PHONE_SECONDARY.replace(/\D/g, '')}`}
                className="flex items-center gap-3"
                style={{ textDecoration: 'none' }}
              >
                <Phone size={14} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.35)' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)' }}>{PHONE_SECONDARY}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3"
                style={{ textDecoration: 'none' }}
              >
                <Mail size={14} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.35)' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)' }}>{EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Col 4 — Redes + Selos */}
          <div className="flex flex-col gap-5">
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
              Redes sociais
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: 'none' }}
              >
                <Instagram size={16} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.45)' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)' }}>@f1000transportesltda</span>
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
                style={{ textDecoration: 'none' }}
              >
                <Linkedin size={16} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.45)' }} />
                <span style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: 'rgba(255,255,255,0.55)' }}>LinkedIn / F1000 Transportes</span>
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              {['RNTRC · ANTT', 'RCTR-C', 'RCF-DC'].map(selo => (
                <span
                  key={selo}
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    fontFamily: 'Inter',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                  }}
                >
                  {selo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <span style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.28)' }}>
            © {year} F1000 Transportes · Todos os direitos reservados
          </span>
          <div className="flex gap-4">
            {['Política de Privacidade', 'Termos de Uso', 'LGPD'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.28)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.28)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
