import styles from './Brand.module.css'

const values = [
  {
    icon: '🍳',
    title: '創意料理',
    desc: '突破傳統框架，融合東西方烹飪技巧，激發您的廚藝創意與靈感。',
  },
  {
    icon: '🌿',
    title: '新鮮食材',
    desc: '嚴選在地優質食材，堅持新鮮、健康、永續的料理哲學。',
  },
  {
    icon: '👨‍🍳',
    title: '專業指導',
    desc: '由資深主廚親自帶領，小班制教學，確保每位學員都能充分學習。',
  },
  {
    icon: '🤝',
    title: '社群共創',
    desc: '建立愛好料理的社群，共同分享食譜、技巧與美食體驗。',
  },
]

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
