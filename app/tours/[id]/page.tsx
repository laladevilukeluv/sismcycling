"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Clock, Users, Star, MapPin, ArrowLeft, Check, Phone, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const getTourData = (id: string) => {
  const tours = {
    "1": {
      id: "1",
      title: {
        ja: "宮崎のんびり観光サイクリング",
        en: "Miyazaki Leisurely Sightseeing Cycling",
        "zh-cn": "宫崎悠闲观光骑行",
        "zh-tw": "宮崎悠閒观光骑行",
      },
      subtitle: {
        ja: "Miyazaki Leisurely Sightseeing Cycling",
        en: "Experience Miyazaki's Natural Beauty",
        "zh-cn": "体验宫崎的自然美景",
        "zh-tw": "體驗宮崎的自然美景",
      },
      duration: {
        ja: "2日間",
        en: "2 Days",
        "zh-cn": "2天",
        "zh-tw": "2天",
      },
      difficulty: {
        ja: "初級",
        en: "Beginner",
        "zh-cn": "初级",
        "zh-tw": "初級",
      },
      groupSize: {
        ja: "2-6名",
        en: "2-6 people",
        "zh-cn": "2-6人",
        "zh-tw": "2-6人",
      },
      price: "¥45,000",
      rating: 4.9,
      reviews: 127,
      heroImage: "/images/aoshima-island-aerial.jpg",
      gallery: [
        "/images/aoshima-shrine-torii.jpg",
        "/images/aoshima-shrine-main.jpg",
        "/images/udo-shrine-cliffs.jpg",
        "/images/aoshima-beach-palms.jpg",
        "/images/nichinan-coastal-road.jpg",
        "/images/chicken-nanban.jpg",
        "/images/takachiho-kagura.jpg",
        "/images/nishitachi-night.jpg",
      ],
      description: {
        ja: "この企画は「のんびり観光サイクリング」をテーマにしています。宮崎の美しい海岸線と歴史ある城下町を、自転車と車を組み合わせて効率よく巡る2日間の特別なツアーです。",
        en: "This tour is themed around 'leisurely sightseeing cycling'. It's a special 2-day tour that efficiently explores Miyazaki's beautiful coastline and historic castle towns using a combination of bicycles and cars.",
        "zh-cn": `这个企划以"悠闲观光骑行"为主题。这是一个特别的2天行程，结合自行车和汽车，高效地游览宫崎美丽的海岸线和历史悠久的城下町。`,
        "zh-tw":
          "這個企劃以「悠閒觀光騎行」為主題。這是一個特別的2天行程，結合自行車和汽車，高效地遊覽宮崎美麗的海岸線和歷史悠久的城下町。",
      },
      highlights: {
        ja: [
          "青島の美しい海岸線サイクリング",
          "鵜戸神宮での神聖な体験",
          "飫肥城下町での着物体験と人力車",
          "伝統的な一棟貸し宿泊施設",
          "地元の美味しい食事体験",
        ],
        en: [
          "Beautiful Aoshima coastline cycling",
          "Sacred experience at Udo Shrine",
          "Kimono experience and rickshaw in Obi castle town",
          "Traditional private accommodation",
          "Delicious local dining experience",
        ],
        "zh-cn": [
          "青岛美丽海岸线骑行",
          "鹈户神宫的神圣体验",
          "饫肥城下町的和服体验和人力车",
          "传统的独栋住宿设施",
          "当地美味的用餐体验",
        ],
        "zh-tw": [
          "青島美麗海岸線騎行",
          "鵜戶神宮的神聖體驗",
          "飫肥城下町的和服體驗和人力車",
          "傳統的獨棟住宿設施",
          "當地美味的用餐體驗",
        ],
      },
      itinerary: [
        // Day 1
        {
          time: "10:00",
          title: {
            ja: "宮崎空港出発",
            en: "Depart from Miyazaki Airport",
            "zh-cn": "从宫崎机场出发",
            "zh-tw": "從宮崎機場出發",
          },
          description: {
            ja: "車にて移動開始",
            en: "Start journey by car",
            "zh-cn": "开始乘车移动",
            "zh-tw": "開始乘車移動",
          },
          day: 1,
        },
        {
          time: "10:10",
          title: {
            ja: "木花運動公園着",
            en: "Arrive at Kibana Sports Park",
            "zh-cn": "到达木花运动公园",
            "zh-tw": "到達木花運動公園",
          },
          description: {
            ja: "サイクリング準備",
            en: "Prepare for cycling",
            "zh-cn": "准备骑行",
            "zh-tw": "準備騎行",
          },
          day: 1,
        },
        {
          time: "10:30",
          title: {
            ja: "同発（自転車）",
            en: "Depart (by bicycle)",
            "zh-cn": "出发（骑自行车）",
            "zh-tw": "出發（騎自行車）",
          },
          description: {
            ja: "サイクリングスタート",
            en: "Start cycling",
            "zh-cn": "开始骑行",
            "zh-tw": "開始騎行",
          },
          day: 1,
        },
        {
          time: "10:50",
          title: {
            ja: "青島着",
            en: "Arrive at Aoshima",
            "zh-cn": "到达青岛",
            "zh-tw": "到達青島",
          },
          description: {
            ja: "美しい海岸線を楽しむ",
            en: "Enjoy the beautiful coastline",
            "zh-cn": "欣赏美丽的海岸线",
            "zh-tw": "欣賞美麗的海岸線",
          },
          day: 1,
        },
        {
          time: "11:30",
          title: {
            ja: "同発（自転車）",
            en: "Depart (by bicycle)",
            "zh-cn": "出发（骑自行车）",
            "zh-tw": "出發（騎自行車）",
          },
          description: {
            ja: "次の目的地へ",
            en: "To the next destination",
            "zh-cn": "前往下一个目的地",
            "zh-tw": "前往下一個目的地",
          },
          day: 1,
        },
        {
          time: "12:00",
          title: {
            ja: "堀切峠道の駅着",
            en: "Arrive at Horikiri Pass Roadside Station",
            "zh-cn": "到达堀切峠道之驿",
            "zh-tw": "到達堀切峠道之驛",
          },
          description: {
            ja: "絶景ポイントで休憩",
            en: "Rest at scenic viewpoint",
            "zh-cn": "在绝景点休息",
            "zh-tw": "在絕景點休息",
          },
          day: 1,
        },
        {
          time: "12:20",
          title: {
            ja: "同発（車）",
            en: "Depart (by car)",
            "zh-cn": "出发（乘车）",
            "zh-tw": "出發（乘車）",
          },
          description: {
            ja: "車での移動",
            en: "Travel by car",
            "zh-cn": "乘车移动",
            "zh-tw": "乘車移動",
          },
          day: 1,
        },
        {
          time: "12:30",
          title: {
            ja: "昼食",
            en: "Lunch",
            "zh-cn": "午餐",
            "zh-tw": "午餐",
          },
          description: {
            ja: "荒木、倉星、大海のいずれかで食事",
            en: "Meal at Araki, Kuraboshi, or Oumi",
            "zh-cn": "在荒木、仓星或大海用餐",
            "zh-tw": "在荒木、倉星或大海用餐",
          },
          day: 1,
        },
        {
          time: "13:30",
          title: {
            ja: "日南メッセ着",
            en: "Arrive at Nichinan Messe",
            "zh-cn": "到达日南展览中心",
            "zh-tw": "到達日南展覽中心",
          },
          description: {
            ja: "観光情報収集",
            en: "Gather tourist information",
            "zh-cn": "收集旅游信息",
            "zh-tw": "收集旅遊資訊",
          },
          day: 1,
        },
        {
          time: "14:10",
          title: {
            ja: "同発（自転車）",
            en: "Depart (by bicycle)",
            "zh-cn": "出发（骑自行车）",
            "zh-tw": "出發（騎自行車）",
          },
          description: {
            ja: "サイクリング再開",
            en: "Resume cycling",
            "zh-cn": "重新开始骑行",
            "zh-tw": "重新開始騎行",
          },
          day: 1,
        },
        {
          time: "14:30",
          title: {
            ja: "鵜戸神宮着",
            en: "Arrive at Udo Shrine",
            "zh-cn": "到达鹈户神宫",
            "zh-tw": "到達鵜戶神宮",
          },
          description: {
            ja: "神聖な神社を参拝",
            en: "Visit the sacred shrine",
            "zh-cn": "参拜神圣的神社",
            "zh-tw": "參拜神聖的神社",
          },
          day: 1,
        },
        {
          time: "15:00",
          title: {
            ja: "同発（車）",
            en: "Depart (by car)",
            "zh-cn": "出发（乘车）",
            "zh-tw": "出發（乘車）",
          },
          description: {
            ja: "車での移動",
            en: "Travel by car",
            "zh-cn": "乘车移动",
            "zh-tw": "乘車移動",
          },
          day: 1,
        },
        {
          time: "15:30",
          title: {
            ja: "日南酒造会館着",
            en: "Arrive at Nichinan Sake Brewery Hall",
            "zh-cn": "到达日南酒造会馆",
            "zh-tw": "到達日南酒造會館",
          },
          description: {
            ja: "地酒の試飲体験",
            en: "Local sake tasting experience",
            "zh-cn": "当地清酒品尝体验",
            "zh-tw": "當地清酒品嚐體驗",
          },
          day: 1,
        },
        {
          time: "16:00",
          title: {
            ja: "宿泊施設着",
            en: "Arrive at accommodation",
            "zh-cn": "到达住宿设施",
            "zh-tw": "到達住宿設施",
          },
          description: {
            ja: "一棟貸し宿泊施設（2～6人）",
            en: "Private rental accommodation (2-6 people)",
            "zh-cn": "独栋出租住宿设施（2-6人）",
            "zh-tw": "獨棟出租住宿設施（2-6人）",
          },
          day: 1,
        },
        {
          time: "18:30",
          title: {
            ja: "夕食",
            en: "Dinner",
            "zh-cn": "晚餐",
            "zh-tw": "晚餐",
          },
          description: {
            ja: "喜庵一能にて夕食",
            en: "Dinner at Kian Ichino",
            "zh-cn": "在喜庵一能用晚餐",
            "zh-tw": "在喜庵一能用晚餐",
          },
          day: 1,
        },

        // Day 2
        {
          time: "09:00",
          title: {
            ja: "着付け・四半的・飫肥城下町散策",
            en: "Kimono dressing, Shihanmato & Obi castle town exploration",
            "zh-cn": "和服着装、四半的、饫肥城下町散步",
            "zh-tw": "和服著裝、四半的、飫肥城下町散步",
          },
          description: {
            ja: "人力車手配での城下町探索",
            en: "Castle town exploration with rickshaw arrangement",
            "zh-cn": "安排人力车探索城下町",
            "zh-tw": "安排人力車探索城下町",
          },
          day: 2,
        },
        {
          time: "11:00",
          title: {
            ja: "同発（車）",
            en: "Depart (by car)",
            "zh-cn": "出发（乘车）",
            "zh-tw": "出發（乘車）",
          },
          description: {
            ja: "車での移動",
            en: "Travel by car",
            "zh-cn": "乘车移动",
            "zh-tw": "乘車移動",
          },
          day: 2,
        },
        {
          time: "11:10",
          title: {
            ja: "むらのかじや工芸館見学",
            en: "Visit Mura no Kajiya Craft Museum",
            "zh-cn": "参观村之锻冶屋工艺馆",
            "zh-tw": "參觀村之鍛冶屋工藝館",
          },
          description: {
            ja: "伝統工芸の見学",
            en: "Traditional craft viewing",
            "zh-cn": "观看传统工艺",
            "zh-tw": "觀看傳統工藝",
          },
          day: 2,
        },
        {
          time: "11:30",
          title: {
            ja: "同発",
            en: "Depart",
            "zh-cn": "出发",
            "zh-tw": "出發",
          },
          description: {
            ja: "ツアー終了",
            en: "Tour ends",
            "zh-cn": "行程结束",
            "zh-tw": "行程結束",
          },
          day: 2,
        },
      ],
      included: {
        ja: [
          "プレミアムBrompton自転車レンタル",
          "ヘルメット・安全装備",
          "経験豊富な日本語ガイド",
          "車での移動（運転手付き）",
          "一棟貸し宿泊施設（1泊）",
          "夕食（喜庵一能）",
          "昼食（1回）",
          "着物レンタル・着付け",
          "人力車体験",
          "四半的体験",
          "各施設入場料",
        ],
        en: [
          "Premium Brompton bicycle rental",
          "Helmet & safety equipment",
          "Experienced Japanese guide",
          "Car transportation (with driver)",
          "Private accommodation (1 night)",
          "Dinner (Kian Ichino)",
          "Lunch (1 meal)",
          "Kimono rental & dressing",
          "Rickshaw experience",
          "Shihanmato experience",
          "All facility entrance fees",
        ],
        "zh-cn": [
          "高级Brompton自行车租赁",
          "头盔和安全装备",
          "经验丰富的日语导游",
          "汽车交通（含司机）",
          "私人住宿（1晚）",
          "晚餐（喜庵一能）",
          "午餐（1餐）",
          "和服租赁和着装",
          "人力车体验",
          "四半的体验",
          "所有设施门票",
        ],
        "zh-tw": [
          "高級Brompton自行車租賃",
          "頭盔和安全裝備",
          "經驗豐富的日語導遊",
          "汽車交通（含司機）",
          "私人住宿（1晚）",
          "晚餐（喜庵一能）",
          "午餐（1餐）",
          "和服租賃和著裝",
          "人力車體驗",
          "四半的體驗",
          "所有設施門票",
        ],
      },
      notIncluded: {
        ja: ["宮崎空港までの交通費", "個人的な買い物", "追加の食事・飲み物", "チップ（任意）"],
        en: ["Transportation to Miyazaki Airport", "Personal shopping", "Additional meals & drinks", "Tips (optional)"],
        "zh-cn": ["到宫崎机场的交通费", "个人购物", "额外的餐饮", "小费（可选）"],
        "zh-tw": ["到宮崎機場的交通費", "個人購物", "額外的餐飲", "小費（可選）"],
      },
      meetingPoint: {
        name: {
          ja: "宮崎空港",
          en: "Miyazaki Airport",
          "zh-cn": "宫崎机场",
          "zh-tw": "宮崎機場",
        },
        address: "宮崎県宮崎市赤江",
        access: {
          ja: "宮崎空港到着ロビー",
          en: "Miyazaki Airport Arrival Lobby",
          "zh-cn": "宫崎机场到达大厅",
          "zh-tw": "宮崎機場到達大廳",
        },
      },
      cancellationPolicy: {
        ja: "7日前まで無料キャンセル可能。それ以降は50%のキャンセル料が発生します。",
        en: "Free cancellation up to 7 days before. 50% cancellation fee applies thereafter.",
        "zh-cn": "7天前可免费取消。之后将收取50%的取消费。",
        "zh-tw": "7天前可免費取消。之後將收取50%的取消費。",
      },
      available: true,
    },

    // minimal other tours (cleanly structured)
    "2": {
      id: "2",
      title: {
        ja: "東京都心アーバンライド",
        en: "Tokyo Urban Ride",
        "zh-cn": "东京都心城市骑行",
        "zh-tw": "東京都心城市騎行",
      },
      subtitle: {
        ja: "Tokyo Urban Cycling Experience",
        en: "Discover Tokyo's Hidden Gems",
        "zh-cn": "发现东京的隐藏宝石",
        "zh-tw": "發現東京的隱藏寶石",
      },
      duration: {
        ja: "4時間",
        en: "4 Hours",
        "zh-cn": "4小时",
        "zh-tw": "4小時",
      },
      difficulty: {
        ja: "初級",
        en: "Beginner",
        "zh-cn": "初级",
        "zh-tw": "初級",
      },
      groupSize: {
        ja: "最大8名",
        en: "Max 8 people",
        "zh-cn": "最多8人",
        "zh-tw": "最多8人",
      },
      price: "¥12,000",
      rating: 4.8,
      reviews: 89,
      heroImage: "/placeholder.svg?height=300&width=400",
      gallery: [],
      description: {
        ja: "東京の隠れた魅力を発見する都心サイクリングツアー。",
        en: "Urban cycling tour discovering Tokyo's hidden charms.",
        "zh-cn": "发现东京隐藏魅力的都心骑行之旅。",
        "zh-tw": "發現東京隱藏魅力的都心騎行之旅。",
      },
      included: {},
      notIncluded: {},
      meetingPoint: {},
      cancellationPolicy: {},
      available: false,
    },

    "3": {
      id: "3",
      title: {
        ja: "富士山麓絶景ツアー",
        en: "Mount Fuji Scenic Tour",
        "zh-cn": "富士山麓绝景之旅",
        "zh-tw": "富士山麓絕景之旅",
      },
      subtitle: {
        ja: "Mount Fuji Scenic Cycling Tour",
        en: "Majestic Views of Mount Fuji",
        "zh-cn": "富士山的壮丽景色",
        "zh-tw": "富士山的壯麗景色",
      },
      duration: {
        ja: "8時間",
        en: "8 Hours",
        "zh-cn": "8小时",
        "zh-tw": "8小時",
      },
      difficulty: {
        ja: "上級",
        en: "Advanced",
        "zh-cn": "高级",
        "zh-tw": "高級",
      },
      groupSize: {
        ja: "最大4名",
        en: "Max 4 people",
        "zh-cn": "最多4人",
        "zh-tw": "最多4人",
      },
      price: "¥18,000",
      rating: 5.0,
      reviews: 45,
      heroImage: "/placeholder.svg?height=300&width=400",
      gallery: [],
      description: {
        ja: "富士山の雄大な景色を背景に、挑戦的で報われるサイクリング冒険。",
        en: "Challenging and rewarding cycling adventure with Mount Fuji's majestic scenery.",
        "zh-cn": "以富士山雄伟景色为背景的挑战性和有回报的骑行冒险。",
        "zh-tw": "以富士山雄偉景色為背景的挑戰性和有回報的騎行冒險。",
      },
      included: {},
      notIncluded: {},
      meetingPoint: {},
      cancellationPolicy: {},
      available: false,
    },
  }

  return tours[id as keyof typeof tours] || null
}

// Sample reviews data - you'll replace this with actual reviews from your Google Forms
const sampleReviews = [
  {
    id: 1,
    name: {
      ja: "田中 美咲",
      en: "Misaki Tanaka",
      "zh-cn": "田中美咲",
      "zh-tw": "田中美咲",
    },
    location: {
      ja: "東京都",
      en: "Tokyo",
      "zh-cn": "东京都",
      "zh-tw": "東京都",
    },
    rating: 5,
    date: {
      ja: "2024年11月",
      en: "November 2024",
      "zh-cn": "2024年11月",
      "zh-tw": "2024年11月",
    },
    comment: {
      ja: "宮崎の美しい海岸線を自転車で巡る体験は本当に素晴らしかったです。ガイドさんも親切で、地元の文化について詳しく教えてくれました。鵜戸神宮での体験は特に印象的でした。",
      en: "The experience of cycling along Miyazaki's beautiful coastline was truly wonderful. The guide was kind and taught us a lot about local culture. The experience at Udo Shrine was particularly impressive.",
      "zh-cn":
        "骑自行车游览宫崎美丽海岸线的体验真的很棒。导游很亲切，详细地向我们介绍了当地文化。鹈户神宫的体验特别令人印象深刻。",
      "zh-tw":
        "騎自行車遊覽宮崎美麗海岸線的體驗真的很棒。導遊很親切，詳細地向我們介紹了當地文化。鵜戶神宮的體驗特別令人印象深刻。",
    },
    tourTitle: {
      ja: "宮崎のんびり観光サイクリング",
      en: "Miyazaki Leisurely Sightseeing Cycling",
      "zh-cn": "宫崎悠闲观光骑行",
      "zh-tw": "宮崎悠閒观光骑行",
    },
  },
  {
    id: 2,
    name: {
      ja: "佐藤 健太",
      en: "Kenta Sato",
      "zh-cn": "佐藤健太",
      "zh-tw": "佐藤健太",
    },
    location: {
      ja: "大阪府",
      en: "Osaka",
      "zh-cn": "大阪府",
      "zh-tw": "大阪府",
    },
    rating: 5,
    date: {
      ja: "2024年10月",
      en: "October 2024",
      "zh-cn": "2024年10月",
      "zh-tw": "2024年10月",
    },
    comment: {
      ja: "2日間のツアーでしたが、あっという間に過ぎてしまいました。青島の景色は息をのむほど美しく、チキン南蛮も絶品でした。また参加したいと思います。",
      en: "It was a 2-day tour, but it passed by in a flash. The scenery of Aoshima was breathtakingly beautiful, and the chicken nanban was exquisite. I would like to participate again.",
      "zh-cn": "虽然是2天的行程，但时间过得很快。青岛的景色美得令人屏息，鸡肉南蛮也很美味。我想再次参加。",
      "zh-tw": "雖然是2天的行程，但時間過得很快。青島的景色美得令人屏息，雞肉南蠻也很美味。我想再次參加。",
    },
    tourTitle: {
      ja: "宮崎のんびり観光サイクリング",
      en: "Miyazaki Leisurely Sightseeing Cycling",
      "zh-cn": "宫崎悠闲观光骑行",
      "zh-tw": "宮崎悠閒观光骑行",
    },
  },
  {
    id: 3,
    name: {
      ja: "山田 花子",
      en: "Hanako Yamada",
      "zh-cn": "山田花子",
      "zh-tw": "山田花子",
    },
    location: {
      ja: "福岡県",
      en: "Fukuoka",
      "zh-cn": "福冈县",
      "zh-tw": "福岡縣",
    },
    rating: 4,
    date: {
      ja: "2024年10月",
      en: "October 2024",
      "zh-cn": "2024年10月",
      "zh-tw": "2024年10月",
    },
    comment: {
      ja: "飫肥城下町での着物体験と人力車がとても楽しかったです。宿泊施設も清潔で快適でした。サイクリングコースも初心者の私でも無理なく楽しめました。",
      en: "The kimono experience and rickshaw in Obi castle town were very enjoyable. The accommodation was clean and comfortable. Even as a beginner, I could enjoy the cycling course without difficulty.",
      "zh-cn": "在饫肥城下町的和服体验和人力车非常有趣。住宿设施也很干净舒适。即使是初学者的我也能轻松享受骑行路线。",
      "zh-tw": "在飫肥城下町的和服體驗和人力車非常有趣。住宿設施也很乾淨舒適。即使是初學者的我也能輕鬆享受騎行路線。",
    },
    tourTitle: {
      ja: "宮崎のんびり観光サイクリング",
      en: "Miyazaki Leisurely Sightseeing Cycling",
      "zh-cn": "宫崎悠闲观光骑行",
      "zh-tw": "宮崎悠閒观光骑行",
    },
  },
  {
    id: 4,
    name: {
      ja: "鈴木 太郎",
      en: "Taro Suzuki",
      "zh-cn": "铃木太郎",
      "zh-tw": "鈴木太郎",
    },
    location: {
      ja: "愛知県",
      en: "Aichi",
      "zh-cn": "爱知县",
      "zh-tw": "愛知縣",
    },
    rating: 5,
    date: {
      ja: "2024年9月",
      en: "September 2024",
      "zh-cn": "2024年9月",
      "zh-tw": "2024年9月",
    },
    comment: {
      ja: "Bromptonでのサイクリングは初めてでしたが、とても乗りやすく快適でした。日南海岸の絶景ポイントでの写真撮影も最高でした。スタッフの皆さんのおもてなしに感謝しています。",
      en: "It was my first time cycling with a Brompton, but it was very easy to ride and comfortable. Taking photos at the scenic spots along the Nichinan coast was amazing. I'm grateful for the hospitality of all the staff.",
      "zh-cn": "这是我第一次骑Brompton，但非常好骑且舒适。在日南海岸绝景点拍照也很棒。感谢所有工作人员的热情款待。",
      "zh-tw": "這是我第一次騎Brompton，但非常好騎且舒適。在日南海岸絕景點拍照也很棒。感謝所有工作人員的熱情款待。",
    },
    tourTitle: {
      ja: "宮崎のんびり観光サイクリング",
      en: "Miyazaki Leisurely Sightseeing Cycling",
      "zh-cn": "宫崎悠闲观光骑行",
      "zh-tw": "宮崎悠閒观光骑行",
    },
  },
]

export default function TourDetailPage({ params }: { params: { id: string } }) {
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAllReviews, setShowAllReviews] = useState(false)

  const tour = getTourData(params.id)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("tour.not_found")}</h1>
          <Link href="/tours">
            <Button>{t("tour.back_to_tours")}</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (!tour.available) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="mb-6">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🚧</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{t("tour.coming_soon")}</h1>
            <p className="text-secondary mb-6">{t("tour.coming_soon.description")}</p>
          </div>
          <div className="space-y-4">
            <Link href="/tours">
              <Button className="w-full btn-primary">{t("tour.back_to_tours")}</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full bg-transparent">
                {t("common.contact_us")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const getLocalizedContent = (content: any) => {
    if (typeof content === "object" && content[language as keyof typeof content]) {
      return content[language as keyof typeof content]
    }
    return content
  }

  // Filter reviews to only show IDs 1 and 2
  const filteredReviews = sampleReviews.filter((review) => review.id === 1 || review.id === 2)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-secondary">
            <Link href="/tours" className="hover-primary flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              {t("tour.back_to_tours")}
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={tour.heroImage || "/placeholder.svg"}
          alt={getLocalizedContent(tour.title)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-8 left-8 text-white-primary">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
              {getLocalizedContent(tour.difficulty)}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{tour.rating}</span>
              <span className="text-sm opacity-75">(2 {t("common.reviews")})</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-2">{getLocalizedContent(tour.title)}</h1>
          <p className="text-lg opacity-90">{getLocalizedContent(tour.subtitle)}</p>
        </div>
      </section>

      {/* Tour Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-light mb-6 heading-primary">{t("tour.overview")}</h2>
                <p className="text-secondary text-lg leading-relaxed">{getLocalizedContent(tour.description)}</p>
              </div>

              {/* Tour Highlights */}
              <div className="mb-12">
                <h3 className="text-2xl font-light mb-6 heading-primary">{t("tour.highlights")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getLocalizedContent(tour.highlights)?.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-secondary">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-light mb-6 heading-primary">{t("tour.gallery")}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tour.gallery?.map((image: string, index: number) => (
                    <div
                      key={index}
                      className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-75 transition-opacity"
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Tour photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Itinerary */}
              <div className="mb-12">
                <h3 className="text-2xl font-light mb-6 heading-primary">{t("tour.itinerary")}</h3>

                {tour.id === "1" ? (
                  <>
                    {/* Day 1 */}
                    <div className="mb-8">
                      <h4 className="text-xl card-title mb-4 text-brand">
                        {language === "zh-cn" || language === "zh-tw" ? `${t("tour.day")}1天` : "1日目"}
                      </h4>
                      <div className="space-y-4">
                        {tour.itinerary
                          ?.filter((item: any) => item.day === 1)
                          .map((item: any, index: number) => (
                            <div key={index} className="flex space-x-4">
                              <div className="flex-shrink-0 w-16 h-16 icon-circle rounded-full flex items-center justify-center border-2 border-blue-200">
                                <span className="text-brand font-semibold text-sm">{item.time}</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="card-title mb-2">{getLocalizedContent(item.title)}</h5>
                                <p className="text-secondary">{getLocalizedContent(item.description)}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Day 2 */}
                    <div>
                      <h4 className="text-xl card-title mb-4 text-brand">
                        {language === "zh-cn" || language === "zh-tw" ? `${t("tour.day")}2天` : "2日目"}
                      </h4>
                      <div className="space-y-4">
                        {tour.itinerary
                          ?.filter((item: any) => item.day === 2)
                          .map((item: any, index: number) => (
                            <div key={index} className="flex space-x-4">
                              <div className="flex-shrink-0 w-16 h-16 icon-circle rounded-full flex items-center justify-center border-2 border-blue-200">
                                <span className="text-brand font-semibold text-sm">{item.time}</span>
                              </div>
                              <div className="flex-1">
                                <h5 className="card-title mb-2">{getLocalizedContent(item.title)}</h5>
                                <p className="text-secondary">{getLocalizedContent(item.description)}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    {tour.itinerary?.map((item: any, index: number) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 icon-circle rounded-full flex items-center justify-center border-2 border-blue-200">
                          <span className="text-brand font-semibold text-sm">{item.time}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="card-title mb-2">{getLocalizedContent(item.title)}</h5>
                          <p className="text-secondary">{getLocalizedContent(item.description)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* What's Included */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl card-title mb-4 text-green-700">{t("tour.included")}</h3>
                  <ul className="space-y-2">
                    {getLocalizedContent(tour.included)?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl card-title mb-4 text-red-700">{t("tour.not_included")}</h3>
                  <ul className="space-y-2">
                    {getLocalizedContent(tour.notIncluded)?.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="card-bg card-border card-shadow overflow-hidden transition-shadow duration-300 relative">
                  <CardContent className="p-6 bg-white">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-primary-dark mb-2">{tour.price}</div>
                      <div className="text-secondary">{t("tour.per_person")}</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-light">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted" />
                          <span className="text-sm text-secondary">{t("tour.duration")}</span>
                        </div>
                        <span className="text-sm font-medium text-black">{getLocalizedContent(tour.duration)}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-light">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted" />
                          <span className="text-sm text-secondary">{t("tour.group_size")}</span>
                        </div>
                        <span className="text-sm font-medium text-black">{getLocalizedContent(tour.groupSize)}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-light text-black">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted" />
                          <span className="text-sm text-secondary">{t("tour.meeting_point")}</span>
                        </div>
                        <span className="text-sm font-medium">{getLocalizedContent(tour.meetingPoint?.name)}</span>
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full btn-primary rounded-full mb-6 text-white">
                      <a href="tel:+819072924723">
                        <Phone className="mr-2 h-5 w-5" />
                        {t("tour.book_phone")}
                      </a>
                    </Button>

                    <div className="text-xs text-muted text-center">{getLocalizedContent(tour.cancellationPolicy)}</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-6 heading-primary">{t("tour.reviews")}</h2>
            <p className="text-xl heading-secondary max-w-3xl mx-auto">{t("tour.reviews.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="card-bg card-border overflow-hidden duration-300 relative">
                <CardContent className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="card-title text-lg">{getLocalizedContent(review.name)}</h4>
                      <p className="text-secondary text-sm">{getLocalizedContent(review.location)}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">{getLocalizedContent(review.comment)}</p>

                  <div className="flex items-center justify-between text-sm text-muted">
                    <span className="font-medium text-brand">{getLocalizedContent(review.tourTitle)}</span>
                    <span>{getLocalizedContent(review.date)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary mb-4">{t("tour.reviews.note")}</p>
            <Button
              onClick={() => setShowAllReviews(!showAllReviews)}
              variant="outline"
              className="bg-transparent border-brand text-brand hover:bg-blue-600 hover:text-white"
            >
              {showAllReviews ? t("tour.reviews.hide") : t("tour.reviews.show_all")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
