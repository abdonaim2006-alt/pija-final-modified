# Configuration Meta Pixel (Facebook Pixel)

## 📍 Où est installé le Pixel Meta?

### 1. **Composant Principal** (`/components/meta-pixel.tsx`)
Ce composant gère:
- L'initialisation du pixel au chargement
- Le tracking automatique des pages visitées (`PageView`)
- Les fonctions utilitaires pour tracker les événements

### 2. **Dans le Layout** (`/app/layout.tsx`)
Le composant `<MetaPixel />` est ajouté dans le `<head>` pour être chargé sur toutes les pages.

### 3. **Dans le Formulaire de Commande** (`/components/pajama-order-form.tsx`)
Quand une commande est confirmée avec succès, le pixel track l'événement `Purchase` avec:
- Montant total de la commande
- Devise (MAD - Dirham Marocain)
- Noms des produits
- Nombre d'articles

---

## 🎯 Événements Tracés

### 1. **PageView** (Automatique)
- Déclenché à chaque visite de page
- Permet de tracker le trafic général

### 2. **Purchase** (À la confirmation)
```javascript
{
  currency: 'MAD',
  value: total,           // Montant total
  content_name: '...',    // Noms des produits
  content_ids: [...],     // IDs des produits
  num_items: 2            // Nombre d'articles
}
```

### 3. **Fonctions Disponibles** (Optionnel)
Vous pouvez utiliser ces fonctions ailleurs dans l'app:

```javascript
// Track un ajout au panier
import { trackAddToCart } from '@/components/meta-pixel'

trackAddToCart({
  currency: 'MAD',
  value: 299.99,
  content_name: 'Pyjama Premium',
  content_id: 'product-123'
})

// Track une visualisation de produit
import { trackViewContent } from '@/components/meta-pixel'

trackViewContent({
  currency: 'MAD',
  value: 299.99,
  content_name: 'Pyjama Premium',
  content_id: 'product-123',
  content_type: 'product'
})
```

---

## 🔧 ID du Pixel

**Pixel ID:** `797473043399003` ✅

---

## 📊 Ce que vous verrez dans Meta Ads Manager

1. **Events Manager** → Vous verrez:
   - Événements PageView
   - Événements Purchase (conversions)
   - Données des clients

2. **Conversions** → Vous pourrez:
   - Optimiser les publicités sur les purchases
   - Créer des audiences de retargeting
   - Mesurer le ROI

3. **Analytics** → Vous visualiserez:
   - Le nombre de conversions
   - La valeur totale des ventes
   - Les taux de conversion

---

## ✅ Prochaines Étapes

1. **Vérifier dans Meta Ads Manager:**
   - Allez sur https://business.facebook.com
   - Events Manager → Testez le pixel
   - Confirmez que les événements arrivent

2. **Optimiser les Campagnes:**
   - Créez des audiences de retargeting
   - Optimisez sur l'événement "Purchase"
   - Suivez le ROAS (Return on Ad Spend)

3. **Ajouter d'autres Events (Optionnel):**
   - InitiateCheckout quand l'utilisateur ouvre le panier
   - AddToCart quand un produit est ajouté
   - ViewContent pour chaque produit consulté
