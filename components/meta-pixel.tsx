'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq?: any
  }
}

export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ((window as any).fbq?.loaded) return

    // Initialize fbq stub
    window.fbq = function (...args: any[]) {
      if (window.fbq.callMethod) {
        window.fbq.callMethod.apply(window.fbq, args)
      } else {
        window.fbq.queue.push(args)
      }
    }
    window.fbq.queue = []
    window.fbq.loaded = true
    window.fbq.version = '2.0'

    // Call init and track
    window.fbq('init', '797473043399003')
    window.fbq('track', 'PageView')

    // Load script
    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
  }, [])

  useEffect(() => {
    if (window?.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}

export function trackPurchase(data: {
  currency?: string
  value: number
  content_name?: string
  content_ids?: string[]
  num_items?: number
}) {
  if (window?.fbq) {
    window.fbq('track', 'Purchase', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_ids: data.content_ids,
      num_items: data.num_items,
    })
  }
}

export function trackAddToCart(data: {
  currency?: string
  value: number
  content_name?: string
  content_id?: string
}) {
  if (window?.fbq) {
    window.fbq('track', 'AddToCart', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
    })
  }
}

export function trackViewContent(data: {
  currency?: string
  value: number
  content_name?: string
  content_id?: string
  content_type?: string
}) {
  if (window?.fbq) {
    window.fbq('track', 'ViewContent', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
      content_type: data.content_type || 'product',
    })
  }
}
