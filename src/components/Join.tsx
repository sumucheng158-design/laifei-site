'use client'
import { useState } from 'react'
import styles from './Join.module.css'

export default function Join() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', note: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="join" className={styles.join}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>REGISTER NOW</span>
          <h2 className={styles.title}>我要報名</h2>
          <p className={styles.desc}>
            填寫以下表單，我們將在 24 小時內與您聯繫確認。
            名額有限，把握開幕優惠！
          </p>
        </div>

        {submitted ? (
          <div className={styles.success}>
            <div className={styles.successIcon}>✓</div>
            <h3>報名成功！</h3>
            <p>感謝您的報名，我們將盡快與您聯繫確認課程細節。</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>姓名 *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="請輸入您的姓名"
                  required
                />
              </div>
              <div className={styles.field}>
                <label>聯絡電話 *</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="請輸入手機號碼"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>電子郵件 *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="請輸入電子郵件"
                required
              />
            </div>

            <div className={styles.field}>
              <label>選擇課程 *</label>
              <select name="course" value={form.course} onChange={handleChange} required>
                <option value="">請選擇體驗課程</option>
                <option value="knife">刀工基礎班</option>
                <option value="fusion">東西融合料理</option>
                <option value="dessert">手工甜點入門</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>備註</label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="過敏資訊、特殊需求等"
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              立即報名
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
