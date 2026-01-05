"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Users, MapPin, Award, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src="/images/aboutus-hero.jpg" alt="SISM Cycling Team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white-primary max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">{t("about.hero.subtitle")}</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">{t("about.hero.title")}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{t("about.hero.description")}</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 heading-primary whitespace-pre-line">{t("about.story.title")}</h2>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/about_us.png"
                alt="SISM Cycling About Us"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 heading-primary">{t("about.values.title")}</h2>
            <p className="text-xl heading-secondary max-w-3xl mx-auto">{t("about.values.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 icon-circle-large icon-circle-large-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Heart className="h-10 w-10 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("about.values.passion.title")}</h3>
              <p className="text-secondary">{t("about.values.passion.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 icon-circle-large icon-circle-large-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Users className="h-10 w-10 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("about.values.community.title")}</h3>
              <p className="text-secondary">{t("about.values.community.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 icon-circle-large icon-circle-large-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Award className="h-10 w-10 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("about.values.quality.title")}</h3>
              <p className="text-secondary">{t("about.values.quality.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 icon-circle-large icon-circle-large-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <MapPin className="h-10 w-10 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("about.values.adventure.title")}</h3>
              <p className="text-secondary">{t("about.values.adventure.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-white-primary">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white-primary">{t("about.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("about.cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary px-8 py-3 rounded-full text-white">
              <Link href="/tours">
                <Calendar className="mr-2 h-5 w-5" />
                {t("common.book_now")}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-outline-white px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/contact">{t("common.contact_us")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
