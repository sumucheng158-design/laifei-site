import { values } from '@/data/brand'
import styles from './Brand.module.css'

export default function Brand() {
  return (
    <section id="brand" className={styles.brand}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>BRAND CORE</span>
          <h2 className={styles.title}>品牌核心</h2>
          <p className={styles.desc}>
            LaIFEi 相信，料理不只是填飽肚子，更是一種生活藝術與自我表達的方式。
            我們致力於打造一個充滿創意與溫度的烹飪空間，讓每個人都能找到屬於自己的料理語言。
          </p>
        </div>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{v.icon}</div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.quote}>
          <blockquote>
            "烹飪是一門藝術，廚房是我們的畫布，食材是我們的顏料。"
          </blockquote>
        </div>
      </div>
    </section>
  )
}
