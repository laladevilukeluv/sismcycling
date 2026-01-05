"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, Users, Star, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ToursPage() {
  const { t } = useLanguage()

  const tours = [
    {
      id: 1,
      title: "宮崎のんびり観光サイクリング",
      titleEn: "Miyazaki Leisurely Sightseeing Cycling",
      titleZhCn: "宫崎悠闲观光骑行",
      titleZhTw: "宮崎悠閒觀光騎行",
      duration: "2日間",
      durationEn: "2 Days",
      durationZhCn: "2天",
      durationZhTw: "2天",
      difficulty: "初級",
      difficultyEn: "Beginner",
      difficultyZhCn: "初级",
      difficultyZhTw: "初級",
      groupSize: "2-6名",
      groupSizeEn: "2-6 people",
      groupSizeZhCn: "2-6人",
      groupSizeZhTw: "2-6人",
      price: "¥45,000",
      rating: 4.9,
      reviews: 127,
      image: "/images/aoshima-island-aerial.jpg",
      description: "宮崎の美しい海岸線と歴史ある城下町を巡る2日間の特別なツアー。",
      descriptionEn: "A special 2-day tour exploring Miyazaki's beautiful coastline and historic castle towns.",
      descriptionZhCn: "探索宫崎美丽海岸线和历史悠久城下町的特别2天行程。",
      descriptionZhTw: "探索宮崎美麗海岸線和歷史悠久城下町的特別2天行程。",
      available: true,
    },
    {
      id: 2,
      title: "東京都心アーバンライド",
      titleEn: "Tokyo Urban Ride",
      titleZhCn: "东京都心城市骑行",
      titleZhTw: "東京都心城市騎行",
      duration: "4時間",
      durationEn: "4 Hours",
      durationZhCn: "4小时",
      durationZhTw: "4小時",
      difficulty: "初級",
      difficultyEn: "Beginner",
      difficultyZhCn: "初级",
      difficultyZhTw: "初級",
      groupSize: "最大8名",
      groupSizeEn: "Max 8 people",
      groupSizeZhCn: "最多8人",
      groupSizeZhTw: "最多8人",
      price: "¥12,000",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      description: "東京の隠れた魅力を発見する都心サイクリングツアー。",
      descriptionEn: "Urban cycling tour discovering Tokyo's hidden charms.",
      descriptionZhCn: "发现东京隐藏魅力的都心骑行之旅。",
      descriptionZhTw: "發現東京隱藏魅力的都心騎行之旅。",
      available: false,
    },
    {
      id: 3,
      title: "富士山麓絶景ツアー",
      titleEn: "Mount Fuji Scenic Tour",
      titleZhCn: "富士山麓绝景之旅",
      titleZhTw: "富士山麓絕景之旅",
      duration: "8時間",
      durationEn: "8 Hours",
      durationZhCn: "8小时",
      durationZhTw: "8小時",
      difficulty: "上級",
      difficultyEn: "Advanced",
      difficultyZhCn: "高级",
      difficultyZhTw: "高級",
      groupSize: "最大4名",
      groupSizeEn: "Max 4 people",
      groupSizeZhCn: "最多4人",
      groupSizeZhTw: "最多4人",
      price: "¥18,000",
      rating: 5.0,
      reviews: 45,
      image: "/placeholder.svg?height=300&width=400",
      description: "富士山の雄大な景色を背景に、挑戦的で報われるサイクリング冒険。",
      descriptionEn: "Challenging and rewarding cycling adventure with Mount Fuji's majestic scenery.",
      descriptionZhCn: "以富士山雄伟景色为背景的挑战性和有回报的骑行冒险。",
      descriptionZhTw: "以富士山雄偉景色為背景的挑戰性和有回報的騎行冒險。",
      available: false,
    },
  ]

  const getLocalizedTourData = (tour: any, language: string) => {
    switch (language) {
      case "en":
        return {
          title: tour.titleEn,
          duration: tour.durationEn,
          difficulty: tour.difficultyEn,
          groupSize: tour.groupSizeEn,
          description: tour.descriptionEn,
        }
      case "zh-cn":
        return {
          title: tour.titleZhCn,
          duration: tour.durationZhCn,
          difficulty: tour.difficultyZhCn,
          groupSize: tour.groupSizeZhCn,
          description: tour.descriptionZhCn,
        }
      case "zh-tw":
        return {
          title: tour.titleZhTw,
          duration: tour.durationZhTw,
          difficulty: tour.difficultyZhTw,
          groupSize: tour.groupSizeZhTw,
          description: tour.descriptionZhTw,
        }
      default:
        return {
          title: tour.title,
          duration: tour.duration,
          difficulty: tour.difficulty,
          groupSize: tour.groupSize,
          description: tour.description,
        }
    }
  }

  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/nichinan-coast-cliffs.jpg"
          alt="SISM Cycling Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white-primary max-w-4xl mx-auto px-6">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90">{t("tours.hero.subtitle")}</p>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">{t("tours.hero.title")}</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{t("tours.hero.description")}</p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 heading-primary">{t("tours.popular.title")}</h2>
            <p className="text-xl heading-secondary max-w-3xl mx-auto">{t("tours.popular.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => {
              const localizedTour = getLocalizedTourData(tour, language)
              return (
                <Card
                  key={tour.id}
                  className="card-bg card-border card-shadow overflow-hidden transition-shadow duration-300 relative"
                >
                  {!tour.available && (
                    <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                      <div className="bg-white px-6 py-3 rounded-full">
                        <span className="text-primary-dark font-semibold">{t("common.coming_soon")}</span>
                      </div>
                    </div>
                  )}
                  <div className="relative h-48">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={localizedTour.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 price-badge-alt px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                      {tour.price}
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-brand font-medium">{localizedTour.difficulty}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-black">{tour.rating}</span>
                        <span className="text-sm text-black">(2 {t("common.reviews")})</span>
                      </div>
                    </div>

                    <h3 className="text-xl card-title mb-3">{localizedTour.title}</h3>
                    <p className="text-secondary mb-4 text-sm leading-relaxed">{localizedTour.description}</p>

                    <div className="flex items-center justify-between text-sm text-muted mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{localizedTour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{localizedTour.groupSize}</span>
                      </div>
                    </div>

                    {tour.available ? (
                      <Link href={`/tours/${tour.id}`}>
                        <Button className="w-full btn-primary rounded-full text-white">{t("common.details")}</Button>
                      </Link>
                    ) : (
                      <Button disabled className="w-full bg-gray-300 text-muted rounded-full cursor-not-allowed">
                        {t("common.coming_soon")}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6 heading-primary">{t("tours.included.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-2xl">🚲</span>
              </div>
              <h3 className="card-title mb-2">{t("tours.included.bike.title")}</h3>
              <p className="text-secondary text-sm">{t("tours.included.bike.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="card-title mb-2">{t("tours.included.safety.title")}</h3>
              <p className="text-secondary text-sm">{t("tours.included.safety.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="card-title mb-2">{t("tours.included.guide.title")}</h3>
              <p className="text-secondary text-sm">{t("tours.included.guide.description")}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 icon-circle icon-circle-hover rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="text-2xl">🥤</span>
              </div>
              <h3 className="card-title mb-2">{t("tours.included.refreshments.title")}</h3>
              <p className="text-secondary text-sm">{t("tours.included.refreshments.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-white-primary">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white-primary">{t("tours.cta.title")}</h2>
          <p className="text-xl mb-8 opacity-90">{t("tours.cta.description")}</p>
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
