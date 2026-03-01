'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-serif font-bold">Pijama</h3>
            <p className="text-sm opacity-80">
              Confort premium pour votre repos.
            </p>
          </div>

          {/* Produits */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Produits</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/collections" className="hover:opacity-80 transition-opacity">
                Tous les Pyjamas
              </Link>
              <Link href="/collections" className="hover:opacity-80 transition-opacity">
                Nouveautes
              </Link>
              <Link href="/collections" className="hover:opacity-80 transition-opacity">
                Bestsellers
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Support</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="hover:opacity-80 transition-opacity">
                A Propos
              </Link>
              <Link href="/contact" className="hover:opacity-80 transition-opacity">
                Contact
              </Link>
              <Link href="/faq" className="hover:opacity-80 transition-opacity">
                FAQ
              </Link>
              <Link href="/policies" className="hover:opacity-80 transition-opacity">
                Politiques
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:contact@pijama.com"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                contact@pijama.com
              </a>
              <a
                href="https://wa.me/33652768993"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; 2024 Pijama. Tous les droits reserves.</p>
            <div className="flex gap-6">
              <Link href="/policies" className="hover:opacity-80 transition-opacity">
                Confidentialite
              </Link>
              <Link href="/policies" className="hover:opacity-80 transition-opacity">
                Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
