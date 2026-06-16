declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    __f1000CotacaoEnviado?: boolean
    __f1000MotoristaEnviado?: boolean
  }
}

export {}
