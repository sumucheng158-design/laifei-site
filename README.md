# LaIFEi 烹飪創意空間

Next.js 網站專案，重現 [laifei-site.vercel.app](https://laifei-site.vercel.app/) 的視覺設計與功能。

## 技術堆疊

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Font**: Noto Sans TC (Google Fonts)

## 快速開始

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

開啟瀏覽器前往 [http://localhost:3000](http://localhost:3000)

## 建置與部署

```bash
# 建置生產版本
npm run build

# 啟動生產伺服器
npm start
```

## 部署到 Vercel

直接將此專案推送到 GitHub，然後在 [Vercel](https://vercel.com) 匯入即可自動部署。

## 專案結構

```
laifei-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css      # 全域樣式
│   │   ├── layout.tsx       # 根 Layout
│   │   └── page.tsx         # 首頁
│   └── components/
│       ├── Navbar.tsx        # 導覽列
│       ├── Hero.tsx          # 主視覺區塊
│       ├── Brand.tsx         # 品牌核心
│       ├── Courses.tsx       # 免費體驗課程
│       ├── Rules.tsx         # 參加條件
│       ├── Join.tsx          # 報名表單
│       └── Footer.tsx        # 頁尾
├── public/                  # 靜態資源
├── package.json
├── tsconfig.json
└── next.config.js
```

## 頁面區塊

- **Hero** - 主視覺，含開幕日期與 CTA 按鈕
- **品牌核心** - 四大核心價值介紹
- **免費體驗** - 三種開幕體驗課程
- **參加條件** - 六項參與規則說明
- **我要報名** - 報名表單（含成功提示）
- **Footer** - 品牌資訊與快速連結
