import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

interface HeroImage {
  src: string
  alt: string
  objectPosition?: string
}

const HERO_IMAGES: HeroImage[] = [
  { src: '/imagens-hero/scania-deitado.webp',   alt: 'Caminhão Scania em operação F1000 Transportes',        objectPosition: 'center' },
  { src: '/imagens-hero/iveco-deitado.webp',    alt: 'Caminhão Iveco em operação F1000 Transportes',         objectPosition: 'center' },
  { src: '/imagens-hero/mercedes-deitado.webp', alt: 'Caminhão Mercedes-Benz em operação F1000 Transportes', objectPosition: 'center' },
  { src: '/imagens-hero/volvo-deitado.webp',    alt: 'Caminhão Volvo em operação F1000 Transportes',         objectPosition: 'center' },
  { src: '/imagens-hero/vw-deitado.webp',       alt: 'Caminhão Volkswagen em operação F1000 Transportes',    objectPosition: 'center' },
]

const SLIDE_DURATION_MS = 6000
const CROSSFADE_DURATION_S = 1.6
const SCALE_DURATION_S = 7

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    HERO_IMAGES.forEach(({ src }) => {
      const img = new Image()
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

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{
            opacity: { duration: CROSSFADE_DURATION_S, ease: [0.4, 0, 0.2, 1] },
            scale:   { duration: SCALE_DURATION_S, ease: 'linear' },
          }}
          className="absolute inset-0 h-full w-full"
        >
          <img
            src={HERO_IMAGES[index].src}
            alt={HERO_IMAGES[index].alt}
            className="h-full w-full object-cover"
            style={{ objectPosition: HERO_IMAGES[index].objectPosition ?? 'center' }}
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
