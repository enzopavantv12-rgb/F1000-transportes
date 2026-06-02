import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue':   '#053E83',
        'deep-black':  '#000000',
        'ink':         '#0A0A0A',
        'graphite':    '#1A1F2E',
        'steel':       '#6B7280',
        'mist':        '#D4D7DD',
        'paper':       '#F5F2EC',
        'pure-white':  '#FFFFFF',
        'accent-blue': '#1E5BB8',
      },
      fontFamily: {
        display:   ['Inter', 'sans-serif'],
        editorial: ['Fraunces', 'serif'],
        fraunces:  ['Fraunces', 'serif'],
        inter:     ['Inter', 'sans-serif'],
        sans:      ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero':    ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'card-h3': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body':    ['1.0625rem', { lineHeight: '1.65' }],
        'small':   ['0.9375rem', { lineHeight: '1.6' }],
        'micro':   ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        DEFAULT: '2px',
        'sm': '2px',
        'md': '4px',
        'pill': '9999px',
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
} satisfies Config
