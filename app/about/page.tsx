'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-in fade-in duration-1000">
              <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-4">
                À Propos de Pijama
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Découvrez notre histoire et notre mission de créer les pyjamas les plus confortables du monde
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Notre Histoire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pijama a été fondée avec une simple mission : créer les pyjamas les plus confortables et de la plus haute qualité. Notre équipe est passionnée par l'excellence et l'innovation dans le domaine du confort nocturne.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis nos débuts, nous avons travaillé sans relâche pour sélectionner les meilleures matières premières et développer des designs qui allient style et confort absolu.
              </p>
            </div>

            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Notre Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous croyons que tout le monde mérite une bonne nuit de sommeil. C'est pourquoi nous nous engageons à fournir des pyjamas de qualité premium qui promettent confort, durabilité et style.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos valeurs : qualité sans compromis, satisfaction client garantie, et engagement envers la durabilité.
              </p>
            </div>

            <div className="space-y-4 animate-in fade-in duration-1000">
              <h2 className="text-3xl font-serif font-bold text-foreground">Nos Valeurs</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg text-muted-foreground"><strong>Qualité :</strong> Nous utilisons uniquement les meilleures matières premières</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg text-muted-foreground"><strong>Confort :</strong> Chaque pyjama est conçu pour le confort maximal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg text-muted-foreground"><strong>Style :</strong> Nos designs sont élégants et intemporels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-lg text-muted-foreground"><strong>Durabilité :</strong> Nous nous soucions de l'environnement</span>
                </li>
              </ul>
            </div>

            <div className="text-center pt-8 animate-in fade-in duration-1000">
              <p className="text-lg text-muted-foreground mb-6">
                Vous avez des questions? Contactez-nous
              </p>
              <Link href="/contact">
                <Button className="h-12">Nous Contacter</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
