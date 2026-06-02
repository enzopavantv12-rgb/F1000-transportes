import React from 'react'

interface EyebrowProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Eyebrow({ children, className = '', style }: EyebrowProps) {
  return (
    <p className={`text-eyebrow ${className}`} style={{ color: 'var(--color-deep-blue)', ...style }}>
      {children}
    </p>
  )
}
