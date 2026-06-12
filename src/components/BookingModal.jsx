import { useState } from 'react'
import styles from './BookingModal.module.css'

export default function BookingModal({ open, onClose, type, learnData, onSwitchToBooking }) {
  const [formData, setFormData] = useState({ postcode: '', service: 'Premium Steam Ironing', date: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); onClose() }, 2000)
  }

  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.box}>
        <button className={styles.close} onClick={onClose}>✕</button>

        {type === 'booking' && (
          <div>
            <h2 className={styles.title}>Book a Pickup</h2>
            <p className={styles.sub}>Let's get your laundry sorted in seconds.</p>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.checkmark}>✓</div>
                <p>Booking confirmed! We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Postcode</label>
                  <input
                    type="text" placeholder="e.g. 400050" required
                    value={formData.postcode}
                    onChange={e => setFormData({ ...formData, postcode: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Service Type</label>
                  <select value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                    <option>Premium Steam Ironing</option>
                    <option>Dry Cleaning</option>
                    <option>Specialist Care</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Preferred Date</label>
                  <input
                    type="date" required
                    value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>Confirm Booking →</button>
              </form>
            )}
          </div>
        )}

        {type === 'learn' && (
          <div>
            <h2 className={styles.title}>{learnData.title}</h2>
            <p className={styles.desc}>{learnData.desc}</p>
            <button className={styles.submitBtn} onClick={onSwitchToBooking}>Book This Service →</button>
          </div>
        )}
      </div>
    </div>
  )
}
