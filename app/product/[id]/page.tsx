'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { useParams } from 'next/navigation'
import { ChevronLeft, Star } from 'lucide-react'
import { SingleProductOrderForm } from '@/components/single-product-order-form'
import { products } from '@/lib/products'

function ProductContent() {
  const params = useParams()
  const productId = params?.id as string
  const [product, setProduct] = useState<typeof products[0] | null>(null)
  const [mounted, setMounted] = useState(false)
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [addedToCart, setAddedToCart] = useState(false)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Map colors to image suffixes
  const colorImageMap: { [key: string]: string } = {
   'Rose': '-rose',
    'beige': '-beige',
    'vert': '-vert',
    'bleu': '-bleu',
    'blanc': '-blanc',
    'gris': '-gris',
  }

  useEffect(() => {
    setMounted(true)
    if (productId) {
      const found = products.find(p => p.id === productId)
      if (found) {
        setProduct(found)
        setSelectedSize(found.sizes[0])
        setSelectedColor(found.colors[0])
      }
    }
  }, [productId])

  if (!mounted || !product) {
    return (
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-foreground">
              {mounted ? 'Produit non trouvé' : 'Chargement...'}
            </h1>
            <Link href="/collections">
              <Button className="mt-4">Retour aux produits</Button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      quantity,
      size: selectedSize,
      color: selectedColor,
      image: `/images/product-${product.id}${colorImageMap[selectedColor] || ''}.jpg`,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  // Get the image URL based on selected color
  const getImageUrl = () => {
    if (!product) return '/images/placeholder.jpg'
    const colorSuffix = colorImageMap[selectedColor] || ''
    return `/images/product-${product.id}${colorSuffix}.jpg`
  }

  // Build gallery images array: color variants + detail images
  const getGalleryImages = () => {
    if (!product) return []
    const images: { src: string; type: 'color' | 'detail'; color?: string }[] = []
    
    // Add color variant images
    product.colors.forEach(color => {
      const colorSuffix = colorImageMap[color] || ''
      images.push({
        src: `/images/product-${product.id}${colorSuffix}.jpg`,
        type: 'color',
        color: color
      })
    })
    
    // Add detail images
    if (product.details) {
      images.push({ src: product.details.image1, type: 'detail' })
      images.push({ src: product.details.image2, type: 'detail' })
    }
    
    return images
  }

  const galleryImages = getGalleryImages()

  const handleThumbnailClick = (index: number) => {
  setActiveImageIndex(index)
  const image = galleryImages[index]
  if (image.type === 'color' && image.color) {
    setSelectedColor(image.color)
  }
  // Les details s'affichent simplement dans l'image principale
}

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
    // Find the index of this color in gallery
    const colorIndex = galleryImages.findIndex(img => img.type === 'color' && img.color === color)
    if (colorIndex !== -1) {
      setActiveImageIndex(colorIndex)
    }
  }

return (
  <main className="flex-1">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/collections" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
          <ChevronLeft className="w-4 h-4" />
          Retour aux produits
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Main Image */}
            <div className="w-full aspect-square bg-gradient-to-br from-muted to-muted-foreground rounded-lg flex items-center justify-center text-muted-foreground overflow-hidden">
              <img
                key={activeImageIndex}
                src={galleryImages[activeImageIndex]?.src || getImageUrl()}
                alt={`${product.name} - ${selectedColor}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.style.display = 'none'
                }}
              />
            </div>

            {/* Scrollable Thumbnails */}
            <div className="w-full overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                      activeImageIndex === index
                        ? 'border-primary ring-2 ring-primary/30'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.type === 'color' ? `Couleur ${image.color}` : `Détail ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} avis)
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-bold text-primary">
                  {(product.salePrice || product.price).toFixed(2)} DH
                </p>
                {product.salePrice && (
                  <p className="text-xl line-through text-muted-foreground">
                    {product.price.toFixed(2)} DH
                  </p>
                )}
              </div>
            </div>

            <p className="text-muted-foreground text-lg">
              {product.description}
            </p>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Taille
              </label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 rounded-md border-2 transition-colors ${selectedSize === size
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-card text-foreground hover:border-primary'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Couleur
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => {
                  const colorClasses: { [key: string]: string } = {
                     'Rose': 'bg-pink-400 border-pink-500',
  'beige': 'bg-[#f5f5dc] border-[#e6e0c8]',
  'vert': 'bg-green-400 border-green-500',
  'bleu': 'bg-blue-400 border-blue-500',
  'blanc': 'bg-white border-gray-200',
  'gris': 'bg-gray-400 border-gray-500',
                  }
                  const classes = colorClasses[color] || 'bg-gray-400 border-gray-500'

                  return (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`flex flex-col items-center gap-2 transition-transform ${selectedColor === color ? 'scale-110' : 'hover:scale-105'
                        }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full border-4 ${classes} cursor-pointer`}
                      />
                      <span className={`text-sm font-medium ${selectedColor === color ? 'text-primary font-bold' : 'text-foreground'
                        }`}>
                        {color}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Quantité
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-accent"
                >
                  −
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-accent"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-foreground">
                {product.inStock ? 'En stock' : 'Rupture de stock'}
              </span>
            </div>

            <div className="space-y-3 pt-4">
              <Button
                onClick={handleAddToCart}
                className="w-full h-12 text-lg"
                disabled={!product.inStock}
              >
                {addedToCart ? '✓ Ajouté au panier' : 'Ajouter au Panier'}
              </Button>
              <Button
                onClick={() => setShowOrderForm(!showOrderForm)}
                variant="outline"
                className="w-full h-12 text-lg"
              >
                {showOrderForm ? 'Fermer le formulaire' : 'Acheter Directement'}
              </Button>
            </div>
          </div>
        </div>

        {showOrderForm && (
          <div className="mb-16">
            <SingleProductOrderForm
              selectedModel={product.name}
              selectedSize={selectedSize}
              selectedColor={selectedColor}
              quantity={quantity}
              unitPrice={product.salePrice || product.price}
            />
          </div>
        )}

        <div className="border-t pt-12">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
            Caractéristiques
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm flex-shrink-0">
                  ✓
                </div>
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

export default function ProductPage() {
  return (
    <>
      <Header />
      <ProductContent />
      <Footer />
    </>
  )
}
