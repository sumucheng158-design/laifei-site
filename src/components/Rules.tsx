import { rules } from '@/data/rules'
import styles from './Rules.module.css'

export default function Rules() {
  return (
    <section id="rules" className={styles.rules}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>PARTICIPATION RULES</span>
          <h2 className={styles.title}>參加條件</h2>
          <p className={styles.desc}>
            為確保每位學員都能在安全、愉快的環境中學習，請在報名前詳細閱讀以下參加條件。
          </p>
        </div>

        <div className={styles.grid}>
          {rules.map((r, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.num}>{r.num}</span>
              <div>
                <h3 className={styles.itemTitle}>{r.title}</h3>
                <p className={styles.itemDesc}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0,marginTop:'2px'}}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>LaIFEi 保留課程調整的最終解釋權，如有任何疑問請聯繫我們。</p>
        </div>
      </div>
    </section>
  )
}
