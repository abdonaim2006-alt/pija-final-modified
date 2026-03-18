'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    // Initialize Meta Pixel
    if (typeof window !== 'undefined') {
      ;(window as any).fbq('init', '797473043399003')
      ;(window as any).fbq('track', 'PageView')
    }
  }, [])

  // Track page views on route changes
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'PageView')
    }
  }, [pathname])

  // Inject Meta Pixel script
  useEffect(() => {
    if (typeof window !== 'undefined' && !(window as any).fbq) {
      // Create fbq function stub
      ;(window as any).fbq = function (...args: any[]) {
        if ((window as any).fbq.callMethod) {
          ;(window as any).fbq.callMethod.apply((window as any).fbq, args)
        } else {
          ;(window as any).fbq.queue.push(args)
        }
      }
      ;(window as any).fbq.push = (window as any).fbq
      ;(window as any).fbq.loaded = true
      ;(window as any).fbq.version = '2.0'
      ;(window as any).fbq.queue = []

      // Create and inject script
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      script.async = true
      document.head.appendChild(script)

      // Initialize after script loads
      script.onload = () => {
        ;(window as any).fbq('init', '797473043399003')
        ;(window as any).fbq('track', 'PageView')
      }
    }
  }, [])

  return null
}

// Utility function to track Purchase events
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

// Utility function to track AddToCart events
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

// Utility function to track ViewContent events
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
