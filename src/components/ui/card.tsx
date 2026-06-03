import * as React from 'react'

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', style, ...props }, ref) => (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.08)',
        backgroundColor: 'var(--color-graphite)',
        color: '#fff',
        ...style,
      }}
      {...props}
    />
  ),
)
Card.displayName = 'Card'

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 ${className}`} {...props} />
  ),
)
CardContent.displayName = 'CardContent'
