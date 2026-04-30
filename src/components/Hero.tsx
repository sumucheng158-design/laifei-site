import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Real kitchen background image */}
      <div className={styles.bgImage}>
        <Image
          src="/kitchen.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImg}
        />
      </div>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.badge}>7月1日 盛大開幕</div>
        <h1 className={styles.title}>
          <span className={styles.titleEn}>LaIFEi</span>
          <span className={styles.titleZh}>烹飪創意空間</span>
        </h1>
        <p className={styles.subtitle}>
          開啟您的料理新旅程<br />
          讓創意在廚房中自由流動
        </p>
        <div className={styles.actions}>
          <a href="#courses" className={styles.btnPrimary}>免費體驗課程</a>
          <a href="#brand" className={styles.btnSecondary}>了解更多</a>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span />
        <p>向下滾動</p>
      </div>
    </section>
  )
}
