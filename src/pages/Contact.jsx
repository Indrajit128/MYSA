import React from 'react'
import styles from './SharedPage.module.css'

export default function Contact() {
  return (
    <div className={`${styles.page} ${styles.pageNarrow}`}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.subtitle}>Have a question about a garment? Need help with an order? We're here for you.</p>

      <div className={styles.gridTwoCol} style={{ marginBottom: '64px' }}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle} style={{ fontSize: '20px' }}>Customer Support</h3>
          <p className={styles.cardText} style={{ marginBottom: '16px', color: 'var(--text-mist)' }}>Available 7 days a week, 8am to 8pm.</p>
          <a href="mailto:mysadigital.com@gmail.com" className={styles.contactLink}>mysadigital.com@gmail.com</a>
          <br />
          <a href="tel:+919272117557" className={styles.contactLink} style={{ color: 'var(--text-ink)' }}>+91 92721 17557</a>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle} style={{ fontSize: '20px' }}>Business Inquiries</h3>
          <p className={styles.cardText} style={{ marginBottom: '16px', color: 'var(--text-mist)' }}>For hotel, corporate, or bulk partnerships.</p>
          <a href="mailto:mysadigital.com@gmail.com" className={styles.contactLink}>mysadigital.com@gmail.com</a>
        </div>
      </div>

      <div className={styles.formCard}>
        <h2 className={styles.cardTitle}>Send us a message</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.gridTwoCol} style={{ gap: '24px' }}>
            <div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input type="text" className={styles.input} placeholder="Jane Doe" />
              </div>
              <div className={styles.formGroup} style={{ marginBottom: 0 }}>
                <label className={styles.label}>Email</label>
                <input type="email" className={styles.input} placeholder="jane@example.com" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className={styles.formGroup} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginBottom: 0 }}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.textarea} placeholder="How can we help?" style={{ flexGrow: 1 }}></textarea>
              </div>
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '24px' }}>Send Message</button>
        </form>
      </div>
    </div>
  )
}
