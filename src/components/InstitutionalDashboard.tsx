import { motion } from 'framer-motion'

const MONTHLY = [
  { month: 'Jan', value: 95 },
  { month: 'Fev', value: 97 },
  { month: 'Mar', value: 96 },
  { month: 'Abr', value: 98 },
  { month: 'Mai', value: 97 },
  { month: 'Jun', value: 97 },
]

const MIN = 92
const RANGE = 8 // 92..100
const BAR_H = 72 // px — altura total disponível para barras

// Radial chart — 97%
const R = 38
const CIRC = 2 * Math.PI * R
const OFFSET = CIRC * (1 - 0.97) // tiny gap = 97% filled

const ROUTES = [
  { label: 'BH → São Paulo',  pct: 88 },
  { label: 'BH → Nordeste',   pct: 72 },
  { label: 'BH → Sul',        pct: 61 },
  { label: 'BH → Centro-Oeste', pct: 54 },
]

export function InstitutionalDashboard() {
  return (
    <div
      className="w-full h-full flex flex-col gap-0 overflow-hidden"
      style={{ backgroundColor: '#0A0E1A', fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header do painel */}
      <div
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center gap-2">
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Painel Operacional
          </span>
        </div>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
          F1000 · Betim/MG
        </span>
      </div>

      <div className="flex-1 px-6 py-5 flex flex-col gap-5 overflow-hidden">

        {/* Linha topo: radial + métrica destaque */}
        <div className="flex gap-4 items-center">

          {/* Radial — 97% no prazo */}
          <div className="flex flex-col items-center gap-1" style={{ minWidth: '100px' }}>
            <svg width="96" height="96" viewBox="0 0 96 96">
              {/* Trilha */}
              <circle
                cx="48" cy="48" r={R}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="7"
              />
              {/* Progresso */}
              <motion.circle
                cx="48" cy="48" r={R}
                fill="none"
                stroke="#053E83"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                initial={{ strokeDashoffset: CIRC }}
                whileInView={{ strokeDashoffset: OFFSET }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                viewport={{ once: true }}
                style={{ transform: 'rotate(-90deg)', transformOrigin: '48px 48px' }}
              />
              {/* Label central */}
              <text x="48" y="44" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="700" fontFamily="Inter">97%</text>
              <text x="48" y="57" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="Inter">NO PRAZO</text>
            </svg>
          </div>

          {/* Métricas rápidas em coluna */}
          <div className="flex flex-col gap-2 flex-1">
            {[
              { v: '700 t',    l: 'Mov. por mês' },
              { v: '100+',     l: 'Clientes ativos' },
              { v: '13 anos',  l: 'De operação' },
            ].map(({ v, l }) => (
              <div
                key={l}
                className="flex items-center justify-between px-3 py-2 rounded-[6px]"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>{v}</span>
                <span style={{ fontSize: '10px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico de barras — desempenho mensal */}
        <div
          className="rounded-[10px] p-4 flex flex-col gap-3"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              Entregas no prazo — últimos 6 meses
            </span>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.25)' }}>%</span>
          </div>

          <div className="flex items-end gap-2" style={{ height: `${BAR_H + 20}px` }}>
            {MONTHLY.map(({ month, value }, i) => {
              const fillH = Math.round(((value - MIN) / RANGE) * BAR_H)
              return (
                <div key={month} className="flex-1 flex flex-col items-center gap-1">
                  <span style={{ fontSize: '9px', color: '#fff', fontWeight: 600, opacity: 0.7 }}>{value}%</span>
                  <div className="w-full flex flex-col justify-end" style={{ height: `${BAR_H}px` }}>
                    <motion.div
                      style={{ backgroundColor: i === MONTHLY.length - 1 ? '#053E83' : 'rgba(5,62,131,0.45)', borderRadius: '3px 3px 0 0', width: '100%' }}
                      initial={{ height: 0 }}
                      whileInView={{ height: fillH }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>{month}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rotas recorrentes — barras horizontais */}
        <div
          className="rounded-[10px] p-4 flex flex-col gap-3"
          style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
            Eixos de maior volume
          </span>
          <div className="flex flex-col gap-2">
            {ROUTES.map(({ label, pct }, i) => (
              <div key={label} className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>{label}</span>
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)' }}>{pct}%</span>
                </div>
                <div style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', backgroundColor: '#1E5BB8', borderRadius: '2px' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
