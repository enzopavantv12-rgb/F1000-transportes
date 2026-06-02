import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, Ban } from 'lucide-react'

interface QuizModalProps {
  open: boolean
  onClose: () => void
}

type Modalidade = 'fracionado' | 'dedicado' | 'especial' | 'urgente'
type TipoCarga =
  | 'aco' | 'equipamentos' | 'energia' | 'oleo-gas' | 'mineracao'
  | 'gerador' | 'outro-industrial' | 'mudanca' | 'motofrete' | 'pequeno-volume'
type Frequencia = 'avulso' | 'mensal' | 'semanal' | 'recorrente'
type Resultado = 'verde' | 'amarelo' | 'vermelho' | null

interface QuizData {
  modalidade: Modalidade | ''
  tipoCarga: TipoCarga | ''
  origem: string
  destino: string
  pesoFaixa: string
  valorNF: string
  frequencia: Frequencia | ''
  nome: string
  whatsapp: string
  empresa: string
}

const INITIAL: QuizData = {
  modalidade: '', tipoCarga: '', origem: '', destino: '',
  pesoFaixa: '', valorNF: '', frequencia: '',
  nome: '', whatsapp: '', empresa: '',
}

const TOTAL_STEPS = 6

const LABEL_MODALIDADE: Record<Modalidade, string> = {
  fracionado: 'Frete Fracionado',
  dedicado: 'Frete Dedicado',
  especial: 'Carga Especial',
  urgente: 'Frete Urgente',
}
const LABEL_TIPO: Record<TipoCarga, string> = {
  aco: 'Aço, bobinas, chapas',
  equipamentos: 'Equipamentos industriais',
  energia: 'Painéis solares / energia',
  'oleo-gas': 'Óleo & gás',
  mineracao: 'Mineração',
  gerador: 'Gerador de energia',
  'outro-industrial': 'Outro industrial',
  mudanca: 'Mudança residencial',
  motofrete: 'Motofrete',
  'pequeno-volume': 'Pequeno volume',
}
const LABEL_FREQUENCIA: Record<Frequencia, string> = {
  avulso: 'Avulso',
  mensal: 'Mensal',
  semanal: 'Semanal',
  recorrente: 'Recorrente / contrato',
}

function calcularResultado(d: QuizData): Resultado {
  if (d.tipoCarga === 'mudanca' || d.tipoCarga === 'motofrete' || d.tipoCarga === 'pequeno-volume') return 'vermelho'
  if (d.pesoFaixa === 'ate-100kg') return 'vermelho'
  if (d.tipoCarga === 'gerador') return 'amarelo'
  return 'verde'
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StepWrapper({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 400, color: '#000', lineHeight: 1.15, marginBottom: '12px' }}>
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
        textAlign: 'left', padding: '20px', border: `1px solid ${selected ? '#053E83' : '#D4D7DD'}`,
        backgroundColor: selected ? 'rgba(5,62,131,0.04)' : '#fff', borderRadius: '2px',
        cursor: 'pointer', transition: 'border-color 150ms', width: '100%',
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
        textAlign: 'left', padding: '14px 16px', border: `1px solid ${selected ? '#053E83' : '#D4D7DD'}`,
        backgroundColor: selected ? 'rgba(5,62,131,0.04)' : '#fff', borderRadius: '2px',
        cursor: 'pointer', transition: 'border-color 150ms', width: '100%',
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
  const [resultado, setResultado] = useState<Resultado>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setStep(0)
      setData(INITIAL)
      setResultado(null)
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
      case 4: return data.valorNF !== '' && data.frequencia !== ''
      case 5: return data.nome.length > 2 && data.whatsapp.length > 8 && data.empresa.length > 2
      default: return false
    }
  }

  const avancar = () => {
    // Qualificação após tipo de carga (step 1) e peso (step 3)
    if (step === 1 || step === 3) {
      const res = calcularResultado(data)
      if (res === 'vermelho') { setResultado('vermelho'); return }
    }
    setStep(s => s + 1)
  }

  const finalizar = () => {
    const res = calcularResultado(data)
    setResultado(res)
    if (res === 'verde' || res === 'amarelo') {
      const isRecorrente = data.frequencia === 'recorrente' || data.frequencia === 'semanal'
      const tag = res === 'amarelo'
        ? '⚠ EXIGE CONFIRMAÇÃO PRÉVIA'
        : isRecorrente
          ? '⭐ LEAD RECORRENTE — PRIORIDADE'
          : '🟢 LEAD QUALIFICADO'

      const msg = [
        `*${tag}*`,
        `*COTAÇÃO DE FRETE — SITE F1000*`,
        '',
        `*Modalidade:* ${LABEL_MODALIDADE[data.modalidade as Modalidade]}`,
        `*Carga:* ${LABEL_TIPO[data.tipoCarga as TipoCarga]}`,
        `*Origem:* ${data.origem}`,
        `*Destino:* ${data.destino}`,
        `*Peso:* ${data.pesoFaixa}`,
        `*Valor NF:* ${data.valorNF}`,
        `*Frequência:* ${LABEL_FREQUENCIA[data.frequencia as Frequencia]}`,
        '',
        `*Nome:* ${data.nome}`,
        `*WhatsApp:* ${data.whatsapp}`,
        `*Empresa:* ${data.empresa}`,
        '',
        `_Lead via quiz de cotação do site_`,
      ].join('\n')

      setTimeout(() => window.open(`https://wa.me/5531973495550?text=${encodeURIComponent(msg)}`, '_blank'), 1200)
    }
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
          {!resultado && (
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

            {/* ── RESULTADO VERMELHO ── */}
            {resultado === 'vermelho' && (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <Ban size={48} strokeWidth={1.25} style={{ color: '#053E83', margin: '0 auto 24px' }} />
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.875rem', fontWeight: 400, color: '#000', marginBottom: '16px' }}>
                  Esse perfil não é o nosso.
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#6B7280', lineHeight: 1.65, maxWidth: '500px', margin: '0 auto 32px' }}>
                  A F1000 opera exclusivamente cargas industriais a partir de 100 kg. Não atendemos mudanças residenciais, motofretes ou pequenos volumes.
                </p>
                <button onClick={onClose} style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'Inter', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 32px', borderRadius: '2px', border: 'none', cursor: 'pointer' }}>
                  Entendi
                </button>
              </div>
            )}

            {/* ── RESULTADO VERDE / AMARELO ── */}
            {(resultado === 'verde' || resultado === 'amarelo') && (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                {resultado === 'verde'
                  ? <CheckCircle2 size={48} strokeWidth={1.25} style={{ color: '#053E83', margin: '0 auto 24px' }} />
                  : <AlertTriangle size={48} strokeWidth={1.25} style={{ color: '#053E83', margin: '0 auto 24px' }} />
                }
                <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '1.875rem', fontWeight: 400, color: '#000', marginBottom: '16px' }}>
                  {resultado === 'verde' ? 'Cotação enviada.' : 'Enviado com observação.'}
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#6B7280', lineHeight: 1.65, maxWidth: '500px', margin: '0 auto 8px' }}>
                  {resultado === 'verde'
                    ? 'Nosso comercial responde em até 15 minutos no seu WhatsApp.'
                    : 'Sua carga exige confirmação prévia. Nosso comercial entra em contato antes da cotação.'}
                </p>
                <p style={{ fontFamily: 'Inter', fontSize: '0.875rem', color: 'rgba(107,114,128,0.7)' }}>
                  Abrindo o WhatsApp em uma nova aba…
                </p>
              </div>
            )}

            {/* ── QUIZ STEPS ── */}
            {!resultado && (
              <>
                <p style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#053E83', marginBottom: '12px' }}>
                  Passo {step + 1} de {TOTAL_STEPS}
                </p>

                {/* Step 0 — Modalidade */}
                {step === 0 && (
                  <StepWrapper title="Qual modalidade você precisa?" sub="Definimos a melhor abordagem com base no formato do frete.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {([
                        ['fracionado', 'Frete Fracionado', 'Carga consolidada, a partir de 100 kg'] as const,
                        ['dedicado', 'Frete Dedicado', 'Veículo exclusivo, carga fechada'] as const,
                        ['especial', 'Carga Especial', 'Aço, bobinas, equipamentos pesados'] as const,
                        ['urgente', 'Frete Urgente', 'Coleta imediata, prioridade absoluta'] as const,
                      ]).map(([val, title, desc]) => (
                        <OptionCard key={val} selected={data.modalidade === val} onClick={() => set('modalidade', val)} title={title} desc={desc} />
                      ))}
                    </div>
                  </StepWrapper>
                )}

                {/* Step 1 — Tipo de carga */}
                {step === 1 && (
                  <StepWrapper title="Qual o tipo de carga?" sub="Algumas cargas exigem operação especializada.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {([
                        ['aco', 'Aço, bobinas, chapas'] as const,
                        ['equipamentos', 'Equipamentos industriais'] as const,
                        ['energia', 'Painéis solares / energia'] as const,
                        ['oleo-gas', 'Óleo & gás'] as const,
                        ['mineracao', 'Mineração'] as const,
                        ['gerador', 'Gerador de energia'] as const,
                        ['outro-industrial', 'Outro tipo industrial'] as const,
                        ['mudanca', 'Mudança residencial'] as const,
                        ['motofrete', 'Motofrete / entregas'] as const,
                        ['pequeno-volume', 'Pequeno volume / encomenda'] as const,
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
                  <StepWrapper title="Qual o peso aproximado da carga?" sub="Operamos exclusivamente a partir de 100 kg.">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        ['ate-100kg', 'Até 100 kg'],
                        ['100-500kg', '100 a 500 kg'],
                        ['500kg-2t', '500 kg a 2 toneladas'],
                        ['2-10t', '2 a 10 toneladas'],
                        ['10-25t', '10 a 25 toneladas'],
                        ['acima-25t', 'Acima de 25 toneladas'],
                      ].map(([val, title]) => (
                        <OptionCompact key={val} selected={data.pesoFaixa === val} onClick={() => set('pesoFaixa', val)} title={title} />
                      ))}
                    </div>
                  </StepWrapper>
                )}

                {/* Step 4 — Valor NF + Frequência */}
                {step === 4 && (
                  <StepWrapper title="Valor da nota e frequência" sub="Ajuda a dimensionar seguro e tipo de operação.">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div>
                        <p style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.6)', marginBottom: '12px' }}>Valor aproximado da NF</p>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            ['ate-50k', 'Até R$ 50 mil'],
                            ['50k-200k', 'R$ 50 a 200 mil'],
                            ['200k-500k', 'R$ 200 a 500 mil'],
                            ['acima-500k', 'Acima de R$ 500 mil'],
                          ].map(([val, title]) => (
                            <OptionCompact key={val} selected={data.valorNF === val} onClick={() => set('valorNF', val)} title={title} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.6)', marginBottom: '12px' }}>Frequência</p>
                        <div className="grid grid-cols-2 gap-3">
                          {([
                            ['avulso', 'Frete avulso'] as const,
                            ['mensal', 'Mensal'] as const,
                            ['semanal', 'Semanal'] as const,
                            ['recorrente', 'Recorrente / contrato'] as const,
                          ]).map(([val, title]) => (
                            <OptionCompact key={val} selected={data.frequencia === val} onClick={() => set('frequencia', val)} title={title} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </StepWrapper>
                )}

                {/* Step 5 — Dados de contato */}
                {step === 5 && (
                  <StepWrapper title="Para te retornarmos em 15 minutos" sub="Seus dados ficam só com nosso comercial.">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <TextInput label="Nome completo *" value={data.nome} onChange={v => set('nome', v)} placeholder="Seu nome" />
                      <TextInput label="WhatsApp *" value={data.whatsapp} onChange={v => set('whatsapp', v)} placeholder="(31) 99999-9999" type="tel" />
                      <TextInput label="Empresa *" value={data.empresa} onChange={v => set('empresa', v)} placeholder="Razão social ou nome fantasia" />
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
                      onClick={avancar}
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
