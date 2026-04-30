'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#brand', label: '品牌核心' },
    { href: '#courses', label: '免費體驗' },
    { href: '#rules', label: '參加條件' },
    { href: '#join', label: '我要報名' },
  ]

  const handleClose = () => setMenuOpen(false)

  return (
    <>
      {menuOpen && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleClose}>✕</button>
            <nav>
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className={styles.mobileLink} onClick={handleClose}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoText}>LaIFEi</span>
            <span className={styles.logoSub}>烹飪創意空間</span>
          </a>

          <nav className={styles.desktopNav}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="開啟選單">
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  )
}
