import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Footer.module.css'

export default function Footer({ openModal }) {
  return (
    <footer className={styles.footer}>
      {/* Top glow */}
      <div className={styles.topGlow} />

      {/* CTA Band */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaContent}>
          <div>
            <p className={styles.ctaEyebrow}>Ready to leap?</p>
            <h2 className={styles.ctaTitle}>
              Worn with life.<br />
              <span className={styles.gold}>Returned with care.</span>
            </h2>
          </div>
          <div className={styles.ctaActions}>
            <button className="btn-primary" onClick={() => openModal('booking')}>
              Know More →
            </button>

          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className={styles.grid}>
        {/* Brand */}
        <div className={styles.brandCol}>
          <Link to="/">
            <img src={logo} alt="Mysa" className={styles.footerLogo} />
          </Link>
          <p className={styles.tagline}>Steam-perfect. Time-perfect.<br />Picked up from your door.</p>
          <div className={styles.socials}>
            {['IG', 'TW', 'IN', 'YT'].map(s => (
              <a key={s} href="#" className={styles.socialLink}>{s}</a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.colList}>
            {['Premium Steam Ironing', 'Dry Cleaning', 'Specialist Care'].map(s => (
              <li key={s}><Link to="/services">{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.colList}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/contact">Careers</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Support</h4>
          <ul className={styles.colList}>

            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="mailto:mysadigital.com@gmail.com">mysadigital.com@gmail.com</a></li>
            <li><a href="tel:+919272117557">+91 92721 17557</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Mysa. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
        <p>Made with care in India 🇮🇳</p>
      </div>
    </footer>
  )
}
