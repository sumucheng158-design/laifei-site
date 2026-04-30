import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'LaIFEi 烹飪創意空間｜7月1日盛大開幕',
  description: '全新烹飪創意空間，提供免費體驗課程，讓您探索料理的無限可能。7月1日盛大開幕！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className={notoSansTC.variable}>
      <body>{children}</body>
    </html>
  )
}
