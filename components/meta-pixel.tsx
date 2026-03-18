'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialize fbq only once
    if ((window as any).fbq && (window as any).fbq.loaded) return

    // Create the fbq function stub
    function fbq(...args: any[]) {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args as any)
      } else {
        fbq.queue.push(args)
      }
    }

    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'

    // Attach to window immediately
    ;(window as any).fbq = fbq

    // Now it's safe to call fbq
    fbq('init', '797473043399003')
    fbq('track', 'PageView')

    // Load the Facebook script
    if (!document.querySelector('script[src*="connect.facebook.net"]')) {
      const script = document.createElement('script')
      script.async = true
      script.defer = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)
    }
  }, [])

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}

// Track Purchase events
export function trackPurchase(data: {
  currency?: string
  value: number
  content_name?: string
  content_ids?: string[]
  num_items?: number
}) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'Purchase', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_ids: data.content_ids,
      num_items: data.num_items,
    })
  }
}

// Track Add to Cart events
export function trackAddToCart(data: {
  currency?: string
  value: number
  content_name?: string
  content_id?: string
}) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'AddToCart', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
    })
  }
}

// Track View Content events
export function trackViewContent(data: {
  currency?: string
  value: number
  content_name?: string
  content_id?: string
  content_type?: string
}) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'ViewContent', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
      content_type: data.content_type || 'product',
    })
  }
}
