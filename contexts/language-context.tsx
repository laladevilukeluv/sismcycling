"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ja" | "en" | "zh-cn" | "zh-tw"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation dictionaries
const translations = {
  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.about": "私たちについて",
    "nav.tours": "ツアー予約",
    "nav.contact": "お問い合わせ",

    // Home Page
    "home.hero.subtitle": "SISM CYCLING EXPERIENCE",
    "home.hero.title": "BROMPTON\nADVENTURE",
    "home.hero.description": "息をのむような景色の中で忘れられない自転車の冒険を体験しましょう",
    "home.hero.cta": "今すぐ予約",
    "home.features.scenic.title": "景色の良いルート",
    "home.features.scenic.description": "息をのむような景色を通る丁寧に選ばれた道。",
    "home.features.guides.title": "専門ガイド",
    "home.features.guides.description": "あなたの旅を導く知識豊富な地元ガイド。",
    "home.features.levels.title": "すべてのスキルレベル",
    "home.features.levels.description": "初心者から経験豊富なサイクリストまで対応したツアー。",
    "home.why.title": "なぜスローサイクリングを\n選ぶのか？",
    "home.why.experience.title": "本物の地元体験",
    "home.why.experience.description": "地元の文化に触れる真の体験。",
    "home.why.brompton.title": "Brompton自転車",
    "home.why.brompton.description": "最高品質の折りたたみ自転車で快適な乗り心地。",
    "home.why.groups.title": "少人数グループ",
    "home.why.groups.description": "きめ細かな対応のための小グループサイズ。",
    "home.cta.title": "あなたの冒険を\n始めましょう",
    "home.cta.description": "忘れられないサイクリング体験のために今すぐ予約してください",
    "home.cta.contact": "お問い合わせ",

    // About Page
    "about.hero.subtitle": "OUR STORY",
    "about.hero.title": "私たちについて",
    "about.hero.description": "サイクリングへの情熱と地元への愛から生まれた物語",
    "about.story.title": "私たちの\nストーリー",
    "about.story.p1":
      "スローサイクリングとは、ゆったりとしたペースで自然や文化を感じながら自転車を楽しむ旅のスタイルです。ただ目的地へ向かうのではなく、道中の景色や出会いを大切にしながら進むことで、新しい発見や感動を味わえます。",
    "about.story.p2":
      "私たちは、宮崎の大自然や歴史、伝統を深く体験できるツアーを提供しています。南国ならではの温暖な気候、どこまでも続く海岸線、そして郷土料理や地元の人々とのふれあいが、訪れる人々に特別な体験をもたらします。",
    "about.story.p3":
      "スローサイクリングを通じて、宮崎ならではの海岸沿いの風景や文化をじっくり味わっていただけます。自転車でのんびりと海岸線を走りながら、絶景のビュースポットを巡ったり、新鮮な海の幸を使った郷土料理を楽しんだり、地域の伝統工芸や祭りに触れることができます。",
    "about.values.title": "私たちの 価値観",
    "about.values.subtitle": "すべての活動の中心にある信念と原則",
    "about.values.passion.title": "情熱",
    "about.values.passion.description": "サイクリングと地域への深い愛情を持って、すべてのツアーに取り組んでいます。",
    "about.values.community.title": "コミュニティ",
    "about.values.community.description": "地元のコミュニティとのつながりを大切にし、持続可能な観光を推進しています。",
    "about.values.quality.title": "品質",
    "about.values.quality.description": "最高品質のBrompton自転車と専門的なサービスを提供しています。",
    "about.values.adventure.title": "冒険",
    "about.values.adventure.description": "新しい発見と忘れられない体験を通じて、冒険の精神を育んでいます。",
    "about.cta.title": "一緒に冒険しませんか？",
    "about.cta.description": "私たちと一緒に特別なサイクリング体験を始めましょう",

    // Tours Page
    "tours.hero.subtitle": "DISCOVER OUR TOURS",
    "tours.hero.title": "ツアー予約",
    "tours.hero.description": "あなたにぴったりの冒険を見つけてください",
    "tours.popular.title": "人気のツアー",
    "tours.popular.subtitle": "初心者から上級者まで、すべてのレベルに対応したツアーをご用意しています",
    "tours.included.title": "ツアーに含まれるもの",
    "tours.included.bike.title": "プレミアムBrompton",
    "tours.included.bike.description": "最新モデルの高品質折りたたみ自転車",
    "tours.included.safety.title": "安全装備",
    "tours.included.safety.description": "ヘルメット、反射ベスト、応急処置キット",
    "tours.included.guide.title": "専門ガイド",
    "tours.included.guide.description": "経験豊富な地元ガイドによる案内",
    "tours.included.refreshments.title": "軽食・飲み物",
    "tours.included.refreshments.description": "ツアー中の水分補給と軽食",
    "tours.cta.title": "今すぐ予約して冒険を始めよう",
    "tours.cta.description": "お気軽にお問い合わせください。",

    // Contact Page
    "contact.hero.subtitle": "GET IN TOUCH",
    "contact.hero.title": "お問い合わせ",
    "contact.hero.description": "ご質問やご相談がございましたら、お気軽にお声かけください",
    "contact.form.title": "メッセージを送信",
    "contact.info.title": "連絡先情報",
    "contact.form.name": "お名前",
    "contact.form.email": "メールアドレス",
    "contact.form.phone": "電話番号",
    "contact.form.subject": "お問い合わせ内容",
    "contact.form.message": "メッセージ",
    "contact.form.send": "送信する",
    "contact.form.placeholder": "ご質問やご要望をお聞かせください...",
    "contact.form.select": "選択してください",
    "contact.form.tour_booking": "ツアー予約について",
    "contact.form.custom_tour": "カスタムツアーについて",
    "contact.form.bike_rental": "自転車レンタルについて",
    "contact.form.general": "一般的なお問い合わせ",
    "contact.form.other": "その他",
    "contact.info.address": "住所",
    "contact.info.phone": "電話番号",
    "contact.info.email": "メールアドレス",
    "contact.info.hours": "営業時間",
    "contact.hours.weekday": "月曜日 - 金曜日: 9:00 - 17:00",
    "contact.hours.weekend": "土曜日 - 日曜日: 8:00 - 17:00",
    "contact.hours.holiday": "祝日は休業",

    // Tour Details
    "tour.back_to_tours": "ツアー一覧に戻る",
    "tour.not_found": "ツアーが見つかりません",
    "tour.coming_soon": "Coming Soon",
    "tour.coming_soon.description": "このツアーは現在準備中です。近日公開予定ですので、しばらくお待ちください。",
    "tour.overview": "ツアー概要",
    "tour.highlights": "ツアーハイライト",
    "tour.gallery": "フォトギャラリー",
    "tour.itinerary": "詳細スケジュール",
    "tour.day": "日目",
    "tour.included": "含まれるもの",
    "tour.not_included": "含まれないもの",
    "tour.per_person": "お一人様あたり",
    "tour.duration": "所要時間",
    "tour.group_size": "グループサイズ",
    "tour.meeting_point": "集合場所",
    "tour.book_phone": "電話で予約",
    "tour.reviews": "お客様の声",
    "tour.reviews.subtitle": "実際にツアーに参加されたお客様からの貴重なご感想をご紹介します",
    "tour.reviews.note": "ツアー終了後、お客様にはGoogleフォームでのレビューをお願いしております",
    "tour.reviews.show_all": "全てのレビューを見る",
    "tour.reviews.hide": "レビューを隠す",
    "tour.related": "関連ツアー",

    // Common
    "common.details": "詳細を見る",
    "common.coming_soon": "Coming Soon",
    "common.book_now": "今すぐ予約",
    "common.contact_us": "お問い合わせ",
    "common.back_to_tours": "ツアー一覧に戻る",
    "common.required": "*",
    "common.reviews": "reviews",

    // Footer
    "footer.company": "SISM CYCLING",
    "footer.description": "プレミアムなBromptonサイクリング体験を提供します。",
    "footer.services": "サービス",
    "footer.company_info": "会社情報",
    "footer.follow": "フォローする",
    "footer.copyright": "© 2024 SISM CYCLING. All rights reserved.",
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.tours": "Book Tours",
    "nav.contact": "Contact",

    // Home Page
    "home.hero.subtitle": "SISM CYCLING EXPERIENCE",
    "home.hero.title": "BROMPTON\nADVENTURE",
    "home.hero.description": "Experience unforgettable cycling adventures through breathtaking landscapes",
    "home.hero.cta": "Book Now",
    "home.features.scenic.title": "Scenic Routes",
    "home.features.scenic.description": "Carefully selected paths through breathtaking landscapes.",
    "home.features.guides.title": "Expert Guides",
    "home.features.guides.description": "Knowledgeable local guides to lead your journey.",
    "home.features.levels.title": "All Skill Levels",
    "home.features.levels.description": "Tours designed for beginners to experienced cyclists.",
    "home.why.title": "Why Choose\nSlow Cycling?",
    "home.why.experience.title": "Authentic Local Experience",
    "home.why.experience.description": "True experiences that connect you with local culture.",
    "home.why.brompton.title": "Brompton Bicycles",
    "home.why.brompton.description": "Comfortable rides with the highest quality folding bikes.",
    "home.why.groups.title": "Small Groups",
    "home.why.groups.description": "Small group sizes for personalized attention.",
    "home.cta.title": "Start Your\nAdventure",
    "home.cta.description": "Book now for an unforgettable cycling experience",
    "home.cta.contact": "Contact Us",

    // About Page
    "about.hero.subtitle": "OUR STORY",
    "about.hero.title": "About Us",
    "about.hero.description": "A story born from passion for cycling and love for the local area",
    "about.story.title": "Our\nStory",
    "about.story.p1":
      "Slow cycling is a travel style that allows you to enjoy cycling at a leisurely pace while experiencing nature and culture. Rather than just heading to a destination, you can discover new things and feel moved by valuing the scenery and encounters along the way.",
    "about.story.p2":
      "We provide tours where you can deeply experience Miyazaki's great nature, history, and traditions. The warm climate unique to the southern region, endless coastlines, and interactions with local cuisine and people bring special experiences to visitors.",
    "about.story.p3":
      "Through slow cycling, you can thoroughly enjoy Miyazaki's unique coastal scenery and culture. While leisurely cycling along the coastline, you can visit scenic viewpoints, enjoy local cuisine made with fresh seafood, and experience regional traditional crafts and festivals.",
    "about.values.title": "Our Values",
    "about.values.subtitle": "The beliefs and principles at the center of everything we do",
    "about.values.passion.title": "Passion",
    "about.values.passion.description": "We approach every tour with deep love for cycling and our region.",
    "about.values.community.title": "Community",
    "about.values.community.description":
      "We value connections with local communities and promote sustainable tourism.",
    "about.values.quality.title": "Quality",
    "about.values.quality.description": "We provide the highest quality Brompton bicycles and professional service.",
    "about.values.adventure.title": "Adventure",
    "about.values.adventure.description":
      "We foster the spirit of adventure through new discoveries and unforgettable experiences.",
    "about.cta.title": "Ready for an Adventure?",
    "about.cta.description": "Join us for a special cycling experience",

    // Tours Page
    "tours.hero.subtitle": "DISCOVER OUR TOURS",
    "tours.hero.title": "Book Tours",
    "tours.hero.description": "Find the perfect adventure for you",
    "tours.popular.title": "Popular Tours",
    "tours.popular.subtitle": "We offer tours for all levels, from beginners to advanced cyclists",
    "tours.included.title": "What's Included",
    "tours.included.bike.title": "Premium Brompton",
    "tours.included.bike.description": "Latest model high-quality folding bicycles",
    "tours.included.safety.title": "Safety Equipment",
    "tours.included.safety.description": "Helmets, reflective vests, first aid kit",
    "tours.included.guide.title": "Expert Guide",
    "tours.included.guide.description": "Guidance by experienced local guides",
    "tours.included.refreshments.title": "Refreshments",
    "tours.included.refreshments.description": "Hydration and light snacks during the tour",
    "tours.cta.title": "Book Now and Start Your Adventure",
    "tours.cta.description": "Feel free to contact us.",

    // Contact Page
    "contact.hero.subtitle": "GET IN TOUCH",
    "contact.hero.title": "Contact Us",
    "contact.hero.description": "If you have any questions or inquiries, please feel free to reach out",
    "contact.form.title": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.form.name": "Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send",
    "contact.form.placeholder": "Please let us know your questions or requests...",
    "contact.form.select": "Please select",
    "contact.form.tour_booking": "Tour Booking",
    "contact.form.custom_tour": "Custom Tour",
    "contact.form.bike_rental": "Bike Rental",
    "contact.form.general": "General Inquiry",
    "contact.form.other": "Other",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Business Hours",
    "contact.hours.weekday": "Monday - Friday: 9:00 - 17:00",
    "contact.hours.weekend": "Saturday - Sunday: 8:00 - 17:00",
    "contact.hours.holiday": "Closed on holidays",

    // Tour Details
    "tour.back_to_tours": "Back to Tours",
    "tour.not_found": "Tour not found",
    "tour.coming_soon": "Coming Soon",
    "tour.coming_soon.description": "This tour is currently under preparation. Please wait for the upcoming release.",
    "tour.overview": "Tour Overview",
    "tour.highlights": "Tour Highlights",
    "tour.gallery": "Photo Gallery",
    "tour.itinerary": "Detailed Itinerary",
    "tour.day": "Day",
    "tour.included": "What's Included",
    "tour.not_included": "What's Not Included",
    "tour.per_person": "Per Person",
    "tour.duration": "Duration",
    "tour.group_size": "Group Size",
    "tour.meeting_point": "Meeting Point",
    "tour.book_phone": "Book by Phone",
    "tour.reviews": "Customer Reviews",
    "tour.reviews.subtitle": "Valuable feedback from customers who actually participated in our tours",
    "tour.reviews.note": "After the tour, we ask customers to provide reviews through Google Forms",
    "tour.reviews.show_all": "Show All Reviews",
    "tour.reviews.hide": "Hide Reviews",
    "tour.related": "Related Tours",

    // Common
    "common.details": "View Details",
    "common.coming_soon": "Coming Soon",
    "common.book_now": "Book Now",
    "common.contact_us": "Contact Us",
    "common.back_to_tours": "Back to Tours",
    "common.required": "*",
    "common.reviews": "reviews",

    // Footer
    "footer.company": "SISM CYCLING",
    "footer.description": "Providing premium Brompton cycling experiences.",
    "footer.services": "Services",
    "footer.company_info": "Company Info",
    "footer.follow": "Follow Us",
    "footer.copyright": "© 2024 SISM CYCLING. All rights reserved.",
  },

  "zh-cn": {
    // Navigation
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.tours": "预订行程",
    "nav.contact": "联系我们",

    // Home Page
    "home.hero.subtitle": "SISM 骑行体验",
    "home.hero.title": "BROMPTON\n冒险之旅",
    "home.hero.description": "在令人叹为观止的风景中体验难忘的自行车冒险",
    "home.hero.cta": "立即预订",
    "home.features.scenic.title": "风景路线",
    "home.features.scenic.description": "精心挑选的令人叹为观止的风景路径。",
    "home.features.guides.title": "专业向导",
    "home.features.guides.description": "知识丰富的当地向导引领您的旅程。",
    "home.features.levels.title": "所有技能水平",
    "home.features.levels.description": "为初学者到经验丰富的骑行者设计的行程。",
    "home.why.title": "为什么选择\n慢骑行？",
    "home.why.experience.title": "正宗本地体验",
    "home.why.experience.description": "真正连接当地文化的体验。",
    "home.why.brompton.title": "Brompton自行车",
    "home.why.brompton.description": "最高品质折叠自行车的舒适骑行。",
    "home.why.groups.title": "小团体",
    "home.why.groups.description": "小团体规模确保个性化关注。",
    "home.cta.title": "开始您的\n冒险之旅",
    "home.cta.description": "立即预订难忘的骑行体验",
    "home.cta.contact": "联系我们",

    // About Page
    "about.hero.subtitle": "我们的故事",
    "about.hero.title": "关于我们",
    "about.hero.description": "源于对骑行的热情和对当地的热爱而诞生的故事",
    "about.story.title": "我们的\n故事",
    "about.story.p1":
      "慢骑行是一种旅行方式，让您以悠闲的节奏享受骑行，同时体验自然和文化。不仅仅是前往目的地，而是通过珍惜沿途的风景和邂逅来发现新事物并感受感动。",
    "about.story.p2":
      "我们提供可以深度体验宫崎大自然、历史和传统的旅游。南国独有的温暖气候、无尽的海岸线，以及与当地美食和人们的互动，为游客带来特别的体验。",
    "about.story.p3":
      "通过慢骑行，您可以充分享受宫崎独特的海岸风光和文化。悠闲地沿着海岸线骑行，参观风景名胜，享受用新鲜海鲜制作的当地美食，体验地区传统工艺和节庆。",
    "about.values.title": "我们的价值观",
    "about.values.subtitle": "我们所做一切的核心信念和原则",
    "about.values.passion.title": "热情",
    "about.values.passion.description": "我们以对骑行和地区的深深热爱来对待每一次行程。",
    "about.values.community.title": "社区",
    "about.values.community.description": "我们重视与当地社区的联系，推广可持续旅游。",
    "about.values.quality.title": "品质",
    "about.values.quality.description": "我们提供最高品质的Brompton自行车和专业服务。",
    "about.values.adventure.title": "冒险",
    "about.values.adventure.description": "我们通过新发现和难忘体验培养冒险精神。",
    "about.cta.title": "准备好冒险了吗？",
    "about.cta.description": "与我们一起开始特别的骑行体验",

    // Tours Page
    "tours.hero.subtitle": "发现我们的行程",
    "tours.hero.title": "预订行程",
    "tours.hero.description": "找到适合您的完美冒险",
    "tours.popular.title": "热门行程",
    "tours.popular.subtitle": "我们为所有水平提供行程，从初学者到高级骑行者",
    "tours.included.title": "包含内容",
    "tours.included.bike.title": "高级Brompton",
    "tours.included.bike.description": "最新型号高品质折叠自行车",
    "tours.included.safety.title": "安全装备",
    "tours.included.safety.description": "头盔、反光背心、急救包",
    "tours.included.guide.title": "专业向导",
    "tours.included.guide.description": "经验丰富的当地向导指导",
    "tours.included.refreshments.title": "茶点",
    "tours.included.refreshments.description": "行程中的水分补充和轻食",
    "tours.cta.title": "立即预订开始您的冒险",
    "tours.cta.description": "请随时联系我们。",

    // Contact Page
    "contact.hero.subtitle": "联系我们",
    "contact.hero.title": "联系我们",
    "contact.hero.description": "如果您有任何问题或咨询，请随时联系我们",
    "contact.form.title": "发送消息",
    "contact.info.title": "联系信息",
    "contact.form.name": "姓名",
    "contact.form.email": "电子邮箱",
    "contact.form.phone": "电话号码",
    "contact.form.subject": "主题",
    "contact.form.message": "消息",
    "contact.form.send": "发送",
    "contact.form.placeholder": "请告诉我们您的问题或要求...",
    "contact.form.select": "请选择",
    "contact.form.tour_booking": "行程预订",
    "contact.form.custom_tour": "定制行程",
    "contact.form.bike_rental": "自行车租赁",
    "contact.form.general": "一般咨询",
    "contact.form.other": "其他",
    "contact.info.address": "地址",
    "contact.info.phone": "电话",
    "contact.info.email": "邮箱",
    "contact.info.hours": "营业时间",
    "contact.hours.weekday": "周一 - 周五: 9:00 - 17:00",
    "contact.hours.weekend": "周六 - 周日: 8:00 - 17:00",
    "contact.hours.holiday": "节假日休息",

    // Tour Details
    "tour.back_to_tours": "返回行程列表",
    "tour.not_found": "未找到行程",
    "tour.coming_soon": "即将推出",
    "tour.coming_soon.description": "此行程目前正在准备中。请等待即将发布。",
    "tour.overview": "行程概览",
    "tour.highlights": "行程亮点",
    "tour.gallery": "照片画廊",
    "tour.itinerary": "详细行程",
    "tour.day": "第",
    "tour.included": "包含内容",
    "tour.not_included": "不包含内容",
    "tour.per_person": "每人",
    "tour.duration": "持续时间",
    "tour.group_size": "团体规模",
    "tour.meeting_point": "集合地点",
    "tour.book_phone": "电话预订",
    "tour.reviews": "客户评价",
    "tour.reviews.subtitle": "实际参加我们行程的客户的宝贵反馈",
    "tour.reviews.note": "行程结束后，我们请客户通过Google表单提供评价",
    "tour.reviews.show_all": "显示所有评价",
    "tour.reviews.hide": "隐藏评价",
    "tour.related": "相关行程",

    // Common
    "common.details": "查看详情",
    "common.coming_soon": "即将推出",
    "common.book_now": "立即预订",
    "common.contact_us": "联系我们",
    "common.back_to_tours": "返回行程列表",
    "common.required": "*",
    "common.reviews": "评价",

    // Footer
    "footer.company": "SISM CYCLING",
    "footer.description": "提供高级Brompton骑行体验。",
    "footer.services": "服务",
    "footer.company_info": "公司信息",
    "footer.follow": "关注我们",
    "footer.copyright": "© 2024 SISM CYCLING. 版权所有。",
  },

  "zh-tw": {
    // Navigation
    "nav.home": "首頁",
    "nav.about": "關於我們",
    "nav.tours": "預訂行程",
    "nav.contact": "聯絡我們",

    // Home Page
    "home.hero.subtitle": "SISM 騎行體驗",
    "home.hero.title": "BROMPTON\n冒險之旅",
    "home.hero.description": "在令人嘆為觀止的風景中體驗難忘的自行車冒險",
    "home.hero.cta": "立即預訂",
    "home.features.scenic.title": "風景路線",
    "home.features.scenic.description": "精心挑選的令人嘆為觀止的風景路徑。",
    "home.features.guides.title": "專業嚮導",
    "home.features.guides.description": "知識豐富的當地嚮導引領您的旅程。",
    "home.features.levels.title": "所有技能水平",
    "home.features.levels.description": "為初學者到經驗豐富的騎行者設計的行程。",
    "home.why.title": "為什麼選擇\n慢騎行？",
    "home.why.experience.title": "正宗本地體驗",
    "home.why.experience.description": "真正連接當地文化的體驗。",
    "home.why.brompton.title": "Brompton自行車",
    "home.why.brompton.description": "最高品質摺疊自行車的舒適騎行。",
    "home.why.groups.title": "小團體",
    "home.why.groups.description": "小團體規模確保個人化關注。",
    "home.cta.title": "開始您的\n冒險之旅",
    "home.cta.description": "立即預訂難忘的騎行體驗",
    "home.cta.contact": "聯絡我們",

    // About Page
    "about.hero.subtitle": "我們的故事",
    "about.hero.title": "關於我們",
    "about.hero.description": "源於對騎行的熱情和對當地的熱愛而誕生的故事",
    "about.story.title": "我們的\n故事",
    "about.story.p1":
      "慢騎行是一種旅行方式，讓您以悠閒的節奏享受騎行，同時體驗自然和文化。不僅僅是前往目的地，而是通過珍惜沿途的風景和邂逅來發現新事物並感受感動。",
    "about.story.p2":
      "我們提供可以深度體驗宮崎大自然、歷史和傳統的旅遊。南國獨有的溫暖氣候、無盡的海岸線，以及與當地美食和人們的互動，為遊客帶來特別的體驗。",
    "about.story.p3":
      "通過慢騎行，您可以充分享受宮崎獨特的海岸風光和文化。悠閒地沿著海岸線騎行，參觀風景名勝，享受用新鮮海鮮製作的當地美食，體驗地區傳統工藝和節慶。",
    "about.values.title": "我們的價值觀",
    "about.values.subtitle": "我們所做一切的核心信念和原則",
    "about.values.passion.title": "熱情",
    "about.values.passion.description": "我們以對騎行和地區的深深熱愛來對待每一次行程。",
    "about.values.community.title": "社區",
    "about.values.community.description": "我們重視與當地社區的聯繫，推廣可持續旅遊。",
    "about.values.quality.title": "品質",
    "about.values.quality.description": "我們提供最高品質的Brompton自行車和專業服務。",
    "about.values.adventure.title": "冒險",
    "about.values.adventure.description": "我們通過新發現和難忘體驗培養冒險精神。",
    "about.cta.title": "準備好冒險了嗎？",
    "about.cta.description": "與我們一起開始特別的騎行體驗",

    // Tours Page
    "tours.hero.subtitle": "發現我們的行程",
    "tours.hero.title": "預訂行程",
    "tours.hero.description": "找到適合您的完美冒險",
    "tours.popular.title": "熱門行程",
    "tours.popular.subtitle": "我們為所有水平提供行程，從初學者到高級騎行者",
    "tours.included.title": "包含內容",
    "tours.included.bike.title": "高級Brompton",
    "tours.included.bike.description": "最新型號高品質摺疊自行車",
    "tours.included.safety.title": "安全裝備",
    "tours.included.safety.description": "頭盔、反光背心、急救包",
    "tours.included.guide.title": "專業嚮導",
    "tours.included.guide.description": "經驗豐富的當地嚮導指導",
    "tours.included.refreshments.title": "茶點",
    "tours.included.refreshments.description": "行程中的水分補充和輕食",
    "tours.cta.title": "立即預訂開始您的冒險",
    "tours.cta.description": "請隨時聯絡我們。",

    // Contact Page
    "contact.hero.subtitle": "聯絡我們",
    "contact.hero.title": "聯絡我們",
    "contact.hero.description": "如果您有任何問題或諮詢，請隨時聯絡我們",
    "contact.form.title": "發送訊息",
    "contact.info.title": "聯絡資訊",
    "contact.form.name": "姓名",
    "contact.form.email": "電子郵箱",
    "contact.form.phone": "電話號碼",
    "contact.form.subject": "主題",
    "contact.form.message": "訊息",
    "contact.form.send": "發送",
    "contact.form.placeholder": "請告訴我們您的問題或要求...",
    "contact.form.select": "請選擇",
    "contact.form.tour_booking": "行程預訂",
    "contact.form.custom_tour": "定製行程",
    "contact.form.bike_rental": "自行車租賃",
    "contact.form.general": "一般諮詢",
    "contact.form.other": "其他",
    "contact.info.address": "地址",
    "contact.info.phone": "電話",
    "contact.info.email": "郵箱",
    "contact.info.hours": "營業時間",
    "contact.hours.weekday": "週一 - 週五: 9:00 - 17:00",
    "contact.hours.weekend": "週六 - 週日: 8:00 - 17:00",
    "contact.hours.holiday": "節假日休息",

    // Tour Details
    "tour.back_to_tours": "返回行程列表",
    "tour.not_found": "未找到行程",
    "tour.coming_soon": "即將推出",
    "tour.coming_soon.description": "此行程目前正在準備中。請等待即將發佈。",
    "tour.overview": "行程概覽",
    "tour.highlights": "行程亮點",
    "tour.gallery": "照片畫廊",
    "tour.itinerary": "詳細行程",
    "tour.day": "第",
    "tour.included": "包含內容",
    "tour.not_included": "不包含內容",
    "tour.per_person": "每人",
    "tour.duration": "持續時間",
    "tour.group_size": "團體規模",
    "tour.meeting_point": "集合地點",
    "tour.book_phone": "電話預訂",
    "tour.reviews": "客戶評價",
    "tour.reviews.subtitle": "實際參加我們行程的客戶的寶貴反饋",
    "tour.reviews.note": "行程結束後，我們請客戶通過Google表單提供評價",
    "tour.reviews.show_all": "顯示所有評價",
    "tour.reviews.hide": "隱藏評價",
    "tour.related": "相關行程",

    // Common
    "common.details": "查看詳情",
    "common.coming_soon": "即將推出",
    "common.book_now": "立即預訂",
    "common.contact_us": "聯絡我們",
    "common.back_to_tours": "返回行程列表",
    "common.required": "*",
    "common.reviews": "評價",

    // Footer
    "footer.company": "SISM CYCLING",
    "footer.description": "提供高級Brompton騎行體驗。",
    "footer.services": "服務",
    "footer.company_info": "公司資訊",
    "footer.follow": "關注我們",
    "footer.copyright": "© 2024 SISM CYCLING. 版權所有。",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
