import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SISM CYCLING - Premium Brompton Adventures",
  description:
    "スローサイクリングで息をのむような宮崎の景色の中で忘れられない自転車の冒険に出かけましょう。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応した宮崎サイクリングツアーをご用意しています。",
  keywords:
    "Brompton, ブロンプトン, 宮崎サイクリング, サイクリング, 宮崎旅行, 自転車ツアー宮崎, Miyazaki Cycling, Miyazaki Travel",
  authors: [{ name: "s'ism" }],
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/logo192.png",
  },
  openGraph: {
    title: "スローサイクリング - 宮崎サイクリングツアー(ブロンプトン)",
    description:
      "スローサイクリングで息をのむような宮崎の景色の中で忘れられない自転車の冒険に出かけましょう。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応した宮崎サイクリングツアーをご用意しています。",
    url: "http://xs750353.xsrv.jp/",
    siteName: "SISM CYCLING",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SISM CYCLING Open Graph Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "スローサイクリング - 宮崎サイクリングツアー(ブロンプトン)",
    description:
      "スローサイクリングで息をのむような宮崎の景色の中で忘れられない自転車の冒険に出かけましょう。経験豊富なガイド、景色の良いルート、全てのスキルレベルに対応した宮崎サイクリングツアーをご用意しています。",
    images: ["/images/og-image.png"],
    creator: "@sismcycling",
  },
  other: {
    "line:image": "http://xs750353.xsrv.jp/images/og-image.png",
    "line:card": "http://xs750353.xsrv.jp/images/og-image.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body>
        <ScrollToTop />
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
