import type { ReactNode } from 'react'

export interface BrandValue {
  icon: ReactNode
  title: string
  desc: string
}

export const values: BrandValue[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    title: '創意料理',
    desc: '突破傳統框架，融合東西方烹飪技巧，激發您的廚藝創意與靈感。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12"/>
        <path d="M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7z"/>
        <path d="M12 12c0 0-4 1.5-4 5"/>
        <path d="M12 12c0 0 4 1.5 4 5"/>
      </svg>
    ),
    title: '新鮮食材',
    desc: '嚴選在地優質食材，堅持新鮮、健康、永續的料理哲學。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M12 7V4"/>
        <path d="M8 7V5"/>
        <path d="M16 7V5"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: '專業指導',
    desc: '由資深主廚親自帶領，小班制教學，確保每位學員都能充分學習。',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: '社群共創',
    desc: '建立愛好料理的社群，共同分享食譜、技巧與美食體驗。',
  },
]
