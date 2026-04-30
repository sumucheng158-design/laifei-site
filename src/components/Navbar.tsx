'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  const navLinks = [
    { href: '#brand', label: '品牌核心' },
    { href: '#courses', label: '免費體驗' },
    { href: '#rules', label: '參加條件' },
    { href: '#join', label: '我要體驗' },
  ]

  const handleClose = () => setMenuOpen(false)

  return (
    <>
      {menuOpen && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.mobileMenu} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={handleClose} aria-label="關閉選單">✕</button>
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
            <Image
              src="/logo.webp"
              alt="LaIFEi烹飪創意空間"
              width={120}
              height={43}
              className={styles.logoImage}
              priority
            />
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
