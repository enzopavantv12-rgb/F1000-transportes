import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { BackgroundGrid } from './ui/BackgroundGrid'
import { Eyebrow } from './ui/Eyebrow'
import { FADE_UP, STAGGER, EMAIL } from '../lib/constants'

const QUESTIONS = [
  {
    q: 'Qual o peso mínimo para frete?',
    a: 'Operamos cargas a partir de 100 kg. Abaixo disso, não atendemos.',
  },
  {
    q: 'Em quanto tempo recebo uma cotação?',
    a: 'Em até 15 minutos no horário comercial (08h–18h, segunda a quinta; 08h–17h, sexta). Cada caso é analisado individualmente.',
  },
  {
    q: 'A F1000 atende minha região?',
    a: 'Atendemos todo o território nacional — Sul, Sudeste, Centro-Oeste, Nordeste e pontos estratégicos do Norte. Algumas localidades no Amazonas exigem confirmação prévia.',
  },
  {
    q: 'Como funciona o seguro da carga?',
    a: 'Trabalhamos com RCTR-C, RCF-DC e RCV ativos. O seguro está incluso na operação, sem custo extra para o embarcador, dentro dos limites contratuais padrão.',
  },
  {
    q: 'Vocês emitem CT-e e MDF-e?',
    a: 'Sim. Toda operação é 100% documentada com CT-e e MDF-e emitidos antes do embarque. RNTRC ativo na ANTT.',
  },
  {
    q: 'Vocês fazem mudança residencial?',
    a: 'Não. A F1000 opera exclusivamente carga industrial e empresarial — fracionada e dedicada. Não atendemos mudanças, motofretes ou entregas residenciais.',
  },
]

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%' }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '1.0625rem',
            color: isOpen ? '#FFFFFF' : 'rgba(255,255,255,0.8)',
            lineHeight: 1.4,
            transition: 'color 200ms',
          }}
        >
          {q}
        </span>
        <span style={{ flexShrink: 0, color: 'var(--color-accent-blue)' }}>
          {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)',
                paddingBottom: '20px',
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="section-padding relative"
      style={{ backgroundColor: 'var(--color-deep-black)' }}
    >
      <BackgroundGrid variant="dark" />
      <div className="container-main grid md:grid-cols-12 gap-12 md:gap-16 relative z-10">

        {/* Coluna esquerda */}
        <motion.div
          className="md:col-span-4 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          variants={STAGGER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={FADE_UP}>
            <Eyebrow style={{ color: 'rgba(255,255,255,0.45)' }}>DÚVIDAS FREQUENTES</Eyebrow>
          </motion.div>
          <motion.div variants={FADE_UP} className="flex flex-col gap-3">
            <span className="accent-line" />
            <h2 className="text-section" style={{ color: 'var(--color-pure-white)' }}>
              Antes de pedir cotação.
            </h2>
          </motion.div>
          <motion.p
            variants={FADE_UP}
            style={{ fontFamily: 'Inter', fontSize: '1.0625rem', lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}
          >
            Respondendo as perguntas que mais recebemos por WhatsApp e e-mail. Se a sua dúvida não estiver aqui, fale direto com o comercial.
          </motion.p>
          <motion.a
            variants={FADE_UP}
            href={`mailto:${EMAIL}`}
            style={{
              fontFamily: 'Inter',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: 'var(--color-accent-blue)',
              textDecoration: 'none',
              transition: 'color 150ms',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#FFFFFF')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent-blue)')}
          >
            Falar com o comercial →
          </motion.a>
        </motion.div>

        {/* Acordeão */}
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
        </motion.div>

      </div>
    </section>
  )
}
