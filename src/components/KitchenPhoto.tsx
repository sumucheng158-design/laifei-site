import Image from 'next/image'
import styles from './KitchenPhoto.module.css'

export default function KitchenPhoto() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.labelRow}>
          <span className={styles.label}>OUR SPACE</span>
        </div>
        <div className={styles.imageWrap}>
          <Image
            src="/kitchen.webp"
            alt="LaIFEi烹飪創意空間"
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <div className={styles.overlay} />
          <div className={styles.caption}>
            <h2 className={styles.captionTitle}>我們的廚房空間</h2>
            <p className={styles.captionDesc}>精心設計的料理環境，讓每一次體驗都成為美好記憶</p>
          </div>
        </div>
      </div>
    </section>
  )
}
