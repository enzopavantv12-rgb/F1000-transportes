import { InfiniteSlider } from './infinite-slider'

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[]
}

export function LogoCloud({ className = '', logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      role="region"
      aria-label="Clientes atendidos pela F1000 Transportes"
      className={`py-8 ${className}`}
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <InfiniteSlider gap={80} duration={45} durationOnHover={90}>
        {logos.map(logo => (
          <div
            key={`logo-${logo.alt}`}
            className="flex items-center justify-center py-3 px-2"
            style={{ minWidth: '120px' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="pointer-events-auto select-none object-contain"
              style={{
                height: '44px',
                width: 'auto',
                maxWidth: '160px',
                display: 'block',
                transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1), filter 350ms ease, opacity 350ms ease',
                transformOrigin: 'center center',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLImageElement
                el.style.transform = 'scale(1.28)'
                el.style.filter = 'drop-shadow(0 4px 16px rgba(5,62,131,0.18))'
                el.style.opacity = '1'
                el.style.zIndex = '10'
                el.style.position = 'relative'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLImageElement
                el.style.transform = 'scale(1)'
                el.style.filter = 'none'
                el.style.opacity = '1'
                el.style.zIndex = ''
                el.style.position = ''
              }}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  )
}
