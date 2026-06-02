import React from 'react'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'ghost' | 'ghost-white'
  href: string
  children: React.ReactNode
  fullWidth?: boolean
}

export function Button({ variant = 'primary', href, children, fullWidth, className = '', ...props }: ButtonProps) {
  const cls = variant === 'primary' ? 'btn-primary' : variant === 'ghost-white' ? 'btn-ghost-white' : 'btn-ghost'
  return (
    <a
      href={href}
      className={`${cls} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
