'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { PajamaOrderForm } from '@/components/pajama-order-form'

const collectionInfo: Record<string, { name: string; description: string; icon: string; color: string }> = {
  ete: {
    name: 'Collection Été',
    description: 'Pyjamas légers et respirants parfaits pour les nuits chaudes',
    icon: '☀️',
    color: 'bg-primary/10',
  },
  hiver: {
    name: 'Collection Hiver',
    description: 'Pyjamas chauds et douillets pour les froides nuits d\'hiver',
    icon: '❄️',
    color: 'bg-primary/10',
  },
  premium: {
    name: 'Collection Premium',
    description: 'Pyjamas haut de gamme en soie et coton égyptien',
    icon: '👑',
    color: 'bg-primary/10',
  },
  confort: {
    name: 'Collection Confort',
    description: 'Pyjamas écologiques en bambou pour un confort durable',
    icon: '🌿',
    color: 'bg-primary/10',
  },
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const [showForm, setShowForm] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border"
    >
      {/* Product Image */}
      <div className="aspect-square bg-gradient-to-br from-muted to-muted-foreground flex items-center justify-center text-muted-foreground relative overflow-hidden">
        <div className="absolute top-3 right-3">
          {product.badge === 'bestseller' && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Bestseller
            </span>
          )}
          {product.badge === 'sale' && (
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
              Solde -22%
            </span>
          )}
          {product.badge === 'new' && (
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Nouveau
            </span>
          )}
        </div>
        <p className="text-6xl">{product.image}</p>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-serif font-bold text-foreground line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-foreground font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        {/* Price */}
        <div className="space-y-1">
          {product.salePrice ? (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">€{product.salePrice.toFixed(2)}</span>
              <span className="text-sm line-through text-muted-foreground">€{product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="text-2xl font-bold text-primary">{product.price.toFixed(2)}DH</span>
          )}
        </div>

        {/* Colors */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-foreground">Couleurs:</label>
          <div className="flex gap-2 flex-wrap">
            {product.colors.map((color) => (
              <span key={color} className="text-xs bg-muted px-2 py-1 rounded">
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2 pt-3 border-t border-border">
          <Link href={`/product/${product.id}`} className="block">
            <Button variant="outline" className="w-full">
              Voir détails
            </Button>
          </Link>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="w-full cta-primary"
          >
            {showForm ? 'Fermer' : 'Acheter'}
          </Button>
        </div>

        {/* Order Form */}
        {showForm && (
          <div className="pt-4 border-t border-border">
            <PajamaOrderForm
              selectedModel={product.name}
              selectedSize={product.sizes[0]}
              selectedColor={product.colors[0]}
              quantity={1}
              unitPrice={product.salePrice || product.price}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function CollectionPage() {
  const params = useParams()
  const collectionId = params.id as string

  // Map collection IDs to product collection field names
  const collectionMap: Record<string, string> = {
    ete: 'été',
    hiver: 'hiver',
    premium: 'premium',
    confort: 'confort',
  }

  const collection = collectionInfo[collectionId]

  if (!collection) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Collection introuvable</h1>
            <Link href="/collections">
              <Button className="cta-primary">Retour aux collections</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const collectionProducts = products.filter((p) => p.collection === collectionMap[collectionId])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <section className="py-6 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/collections" className="flex items-center gap-2 text-primary hover:underline text-sm">
              <ChevronLeft className="w-4 h-4" />
              Retour aux collections
            </Link>
          </div>
        </section>

        {/* Collection Header */}
        <section className="py-12 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-6 mb-6"
            >
              <span className="text-6xl">{collection.icon}</span>
              <div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold">
                  {collection.name}
                </h1>
                <p className="text-lg text-gray-300 mt-2">{collection.description}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {collectionProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {collectionProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-6">Aucun produit dans cette collection pour le moment.</p>
                <Link href="/collections">
                  <Button className="cta-primary">Explorer d'autres collections</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        {collectionProducts.length > 0 && (
          <section className="py-16 bg-primary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-serif font-bold text-foreground">
                  Des questions? Contactez-nous
                </h2>
                <a
                  href="https://wa.me/33652768993?text=Bonjour, j'aimerais plus d'infos sur cette collection de pyjamas!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="cta-primary h-12">
                    Discuter sur WhatsApp
                  </Button>
                </a>
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
