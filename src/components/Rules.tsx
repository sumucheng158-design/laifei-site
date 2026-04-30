import styles from './Rules.module.css'

const rules = [
  { num: '01', title: '年齡限制', desc: '參加者須年滿16歲以上，18歲以下需有家長陪同或書面同意書。' },
  { num: '02', title: '健康聲明', desc: '請事先告知任何食物過敏或飲食限制，以確保您的安全與體驗品質。' },
  { num: '03', title: '提前到場', desc: '課程開始前15分鐘請到場完成報到，逾時恕不候補。' },
  { num: '04', title: '穿著建議', desc: '建議穿著舒適且不怕弄髒的衣物，我們提供圍裙，但請自備防滑鞋。' },
  { num: '05', title: '名額限制', desc: '每堂課程名額有限（8-10人），報名確認後如需取消請提前48小時告知。' },
  { num: '06', title: '個人設備', desc: '所有廚具及食材均由 LaIFEi 提供，學員無需自備任何器材。' },
]

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
