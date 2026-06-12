import styles from './BookingModal.module.css'

export default function BookingModal({ open, onClose, type, learnData, onSwitchToBooking }) {
  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.box}>
        <button className={styles.close} onClick={onClose}>✕</button>

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
