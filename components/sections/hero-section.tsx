'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-balance leading-tight">
              Les Pyjamas les Plus Confortables
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 text-balance max-w-3xl mx-auto">
              Dormez comme jamais avec nos pyjamas premium en tissu de haute qualité
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/collections">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Découvrir
              </Button>
            </Link>
            <a href="https://wa.me/212XXXXXXXXX" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400">Scroll down</p>
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
