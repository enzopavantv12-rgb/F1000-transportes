import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER } from '../lib/constants'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '2px',
  padding: '12px 16px',
  fontFamily: 'Inter',
  fontSize: '0.9375rem',
  color: 'white',
  outline: 'none',
}

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'Inter',
  fontSize: '0.8125rem',
  fontWeight: 500,
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '6px',
  display: 'block',
}

export function DriverForm() {
  const [status, setStatus] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/motorista', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      // fallback: mailto
      const subject = encodeURIComponent('Cadastro de Motorista Parceiro')
      const body = encodeURIComponent(
        `Nome: ${data.nome}\nWhatsApp: ${data.whatsapp}\nCNH: ${data.cnh}\nVeículo: ${data.veiculo}\nCidade-base: ${data.cidade}`
      )
      window.location.href = `mailto:comercial@f1000transportes.com?subject=${subject}&body=${body}`
      setStatus('idle')
    }
  }

  return (
    <section
      id="motorista"
      className="section-padding relative overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'var(--color-graphite)' }}
        aria-hidden="true"
      >
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.1, filter: 'saturate(0)' }}
          loading="lazy"
        />
      </div>

      <div className="container-main grid md:grid-cols-12 gap-12 md:gap-16 items-start relative">

        {/* Texto */}
        <motion.div
          className="md:col-span-5 flex flex-col gap-6"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow style={{ color: 'rgba(255,255,255,0.45)' }}>MOTORISTAS E AGREGADOS</Eyebrow>
          </motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3">
            <span className="accent-line" />
            <h2 className="text-section" style={{ color: 'var(--color-pure-white)' }}>
              Você é motorista? Trabalhe com a F1000.
            </h2>
          </motion.div>
          <motion.p
            variants={FADE_UP}
            style={{ fontFamily: 'Inter', fontSize: '1.0625rem', lineHeight: 1.65, color: 'var(--color-mist)' }}
          >
            Buscamos motoristas e transportadores parceiros com documentação em dia, perfil técnico e disposição para operações recorrentes. Cadastre-se e nosso operacional entra em contato quando houver rota compatível.
          </motion.p>
        </motion.div>

        {/* Formulário */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {status === 'success' ? (
            <div
              style={{
                padding: '48px 32px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.5rem', color: 'white', marginBottom: '12px' }}>
                Cadastro recebido!
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: 'var(--color-mist)' }}>
                Nosso operacional entrará em contato quando houver uma rota compatível com seu perfil.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="nome" style={LABEL_STYLE}>Nome completo</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    style={INPUT_STYLE}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" style={LABEL_STYLE}>WhatsApp</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    style={INPUT_STYLE}
                    placeholder="(31) 99999-9999"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="cnh" style={LABEL_STYLE}>CNH (categoria)</label>
                  <input
                    id="cnh"
                    name="cnh"
                    type="text"
                    required
                    style={INPUT_STYLE}
                    placeholder="Ex: C, D, E"
                  />
                </div>
                <div>
                  <label htmlFor="veiculo" style={LABEL_STYLE}>Tipo de veículo</label>
                  <select
                    id="veiculo"
                    name="veiculo"
                    required
                    style={{ ...INPUT_STYLE, color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}
                  >
                    <option value="" disabled selected>Selecione</option>
                    <option value="Toco">Toco</option>
                    <option value="Truck">Truck</option>
                    <option value="Carreta">Carreta</option>
                    <option value="Bitrem">Bitrem</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="cidade" style={LABEL_STYLE}>Cidade-base</label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  required
                  style={INPUT_STYLE}
                  placeholder="Cidade/UF"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{ marginTop: '4px', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar cadastro'}
              </button>

              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.35)',
                  lineHeight: 1.5,
                }}
              >
                Seu cadastro é tratado conforme nossa Política de Privacidade · LGPD
              </p>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}
