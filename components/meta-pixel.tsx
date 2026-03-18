'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    fbq?: any
    _fbq?: any
  }
}

export function MetaPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Official Facebook Pixel Code
    ;(function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = true
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', 'fbq')

    // Initialize Pixel ID and track PageView
    if (window.fbq) {
      window.fbq('init', '797473043399003')
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
