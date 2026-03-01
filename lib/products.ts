export interface Product {
  id: string
  name: string
  price: number
  salePrice?: number
  image: string
  collection: 'été' | 'hiver' | 'premium' | 'confort'
  colors: string[]
  sizes: string[]
  rating: number
  reviews: number
  description: string
  features: string[]
  inStock: boolean
  badge?: 'bestseller' | 'new' | 'sale'
  details?: {
    image1: string
    image2: string
  }
}

export const products: Product[] = [
  // Collection Été - 2 produits
  {
    id: '1',
    name: 'Ensemble Pyjama',
    price: 290,
    salePrice: 350,
    image: 'summer-light',
    collection: 'été',
    colors: ['Rose', 'beige'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviews: 187,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Tissu aéré', 'Séchage rapide', 'Léger', 'Respirant'],
    inStock: true,
    badge: 'sale',
    details: {
      image1: '/images/details/product-1-detail-1.jpg',
      image2: '/images/details/product-1-detail-2.jpg',
    },
  },
  {
    id: '2',
    name: 'Ensemble Pyjama',
    price: 290,
    image: 'linen-breeze',
    collection: 'été',
    colors: ['Rose', 'gris'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.5,
    reviews: 143,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Lin 100%', 'Très léger', 'Froisse naturellement', 'Écologique'],
    inStock: true,
    details: {
      image1: '/images/details/product-2-detail-1.jpg',
      image2: '/images/details/product-2-detail-2.jpg',
    },
  },

  // Collection Hiver - 2 produits
  {
    id: '3',
    name: 'Ensemble Pyjama',
    price: 300,
    image: 'winter-cozy',
    collection: 'hiver',
    colors: ['blanc', 'beige', 'vert'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.7,
    reviews: 312,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Intérieur molletonné', 'Très chaud', 'Confortable', 'Respirant'],
    inStock: true,
    details: {
      image1: '/images/details/product-3-detail-1.jpg',
      image2: '/images/details/product-3-detail-2.jpg',
    },
  },
  {
    id: '4',
    name: 'Ensemble Pyjama',
    price: 270,
    image: 'cashmere-winter',
    collection: 'hiver',
    colors: ['vert', 'beige'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.9,
    reviews: 145,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Cachemire véritable', 'Extrêmement chaud', 'Luxueux', 'Durable'],
    inStock: true,
    details: {
      image1: '/images/details/product-4-detail-1.jpg',
      image2: '/images/details/product-4-detail-2.jpg',
    },
  },

  // Collection Premium - 2 produits
  {
    id: '5',
    name: 'Ensemble Pyjama',
    price: 280,
    image: 'silk-luxury',
    collection: 'premium',
    colors: ['Rose', 'bleu'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.9,
    reviews: 234,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Soie naturelle 100%', 'Anti-transpiration', 'Thermorégulation', 'Boutons nacre'],
    inStock: true,
    badge: 'bestseller',
    details: {
      image1: '/images/details/product-5-detail-1.jpg',
      image2: '/images/details/product-5-detail-2.jpg',
    },
  },
  {
    id: '6',
    name: 'Ensemble Pyjama',
    price: 290,
    image: 'cotton-premium',
    collection: 'premium',
    colors: ['Rose', 'beige'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
    reviews: 456,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Coton égyptien', 'Très durable', 'Hypoallergénique', 'Anti-boulochage'],
    inStock: true,
    badge: 'bestseller',
    details: {
      image1: '/images/details/product-6-detail-1.jpg',
      image2: '/images/details/product-6-detail-2.jpg',
    },
  },

  // Collection Confort - 2 produits
  {
    id: '7',
    name: 'Ensemble Pyjama',
    price: 290,
    image: 'bamboo-eco',
    collection: 'confort',
    colors: ['Rose', 'beige'],
    sizes: [ 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
    reviews: 289,
    description: 'Pyjama Femme , Automne-Printemps, hiver',
    features: ['Bambou durable', 'Écologique', 'Ultra doux', 'Thermorégulation'],
    inStock: true,
    badge: 'new',
    details: {
      image1: '/images/details/product-7-detail-1.jpg',
      image2: '/images/details/product-7-detail-2.jpg',
    },
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id)
}

export const getProductsByCollection = (collection: Product['collection']): Product[] => {
  return products.filter((p) => p.collection === collection)
}

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.badge === 'bestseller').slice(0, 6)
}

export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.badge === 'new')
}

export const getSaleProducts = (): Product[] => {
  return products.filter((p) => p.salePrice)
}
