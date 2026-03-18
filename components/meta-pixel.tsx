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

  // Load Meta Pixel script and initialize
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Avoid duplicate initialization
    if ((window as any).fbq) return

    // Create fbq stub before script loads
    const fbq = function (...args: any[]) {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, args)
      } else {
        fbq.queue.push(args)
      }
    }
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'

    // Assign to window
    ;(window as any).fbq = fbq

    // Initialize pixel with ID
    ;(window as any).fbq('init', '797473043399003')
    ;(window as any).fbq('track', 'PageView')

    // Load Facebook's pixel script
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)

    return () => {
      // Cleanup not needed for pixels
    }
  }, [])

  // Track page views when route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'PageView')
    }
  }, [pathname])

  return null
}

// Export tracking functions
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
