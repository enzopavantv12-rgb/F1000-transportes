import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface HeroImage {
  src: string
  alt: string
  objectPosition?: string
}

const HERO_IMAGES: HeroImage[] = [
  { src: '/imagens-hero/scania.atualizado.horizontal.webp',      alt: 'Caminhão Scania em operação F1000 Transportes',        objectPosition: 'right center' },
  { src: '/imagens-hero/iveco.atualizado%20horizontal.webp',     alt: 'Caminhão Iveco em operação F1000 Transportes',         objectPosition: 'right center' },
  { src: '/imagens-hero/mercedes.atualizado%20horizontal.webp',  alt: 'Caminhão Mercedes-Benz em operação F1000 Transportes', objectPosition: 'right center' },
  { src: '/imagens-hero/volvo.atualizado%20horizontal.webp',     alt: 'Caminhão Volvo em operação F1000 Transportes',         objectPosition: 'right center' },
  { src: '/imagens-hero/vw.atualizado%20horizontal.webp',        alt: 'Caminhão Volkswagen em operação F1000 Transportes',    objectPosition: 'right center' },
]

const SLIDE_DURATION_MS = 6000
const CROSSFADE_DURATION_S = 1.6
const SCALE_DURATION_S = 7

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState<Set<string>>(() => new Set())
  const reduceMotion = useReducedMotion()

  // Preload all images; mark each ready when decoded
  useEffect(() => {
    HERO_IMAGES.forEach(({ src }) => {
      const img = new Image()
      img.onload = () => setLoaded(prev => new Set([...prev, src]))
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % HERO_IMAGES.length)
    }, SLIDE_DURATION_MS)
    return () => clearInterval(interval)
  }, [reduceMotion])

  const nextIndex = (index + 1) % HERO_IMAGES.length
  const currentSrc = HERO_IMAGES[index].src

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Pre-render next slide image to prime browser decode pipeline before transition */}
      <img
        src={HERO_IMAGES[nextIndex].src}
        alt=""
        aria-hidden="true"
        className="sr-only"
        decoding="async"
        fetchPriority="low"
      />
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: loaded.has(currentSrc) ? 1 : 0, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: CROSSFADE_DURATION_S, ease: [0.4, 0, 0.2, 1] },
            scale:   { duration: SCALE_DURATION_S, ease: 'linear' },
          }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={currentSrc}
            alt={HERO_IMAGES[index].alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: HERO_IMAGES[index].objectPosition ?? 'center' }}
            loading="eager"
            decoding={index === 0 ? 'sync' : 'async'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            onLoad={() => setLoaded(prev => new Set([...prev, currentSrc]))}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
