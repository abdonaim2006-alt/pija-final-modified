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

    // Initialize fbq if not already done
    if (!window.fbq) {
      // Load the Facebook Pixel script
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)

      // Initialize the pixel
      ;(window as any).fbq = function(this: any) {
        (window as any).fbq.callMethod
          ? (window as any).fbq.callMethod.apply((window as any).fbq, arguments)
          : (window as any).fbq.queue.push(arguments)
      }
      ;(window as any).fbq.push = (window as any).fbq
      ;(window as any).fbq.loaded = true
      ;(window as any).fbq.version = '2.0'
      ;(window as any).fbq.queue = []
    }

    // Initialize the pixel with the ID
    if (window.fbq) {
      window.fbq('init', '797473043399003')
      // Track PageView for every route change
      window.fbq('track', 'PageView')
    }

    // Add noscript fallback
    if (!document.getElementById('facebook-pixel-noscript')) {
      const noscript = document.createElement('noscript')
      noscript.id = 'facebook-pixel-noscript'
      const img = document.createElement('img')
      img.height = 1
      img.width = 1
      img.style.display = 'none'
      img.src = 'https://www.facebook.com/tr?id=797473043399003&ev=PageView&noscript=1'
      noscript.appendChild(img)
      document.body.appendChild(noscript)
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
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
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
    (window as any).fbq('track', 'AddToCart', {
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
    (window as any).fbq('track', 'ViewContent', {
      currency: data.currency || 'MAD',
      value: data.value,
      content_name: data.content_name,
      content_id: data.content_id,
      content_type: data.content_type || 'product',
    })
  }
}
