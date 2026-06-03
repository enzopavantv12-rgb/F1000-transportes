interface BackgroundGridProps {
  variant?: 'light' | 'dark'
  size?: number
  dashLength?: number
  dashGap?: number
}

export function BackgroundGrid({
  variant = 'light',
  size = 28,
  dashLength = 3,
  dashGap = 6,
}: BackgroundGridProps) {
  const lineColor = variant === 'light'
    ? 'rgba(110, 100, 85, 0.55)'
    : 'rgba(255, 255, 255, 0.14)'

  const totalCell = dashLength + dashGap

  const dashMask = `
    repeating-linear-gradient(
      to right,
      black 0px, black ${dashLength}px,
      transparent ${dashLength}px, transparent ${totalCell}px
    ),
    repeating-linear-gradient(
      to bottom,
      black 0px, black ${dashLength}px,
      transparent ${dashLength}px, transparent ${totalCell}px
    )
  `

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        maskImage: dashMask,
        WebkitMaskImage: dashMask,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    />
  )
}
