import styles from './Courses.module.css'

const courses = [
  {
    tag: '開幕特別活動',
    date: '6/20 FRI',
    title: '港式料理專場',
    subtitle: 'Cantonese Cuisine Experience',
    duration: '3小時',
    people: '最多12人',
    desc: '深入探索粵菜精髓，從經典點心到招牌燒味，手把手學習叉燒、蝦餃、腸粉等傳統港式料理的製作技巧，感受廣式烹飪的細膩與層次。',
    highlight: true,
  },
  {
    tag: '開幕特別活動',
    date: '6/27 FRI',
    title: '義式料理專場',
    subtitle: 'Italian Cuisine Experience',
    duration: '3小時',
    people: '最多12人',
    desc: '親手製作新鮮義大利麵、學習道地義式醬料的調製方法，從拿坡里披薩到提拉米蘇，沉浸在南歐料理的浪漫滋味與職人精神。',
    highlight: false,
  },
]

export default function Courses() {
  return (
    <section id="courses" className={styles.courses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>FREE EXPERIENCE</span>
          <h2 className={styles.title}>開幕前免費體驗專場</h2>
          <p className={styles.desc}>
            LaIFEi 開幕倒數！特別規劃兩場限定免費體驗活動，帶您提前感受我們的廚藝空間。
            名額有限，把握機會立即報名！
          </p>
        </div>

        <div className={styles.grid}>
          {courses.map((c, i) => (
            <div key={i} className={`${styles.card} ${c.highlight ? styles.highlighted : ''}`}>
              {c.highlight && <div className={styles.badge}>限定體驗</div>}
              <span className={styles.tag}>{c.tag}</span>
              <div className={styles.dateTag}>{c.date}</div>
              <h3 className={styles.courseTitle}>{c.title}</h3>
              <p className={styles.courseSub}>{c.subtitle}</p>
              <p className={styles.courseDesc}>{c.desc}</p>
              <div className={styles.meta}>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline',marginRight:'4px',verticalAlign:'middle'}}>
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {c.duration}
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline',marginRight:'4px',verticalAlign:'middle'}}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  {c.people}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
