'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { Star, ShoppingBag } from 'lucide-react'

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Tous nos Produits
            </h1>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Découvrez notre collection complète de 8 pyjamas premium pour chaque style et saison.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-border cursor-pointer">
                    {/* Image Container */}
                    <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/60 overflow-hidden">
                      <img
                        src={`/images/product-${product.id}.jpg`}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {product.badge && (
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary">
                            {product.badge === 'bestseller' ? 'Bestseller' : product.badge === 'new' ? 'Nouveau' : 'Solde'}
                          </span>
                        </div>
                      )}

                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">Rupture de stock</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4 flex flex-col flex-1">
                      <h3 className="font-serif font-bold text-sm sm:text-base text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product.rating}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
                        {product.description}
                      </p>

                      <div className="mb-3">
                        <div className="flex gap-1 flex-wrap">
                          {product.colors.slice(0, 2).map((color) => (
                            <span
                              key={color}
                              className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                            >
                              {color}
                            </span>
                          ))}
                          {product.colors.length > 2 && (
                            <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                              +{product.colors.length - 2}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-baseline gap-1">
                          <span className="text-base sm:text-lg font-bold text-foreground">
                            {(product.salePrice || product.price).toFixed(2)} DH
                          </span>
                          {product.salePrice && (
                            <span className="text-xs line-through text-muted-foreground">
                              {product.price.toFixed(2)} DH
                            </span>
                          )}
                        </div>
                        <Button size="sm" disabled={!product.inStock} className="h-8">
                          <ShoppingBag className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Vous avez besoin de conseils?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Contactez-nous sur WhatsApp pour des recommandations personnalisées
            </p>
            <a
              href="https://wa.me/33652768993?text=Bonjour, j'aimerais des conseils sur vos pyjamas Pijama!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="h-10 sm:h-12 text-sm sm:text-base">
                Discuter sur WhatsApp
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
