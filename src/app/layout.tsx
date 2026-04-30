import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
