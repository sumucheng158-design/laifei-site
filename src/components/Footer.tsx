import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>LaIFEi</span>
            <p className={styles.tagline}>烹飪創意空間</p>
            <p className={styles.openDate}>7月1日 盛大開幕</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>快速連結</h4>
              <a href="#brand">品牌核心</a>
              <a href="#courses">免費體驗</a>
              <a href="#rules">參加條件</a>
              <a href="#join">我要體驗</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>聯絡我們</h4>
              <a href="mailto:hello@laifei.com">VelourNoir.0415@gmail.com</a>
              <span>週一至週日10:00–20:00</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>©2026 LaIFEi 烹飪創意空間. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
