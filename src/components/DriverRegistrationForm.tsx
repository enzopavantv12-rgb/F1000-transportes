import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

interface FormData {
  nome: string
  whatsapp: string
  cidade: string
  uf: string
  cnhCategoria: string
  veiculoTipo: string
  veiculoAno: string
  veiculoProprio: string
  rntrc: string
  experiencia: string
  disponibilidade: string
}

const INITIAL: FormData = {
  nome: '', whatsapp: '', cidade: '', uf: '',
  cnhCategoria: '', veiculoTipo: '', veiculoAno: '',
  veiculoProprio: '', rntrc: '', experiencia: '', disponibilidade: '',
}

const INPUT = {
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '2px',
  padding: '12px 16px',
  fontFamily: 'Inter',
  fontSize: '0.9375rem',
  color: '#fff',
  outline: 'none',
  boxSizing: 'border-box' as const,
  appearance: 'none' as const,
} satisfies React.CSSProperties

const LABEL = {
  display: 'block',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: 'rgba(255,255,255,0.6)',
  marginBottom: '8px',
} satisfies React.CSSProperties

export function DriverRegistrationForm() {
  const [data, setData] = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  const up = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setData(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = [
      `*CADASTRO MOTORISTA PARCEIRO — SITE F1000*`,
      '',
      `*Nome:* ${data.nome}`,
      `*WhatsApp:* ${data.whatsapp}`,
      `*Cidade-base:* ${data.cidade}/${data.uf}`,
      '',
      `*CNH:* ${data.cnhCategoria}`,
      `*Veículo:* ${data.veiculoTipo}${data.veiculoAno ? ` (${data.veiculoAno})` : ''}`,
      `*Veículo próprio?* ${data.veiculoProprio}`,
      `*RNTRC:* ${data.rntrc || 'Não informado'}`,
      '',
      `*Experiência:* ${data.experiencia}`,
      `*Disponibilidade:* ${data.disponibilidade}`,
      '',
      `_Cadastro via /motorista-parceiro_`,
    ].join('\n')

    window.open(`https://wa.me/5531973495550?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(5,62,131,0.4)', borderRadius: '2px', padding: '48px 40px', textAlign: 'center' }}>
        <CheckCircle2 size={40} strokeWidth={1.25} style={{ color: '#053E83', margin: '0 auto 24px' }} />
        <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.5rem', color: '#fff', marginBottom: '12px' }}>
          Cadastro enviado.
        </h3>
        <p style={{ fontFamily: 'Inter', fontSize: '1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
          Nosso operacional entra em contato quando surgir uma rota compatível. Boas estradas.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label style={LABEL}>Nome completo *</label>
          <input type="text" required value={data.nome} onChange={up('nome')} style={INPUT} placeholder="Como aparece na CNH" />
        </div>
        <div>
          <label style={LABEL}>WhatsApp *</label>
          <input type="tel" required value={data.whatsapp} onChange={up('whatsapp')} style={INPUT} placeholder="(31) 99999-9999" />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_120px] gap-6">
        <div>
          <label style={LABEL}>Cidade-base *</label>
          <input type="text" required value={data.cidade} onChange={up('cidade')} style={INPUT} placeholder="De onde você sai" />
        </div>
        <div>
          <label style={LABEL}>UF *</label>
          <input type="text" required maxLength={2} value={data.uf} onChange={up('uf')} style={{ ...INPUT, textTransform: 'uppercase' }} placeholder="MG" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label style={LABEL}>CNH categoria *</label>
          <select required value={data.cnhCategoria} onChange={up('cnhCategoria')} style={INPUT}>
            <option value="">Selecione</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
        </div>
        <div>
          <label style={LABEL}>Tipo de veículo *</label>
          <select required value={data.veiculoTipo} onChange={up('veiculoTipo')} style={INPUT}>
            <option value="">Selecione</option>
            <option>Toco</option>
            <option>Truck</option>
            <option>Carreta</option>
            <option>Bitrem</option>
            <option>Rodotrem</option>
            <option>VUC / 3/4</option>
          </select>
        </div>
        <div>
          <label style={LABEL}>Ano do veículo</label>
          <input type="text" maxLength={4} value={data.veiculoAno} onChange={up('veiculoAno')} style={INPUT} placeholder="2020" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label style={LABEL}>Veículo próprio ou agregado? *</label>
          <select required value={data.veiculoProprio} onChange={up('veiculoProprio')} style={INPUT}>
            <option value="">Selecione</option>
            <option>Próprio</option>
            <option>Agregado de outra empresa</option>
            <option>Em financiamento</option>
          </select>
        </div>
        <div>
          <label style={LABEL}>RNTRC ativo?</label>
          <select value={data.rntrc} onChange={up('rntrc')} style={INPUT}>
            <option value="">Selecione</option>
            <option>Sim, ativo</option>
            <option>Em renovação</option>
            <option>Não tenho</option>
          </select>
        </div>
      </div>

      <div>
        <label style={LABEL}>Tempo de experiência *</label>
        <select required value={data.experiencia} onChange={up('experiencia')} style={INPUT}>
          <option value="">Selecione</option>
          <option>Menos de 2 anos</option>
          <option>2 a 5 anos</option>
          <option>5 a 10 anos</option>
          <option>Mais de 10 anos</option>
        </select>
      </div>

      <div>
        <label style={LABEL}>Disponibilidade *</label>
        <select required value={data.disponibilidade} onChange={up('disponibilidade')} style={INPUT}>
          <option value="">Selecione</option>
          <option>Imediata, rodando agora</option>
          <option>Esta semana</option>
          <option>Este mês</option>
          <option>Quero ficar cadastrado para o futuro</option>
        </select>
      </div>

      <div style={{ paddingTop: '8px' }}>
        <button
          type="submit"
          style={{ backgroundColor: '#fff', color: '#000', fontFamily: 'Inter', fontWeight: 700, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '18px 40px', borderRadius: '2px', border: 'none', cursor: 'pointer', transition: 'background-color 200ms' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#F5F2EC')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = '#fff')}
        >
          Enviar Cadastro
        </button>
        <p style={{ marginTop: '16px', fontFamily: 'Inter', fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
          Ao enviar, você concorda com o tratamento dos dados conforme nossa Política de Privacidade (LGPD).
        </p>
      </div>

    </form>
  )
}
