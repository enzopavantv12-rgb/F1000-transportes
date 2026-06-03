import React from 'react'
import { motion } from 'framer-motion'
import { BackgroundGrid } from './BackgroundGrid'

interface SectionWithMockupProps {
  title: string | React.ReactNode
  description: string | React.ReactNode
  primaryImageSrc?: string
  primaryContent?: React.ReactNode
  secondaryImageSrc: string
  reverseLayout?: boolean
  light?: boolean
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 50 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  primaryImageSrc,
  primaryContent,
  secondaryImageSrc,
  reverseLayout = false,
  light = false,
}) => {
  const bg = light ? '#F5F2EC' : '#000000'
  const layoutClasses = reverseLayout ? 'md:grid-cols-2 md:grid-flow-col-dense' : 'md:grid-cols-2'
  const textOrderClass  = reverseLayout ? 'md:col-start-2' : ''
  const imageOrderClass = reverseLayout ? 'md:col-start-1' : ''

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      {light && <BackgroundGrid variant="light" />}
      <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Texto */}
          <motion.div
            className={`flex flex-col items-start gap-5 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(2rem,4vw,3.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
                color: light ? '#000' : '#fff',
                fontFeatureSettings: '"ss01"',
              }}
            >
              {title}
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#053E83' }} />
            <div
              style={{
                fontFamily: 'Inter',
                fontSize: '1.0625rem',
                lineHeight: 1.65,
                color: light ? '#6B7280' : 'rgba(255,255,255,0.6)',
              }}
            >
              {description}
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}
            variants={itemVariants}
          >
            {/* Card de fundo — decorativo */}
            <motion.div
              className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] rounded-[24px] z-0"
              style={{
                backgroundColor: light ? '#E8E4DC' : '#090909',
                top: reverseLayout ? 'auto' : '10%',
                bottom: reverseLayout ? '10%' : 'auto',
                left: reverseLayout ? 'auto' : '-16%',
                right: reverseLayout ? '-16%' : 'auto',
                filter: 'blur(2px)',
              }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? -20 : -30 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div
                className="relative w-full h-full bg-cover bg-center rounded-[24px]"
                style={{ backgroundImage: `url(${secondaryImageSrc})`, opacity: 0.45 }}
              />
            </motion.div>

            {/* Card principal */}
            <motion.div
              className="relative w-full h-[405px] md:h-[560px] rounded-[24px] z-10 overflow-hidden"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
              initial={{ y: 0 }}
              whileInView={{ y: reverseLayout ? 20 : 30 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              {primaryContent ? (
                <div className="w-full h-full">{primaryContent}</div>
              ) : primaryImageSrc ? (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${primaryImageSrc})` }}
                />
              ) : null}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divisor inferior sutil */}
      <div
        className="absolute w-full h-px bottom-0 left-0 z-0"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)' }}
      />
    </section>
  )
}

export default SectionWithMockup
