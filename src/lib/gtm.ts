type GtmPayload = {
  event: string
  form_id: string
  [key: string]: unknown
}

export function gtmPush(payload: GtmPayload) {
  const w = window as Window & { dataLayer?: GtmPayload[] }
  w.dataLayer = w.dataLayer ?? []
  w.dataLayer.push(payload)
}
