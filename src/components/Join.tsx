'use client'
import { useState } from 'react'
import styles from './Join.module.css'

export default function Join() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="join" className={styles.join}>
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)} aria-label="關閉">✕</button>
            <h3 className={styles.modalTitle}>報名前請確認</h3>
            <ul className={styles.modalList}>
              <li>✓ 本次體驗課程完全免費，開幕限定</li>
              <li>✓ 每堂名額最多12人，額滿即止</li>
              <li>✓ 請提前15分鐘到場報到</li>
              <li>✓ 請告知食物過敏或飲食限制</li>
              <li>✓ 報名成功後將收到 Email 確認通知</li>
            </ul>
            <a
              href="https://forms.gle/UFYfRwE8sb2zXk4h8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
              onClick={() => setShowModal(false)}
            >
              <span>前往填寫報名表</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>EXPERIENCE NOW</span>
          <h2 className={styles.title}>我要體驗</h2>
          <p className={styles.desc}>
            立即預約免費體驗課程，親身感受LaIFEi的烹飪魅力。
            名額有限，把握開幕優惠！
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.decorLine} />

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <strong>即報即確認</strong>
                <span>24小時內回覆確認</span>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <strong>小班精緻教學</strong>
                <span>每堂最多12人</span>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div>
                <strong>免費體驗</strong>
                <span>開幕限定優惠</span>
              </div>
            </div>
          </div>

          <button className={styles.ctaBtn} onClick={() => setShowModal(true)}>
            <span>立即預約體驗</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          <p className={styles.note}>報名成功後將收到Email確認通知，請確認信箱是否正確。</p>
        </div>
      </div>
    </section>
  )
}
