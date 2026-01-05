"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChevronDown, MapPin, Users, Award, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image src="/images/home-hero.jpg" alt="SISM Cycling Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 text-center text-white-primary max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">{t("home.hero.subtitle")}</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight whitespace-pre-line">
            {t("home.hero.title")}
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t("home.hero.description")}</p>
          <Button asChild size="lg" className="btn-primary px-8 py-3 rounded-full text-white">
            <Link href="/tours">
              <Calendar className="mr-2 h-5 w-5" />
              {t("home.hero.cta")}
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white-primary animate-bounce">
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <MapPin className="h-8 w-8 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("home.features.scenic.title")}</h3>
              <p className="text-secondary leading-relaxed">{t("home.features.scenic.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Users className="h-8 w-8 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("home.features.guides.title")}</h3>
              <p className="text-secondary leading-relaxed">{t("home.features.guides.description")}</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                <Award className="h-8 w-8 feature-icon" />
              </div>
              <h3 className="text-xl card-title mb-4">{t("home.features.levels.title")}</h3>
              <p className="text-secondary leading-relaxed">{t("home.features.levels.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light mb-8 heading-primary whitespace-pre-line">{t("home.why.title")}</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white-primary text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="card-title mb-2">{t("home.why.experience.title")}</h3>
                    <p className="text-secondary">{t("home.why.experience.description")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white-primary text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="card-title mb-2">{t("home.why.brompton.title")}</h3>
                    <p className="text-secondary">{t("home.why.brompton.description")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white-primary text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="card-title mb-2">{t("home.why.groups.title")}</h3>
                    <p className="text-secondary">{t("home.why.groups.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/home-hero-secondary.jpg"
                alt="Brompton Cycling Experience"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-white-primary">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white-primary whitespace-pre-line">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">{t("home.cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary px-8 py-3 rounded-full text-white">
              <Link href="/tours">
                <Calendar className="mr-2 h-5 w-5" />
                {t("home.hero.cta")}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="btn-outline-white px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/contact">{t("home.cta.contact")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
