export const WA_BASE = 'https://wa.me/5531973495550'

export const WA_COTACAO = `${WA_BASE}?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20F1000%20e%20gostaria%20de%20cotar%20um%20frete.`

export const WA_URGENTE = `${WA_BASE}?text=Ol%C3%A1%2C%20preciso%20de%20um%20frete%20urgente.`

export const EMAIL = 'comercial@f1000transportes.com'

export const PHONE_PRIMARY = '(31) 97349-5550'
export const PHONE_SECONDARY = '(31) 99156-9999'

export const ADDRESS = {
  street: 'Av. Engenheiro Darcy Nogueira do Pinho, 2973',
  district: 'São Luiz',
  city: 'Betim/MG',
  cep: '32.675-585',
}

export const HOURS = 'Seg–Qui 08h–18h · Sex 08h–17h'

export const INSTAGRAM = 'https://instagram.com/f1000transportesltda'
export const LINKEDIN = 'https://linkedin.com/company/f1000-transportes'

export const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
