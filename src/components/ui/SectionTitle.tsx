import { motion } from 'framer-motion'
import { FADE_UP } from '../../lib/constants'
import { Eyebrow } from './Eyebrow'

interface SectionTitleProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
  dark?: boolean
  className?: string
}

export function SectionTitle({ eyebrow, title, subtitle, centered, dark, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : ''} ${className}`}>
      <motion.div variants={FADE_UP}>
        <Eyebrow style={dark ? { color: 'rgba(255,255,255,0.5)' } : undefined}>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.div variants={FADE_UP} className="flex flex-col gap-3">
        <span className="accent-line" style={centered ? { margin: '0 auto' } : undefined} />
        <h2
          className="text-section"
          style={{ color: dark ? 'var(--color-pure-white)' : 'var(--color-deep-black)' }}
        >
          {title}
        </h2>
      </motion.div>
      {subtitle && (
        <motion.p
          variants={FADE_UP}
          className="text-body"
          style={{
            color: dark ? 'var(--color-mist)' : 'var(--color-steel)',
            maxWidth: '540px',
            fontFamily: 'Inter',
            fontSize: '1.0625rem',
            lineHeight: '1.65',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
