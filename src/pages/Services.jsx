import React from 'react'
import styles from './SharedPage.module.css'

export default function Services({ openModal }) {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Our Services</h1>
      <p className={styles.subtitle}>We treat every garment with the exact care it requires. From daily wear to delicate couture, our processes are designed to extend the life of your wardrobe.</p>
      
      <div className={styles.gridOneCol}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Premium Steam Ironing</h2>
          <p className={styles.cardText}>
            Steam ironing is our flagship service. It is not just a chore; it's an art. Our master pressers use state-of-the-art industrial tension equipment and temperature-controlled steam to ensure your shirts, trousers, and delicate linens have razor-sharp creases and are completely wrinkle-free. We treat each fabric type—from heavy cottons to delicate silks—with the exact temperature and steam pressure it requires, extending the life of your garments and keeping you looking impeccably sharp.
          </p>
          <button className="btn-ghost" onClick={() => openModal('booking')} style={{ marginTop: '24px' }}>Book Steam Ironing from ₹79</button>
        </div>



        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Eco-Friendly Dry Cleaning</h2>
          <p className={styles.cardText}>
            Precision care for delicate fabrics. We use 100% PERC-free, advanced hydrocarbon solvents to gently clean your silks, wools, and tailored garments. This process lifts stains without damaging sensitive fibers or leaving harsh chemical odors behind, ensuring your investment pieces remain pristine.
          </p>
          <button className="btn-ghost" onClick={() => openModal('booking')} style={{ marginTop: '24px' }}>Book Dry Cleaning from ₹199</button>
        </div>
      </div>
    </div>
  )
}
