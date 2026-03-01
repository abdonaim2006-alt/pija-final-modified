'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PoliciesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-in fade-in duration-1000">
              <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-4">
                Politiques et Conditions
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Lisez nos conditions générales, politiques de confidentialité et de retour
              </p>
            </div>
          </div>
        </section>

        {/* Policies Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Politique de Retour */}
            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Politique de Retour</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Nous offrons une garantie de satisfaction de 30 jours. Si vous ne trouvez pas vos pyjamas parfaits, vous pouvez les retourner dans les 30 jours suivant la livraison pour un remboursement complet.
                </p>
                <p>
                  Les retours doivent être:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Non portés et dans l'état original</li>
                  <li>Accompagnés de tous les étiquettes et emballages originaux</li>
                  <li>Retournés dans les 30 jours suivant la livraison</li>
                </ul>
                <p>
                  Les frais de retour sont gratuits pour les commandes en France métropolitaine.
                </p>
              </div>
            </div>

            {/* Politique de Confidentialité */}
            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Politique de Confidentialité</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Chez Pijama, votre vie privée est importante pour nous. Nous collectons uniquement les informations personnelles nécessaires pour traiter vos commandes et améliorer notre service.
                </p>
                <p>
                  Les informations que nous collectons incluent:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Nom et adresse de contact</li>
                  <li>Adresse email et numéro de téléphone</li>
                  <li>Informations de paiement</li>
                  <li>Historique de commandes</li>
                </ul>
                <p>
                  Vos données ne seront jamais partagées avec des tiers sans votre consentement. Nous utilisons le chiffrement SSL pour sécuriser toutes les données sensibles.
                </p>
              </div>
            </div>

            {/* Conditions Générales */}
            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Conditions Générales</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  En accédant et en utilisant ce site Web, vous acceptez d'être lié par ces conditions générales.
                </p>
                <h3 className="font-semibold text-foreground">Propriété Intellectuelle</h3>
                <p>
                  Tout contenu sur ce site, y compris les textes, les images et les logos, sont la propriété de Pijama. Toute utilisation non autorisée est interdite.
                </p>
                <h3 className="font-semibold text-foreground">Limitations de Responsabilité</h3>
                <p>
                  Pijama n'est pas responsable de tout dommage indirect, spécial ou consécutif découlant de l'utilisation de ce site ou de nos produits.
                </p>
                <h3 className="font-semibold text-foreground">Modification des Conditions</h3>
                <p>
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives lors de la publication sur ce site.
                </p>
              </div>
            </div>

            {/* Politique de Livraison */}
            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Politique de Livraison</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Nous livrons dans toute la France métropolitaine et internationalement. Les délais de livraison sont généralement:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>France métropolitaine: 3-5 jours ouvrables</li>
                  <li>Autres pays Europe: 7-14 jours ouvrables</li>
                  <li>Reste du monde: 14-30 jours ouvrables</li>
                </ul>
                <p>
                  Les frais de port sont calculés au moment de la commande. Nous offrons la livraison gratuite à partir de 100 DH d'achat en France métropolitaine.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-card rounded-lg p-8 border border-border text-center animate-in fade-in duration-1000">
              <p className="text-lg text-muted-foreground mb-4">
                Des questions concernant nos politiques?
              </p>
              <a href="mailto:contact@pijama.com" className="text-primary hover:opacity-80 transition-opacity font-semibold">
                contact@pijama.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
