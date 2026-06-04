import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react'

interface QuizModalProps {
  open: boolean
  onClose: () => void
}

type Modalidade = 'fracionado' | 'dedicado' | 'especial' | 'urgente'
type TipoCarga = 'aco' | 'equipamentos' | 'energia' | 'oleo-gas' | 'mineracao' | 'outros'

interface QuizData {
  modalidade: Modalidade | ''
  tipoCarga: TipoCarga | ''
  origem: string
  destino: string
  pesoFaixa: string
  nome: string
  whatsapp: string
  email: string
}

const INITIAL: QuizData = {
  modalidade: '', tipoCarga: '', origem: '', destino: '',
  pesoFaixa: '', nome: '', whatsapp: '', email: '',
}

const TOTAL_STEPS = 5

const LABEL_MODALIDADE: Record<Modalidade, string> = {
  fracionado: 'Frete Fracionado',
  dedicado:   'Frete Dedicado',
  especial:   'Carga Especial',
  urgente:    'Frete Urgente',
}

const LABEL_TIPO: Record<TipoCarga, string> = {
  aco:          'Aço, bobinas, chapas',
  equipamentos: 'Equipamentos industriais',
  energia:      'Energia (geradores, transformadores, solar)',
  'oleo-gas':   'Óleo & gás',
  mineracao:    'Mineração',
  outros:       'Outros — descrever no contato',
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StepWrapper({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 700, color: '#000', lineHeight: 1.15, marginBottom: '12px' }}>
        {title}
      </h3>
      <p style={{ fontFamily: 'Inter', fontSize: '0.9375rem', color: '#6B7280', marginBottom: '32px', lineHeight: 1.6 }}>
        {sub}
      </p>
      {children}
    </div>
  )
}

function OptionCard({ selected, onClick, title, desc }: { selected: boolean; onClick: () => void; title: string; desc: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left', padding: '20px',
        border: `1px solid ${selected ? '#053E83' : '#D4D7DD'}`,
        backgroundColor: selected ? 'rgba(5,62,131,0.04)' : '#fff',
        borderRadius: '2px', cursor: 'pointer', transition: 'border-color 150ms', width: '100%',
      }}
    >
      <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '0.9375rem', color: '#000', marginBottom: '4px' }}>{title}</p>
      <p style={{ fontFamily: 'Inter', fontSize: '0.8125rem', color: '#6B7280', lineHeight: 1.4 }}>{desc}</p>
    </button>
  )
}

function OptionCompact({ selected, onClick, title }: { selected: boolean; onClick: () => void; title: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        textAlign: 'left', padding: '14px 16px',
        border: `1px solid ${selected ? '#053E83' : '#D4D7DD'}`,
        backgroundColor: selected ? 'rgba(5,62,131,0.04)' : '#fff',
        borderRadius: '2px', cursor: 'pointer', transition: 'border-color 150ms', width: '100%',
        fontFamily: 'Inter', fontSize: '0.9375rem', color: '#000',
      }}
    >
      {title}
    </button>
  )
}

function TextInput({ label, value, onChange, placeholder, type = 'text' }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string
}) {
  return (
    <div>
      <label style={{ display: 'block', fontFamily: 'Inter', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.6)', marginBottom: '8px' }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: '100%', backgroundColor: '#fff', border: '1px solid #D4D7DD', borderRadius: '2px', padding: '12px 16px', fontFamily: 'Inter', fontSize: '0.9375rem', color: '#000', outline: 'none', boxSizing: 'border-box' }}
        onFocus={e => (e.target.style.borderColor = '#053E83')}
        onBlur={e => (e.target.style.borderColor = '#D4D7DD')}
      />
    </div>
  )
}

// ── Main component ──────────────────────────────────────────────────────────

export function QuizModal({ open, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<QuizData>(INITIAL)
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setStep(0)
      setData(INITIAL)
      setEnviado(false)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const set = <K extends keyof QuizData>(field: K, value: QuizData[K]) =>
    setData(prev => ({ ...prev, [field]: value }))

  const podeAvancar = () => {
    switch (step) {
      case 0: return data.modalidade !== ''
      case 1: return data.tipoCarga !== ''
      case 2: return data.origem.length > 2 && data.destino.length > 2
      case 3: return data.pesoFaixa !== ''
      case 4: return data.nome.length > 2 && data.whatsapp.length > 8 && data.email.includes('@')
      default: return false
    }
  }

  const finalizar = () => {
    const msg = [
      '🔥 *NOVO LEAD — F1000 Transportes*',
      '━━━━━━━━━━━━━━━━━━━━━━',
      '',
      `📋 *Modalidade:* ${LABEL_MODALIDADE[data.modalidade as Modalidade]}`,
      `📦 *Tipo de carga:* ${LABEL_TIPO[data.tipoCarga as TipoCarga]}`,
      `📍 *Origem:* ${data.origem}`,
      `📍 *Destino:* ${data.destino}`,
      `⚖️ *Peso aproximado:* ${data.pesoFaixa}`,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Nome:* ${data.nome}`,
      `📱 *WhatsApp:* ${data.whatsapp}`,
      `✉️ *E-mail:* ${data.email}`,
      '',
      '_Enviado via site f1000transportes.com_',
    ].join('\n')

    setEnviado(true)
    setTimeout(() => window.open(`https://wa.me/5531973495550?text=${encodeURIComponent(msg)}`, '_blank'), 1000)
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
        style={{ backgroundColor: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full my-8 relative"
          style={{ maxWidth: '720px', backgroundColor: '#F5F2EC', borderRadius: '2px', overflow: 'hidden' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Fechar */}
          <button
            onClick={onClose}
            style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(0,0,0,0.5)', display: 'flex' }}
            aria-label="Fechar"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          {/* Progress bar */}
          {!enviado && (
            <div style={{ height: '3px', backgroundColor: '#D4D7DD' }}>
              <motion.div
                style={{ height: '100%', backgroundColor: '#053E83' }}
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
          )}

          <div style={{ padding: 'clamp(2rem,5vw,3.5rem)' }}>

            {/* ── CONFIRMAÇÃO DE ENVIO ── */}
            {enviado && (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle2 size={48} strokeWidth={1.25} style={{ color: '#053E83', margin: '0 auto 24px' }} />
                <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.875rem', fontWeight: 700, color: '#000', marginBottom: '16px' }}>
                  Cotação enviada.
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#6B7280', lineHeight: 1.65, maxWidth: '500px', margin: '0 auto 8px' }}>
                  Nosso comercial responde em até 15 minutos no seu WhatsApp.
                </p>
                <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'rgba(107,114,128,0.7)' }}>
                  Abrindo o WhatsApp em uma nova aba…
                </p>
              </div>
            )}

            {/* ── QUIZ STEPS ── */}
            {!enviado && (
              <>
                <p style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#053E83', marginBottom: '12px' }}>
                  Passo {step + 1} de {TOTAL_STEPS}
                </p>

                {/* Step 0 — Modalidade */}
                {step === 0 && (
                  <StepWrapper title="Qual modalidade você precisa?" sub="Definimos a melhor abordagem com base no formato do frete.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {([
                        ['fracionado', 'Frete Fracionado',  'Carga consolidada, a partir de 100 kg'] as const,
                        ['dedicado',   'Frete Dedicado',    'Veículo exclusivo, carga fechada'] as const,
                        ['especial',   'Carga Especial',    'Aço, bobinas, equipamentos pesados'] as const,
                        ['urgente',    'Frete Urgente',     'Coleta imediata, prioridade absoluta'] as const,
                      ]).map(([val, title, desc]) => (
                        <OptionCard key={val} selected={data.modalidade === val} onClick={() => set('modalidade', val)} title={title} desc={desc} />
                      ))}
                    </div>
                  </StepWrapper>
                )}

                {/* Step 1 — Tipo de carga */}
                {step === 1 && (
                  <StepWrapper title="Qual o tipo de carga?" sub="Selecione a categoria mais próxima da sua operação.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {([
                        ['aco',          'Aço, bobinas, chapas'] as const,
                        ['equipamentos', 'Equipamentos industriais'] as const,
                        ['energia',      'Energia (geradores, transformadores, solar)'] as const,
                        ['oleo-gas',     'Óleo & gás'] as const,
                        ['mineracao',    'Mineração'] as const,
                        ['outros',       'Outros — descrever no contato'] as const,
                      ]).map(([val, title]) => (
                        <OptionCompact key={val} selected={data.tipoCarga === val} onClick={() => set('tipoCarga', val)} title={title} />
                      ))}
                    </div>
                  </StepWrapper>
                )}

                {/* Step 2 — Origem / Destino */}
                {step === 2 && (
                  <StepWrapper title="De onde sai e para onde vai?" sub="Cidade e UF. Pode ser aproximado se ainda não fechou.">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <TextInput label="Origem" value={data.origem} onChange={v => set('origem', v)} placeholder="Ex: Betim/MG" />
                      <TextInput label="Destino" value={data.destino} onChange={v => set('destino', v)} placeholder="Ex: Recife/PE" />
                    </div>
                  </StepWrapper>
                )}

                {/* Step 3 — Peso */}
                {step === 3 && (
                  <StepWrapper title="Qual o peso aproximado da carga?" sub="Informe a faixa de peso para dimensionarmos a operação.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        ['ate-100kg', 'Até 100 kg'],
                        ['100kg-1t',  'De 100 kg a 1 tonelada'],
                        ['1-25t',     'De 1 a 25 toneladas'],
                        ['acima-25t', 'Acima de 25 toneladas'],
                      ].map(([val, title]) => (
                        <OptionCompact key={val} selected={data.pesoFaixa === val} onClick={() => set('pesoFaixa', val)} title={title} />
                      ))}
                    </div>
                  </StepWrapper>
                )}

                {/* Step 4 — Dados de contato */}
                {step === 4 && (
                  <StepWrapper title="Para te retornarmos em 15 minutos" sub="Seus dados ficam só com nosso comercial — sem spam.">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <TextInput label="Nome completo *" value={data.nome} onChange={v => set('nome', v)} placeholder="Seu nome" />
                      <TextInput label="WhatsApp *" value={data.whatsapp} onChange={v => set('whatsapp', v)} placeholder="(31) 99999-9999" type="tel" />
                      <TextInput label="E-mail *" value={data.email} onChange={v => set('email', v)} placeholder="seu@email.com.br" type="email" />
                    </div>
                  </StepWrapper>
                )}

                {/* Navegação */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '24px', borderTop: '1px solid #D4D7DD' }}>
                  <button
                    type="button"
                    onClick={() => setStep(s => Math.max(0, s - 1))}
                    disabled={step === 0}
                    style={{ background: 'none', border: 'none', cursor: step === 0 ? 'not-allowed' : 'pointer', opacity: step === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', transition: 'opacity 150ms' }}
                  >
                    <ArrowLeft size={16} /> Voltar
                  </button>

                  {step < TOTAL_STEPS - 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(s => s + 1)}
                      disabled={!podeAvancar()}
                      style={{ backgroundColor: podeAvancar() ? '#053E83' : '#D4D7DD', color: podeAvancar() ? '#fff' : '#9CA3AF', fontFamily: 'Inter', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: '2px', border: 'none', cursor: podeAvancar() ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background-color 200ms' }}
                    >
                      Avançar <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={finalizar}
                      disabled={!podeAvancar()}
                      style={{ backgroundColor: podeAvancar() ? '#000' : '#D4D7DD', color: podeAvancar() ? '#fff' : '#9CA3AF', fontFamily: 'Inter', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: '2px', border: 'none', cursor: podeAvancar() ? 'pointer' : 'not-allowed', transition: 'background-color 200ms' }}
                    >
                      Enviar Cotação
                    </button>
                  )}
                </div>
              </>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
