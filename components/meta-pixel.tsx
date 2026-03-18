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

    // Declare fbq with types
    const w = window as any
    
    // Only init once
    if (w.fbq && w.fbq.loaded) return

    // Create stub before loading external script
    const stub = function (...args: any[]) {
      if (stub.callMethod) {
        stub.callMethod.apply(stub, args)
      } else {
        stub.queue.push(args)
      }
    }

    stub.queue = []
    stub.loaded = true
    stub.version = '2.0'

    // Set on window BEFORE calling
    w.fbq = stub

    // Now call init and track
    w.fbq('init', '797473043399003')
    w.fbq('track', 'PageView')

    // Load the script
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    script.nonce = ''
    document.head.appendChild(script)
  }, [])

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}

// Track Purchase
export function trackPurchase(data: {
  currency?: string
  value: number
  content_name?: string
  content_ids?: string[]
  num_items?: number
}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_ids: data.content_ids,
      num_items: data.num_items,
    })
  }
}

// Track Add to Cart
export function trackAddToCart(data: {
  currency?: string
  value: number
  content_name?: string
  content_id?: string
}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
    })
  }
}

// Track View Content
export function trackViewContent(data: {
  currency?: string
  value: number
  content_name?: string
  content_id?: string
  content_type?: string
}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
      content_type: data.content_type || 'product',
    })
  }
}
