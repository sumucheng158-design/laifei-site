import styles from './Courses.module.css'

const courses = [
  {
    tag: '入門課',
    title: '刀工基礎班',
    subtitle: 'Knife Skills Fundamentals',
    duration: '2小時',
    people: '最多8人',
    desc: '學習正確握刀姿勢與基本切割技法，掌握廚藝的第一步。',
    highlight: true,
  },
  {
    tag: '創意課',
    title: '東西融合料理',
    subtitle: 'Fusion Cuisine Workshop',
    duration: '3小時',
    people: '最多8人',
    desc: '探索東西方食材與調味的無限組合，打造獨一無二的創意料理。',
    highlight: false,
  },
  {
    tag: '甜點課',
    title: '手工甜點入門',
    subtitle: 'Artisan Dessert Basics',
    duration: '2.5小時',
    people: '最多10人',
    desc: '從基礎甜點製作開始，學習烘焙的美妙世界。',
    highlight: false,
  },
]

export default function Courses() {
  return (
    <section id="courses" className={styles.courses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>FREE EXPERIENCE</span>
          <h2 className={styles.title}>免費體驗課程</h2>
          <p className={styles.desc}>
            開幕期間，我們提供三種精選免費體驗課程，讓您親身感受 LaIFEi 的魅力。
            名額有限，立即報名！
          </p>
        </div>

        <div className={styles.grid}>
          {courses.map((c, i) => (
            <div key={i} className={`${styles.card} ${c.highlight ? styles.highlighted : ''}`}>
              {c.highlight && <div className={styles.badge}>最受歡迎</div>}
              <span className={styles.tag}>{c.tag}</span>
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
