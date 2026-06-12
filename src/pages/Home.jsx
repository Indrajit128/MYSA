import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/mysa_hero_1781022788688.png'
import appMockup from '../../assets/mysa_app_mockup_1781022811775.png'
import sustImg from '../../assets/mysa_sustainability_1781022799139.png'
import styles from './Home.module.css'

const PHRASES = [
  'Picked up from your door.',
  'Expertly steam ironed.',
  'Handled with care.',
  'Returned perfectly crisp.',
]

const SERVICES = [
  {
    icon: '✨',
    title: 'Premium Steam Ironing',
    desc: 'Crisp lines, zero effort. Our flagship service.',
    detailTitle: 'Premium Steam Ironing',
    detailDesc: 'Steam ironing is not just a chore; it\'s an art. Our master pressers use state-of-the-art industrial tension equipment and temperature-controlled steam to ensure your shirts, trousers, and delicate linens have razor-sharp creases and are completely wrinkle-free. We treat each fabric type—from heavy cottons to delicate silks—with the exact temperature and steam pressure it requires, extending the life of your garments and keeping you looking impeccably sharp.',
  },

]

const TESTIMONIALS = [
  { name: 'Priya S.', city: 'Delhi', service: 'Specialist Care', quote: 'Mysa turned a chaotic laundry pile into a non-problem. The valet shows up exactly when promised. Incredible.' },
  { name: 'Ananya K.', city: 'Bangalore', service: 'Wedding & Couture', quote: 'My wedding lehenga was returned in perfect condition. I was honestly nervous, but Mysa handled it flawlessly.' },
  { name: 'Arjun M.', city: 'Mumbai', service: 'Dry Cleaning', quote: 'The dry cleaning is better than anything I found locally. Worth every rupee.' },
  { name: 'Deepak R.', city: 'Pune', service: 'Bulk Linen', quote: 'As a hotel owner, Mysa\'s bulk linen service has cut our turnaround time in half.' },
  { name: 'Meera T.', city: 'Chennai', service: 'Steam & Press', quote: 'Shirts come back perfectly pressed every time. I won\'t use anyone else.' },
  { name: 'Rahul V.', city: 'Hyderabad', service: 'Dry Cleaning', quote: 'Exceptional service. My suits look brand new after every clean.' },
]

function useTypingEffect() {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = PHRASES[phraseIdx]
    let timeout

    if (!deleting && charIdx === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % PHRASES.length)
    } else {
      const speed = deleting ? 40 : 90
      timeout = setTimeout(() => {
        setCharIdx(i => deleting ? i - 1 : i + 1)
        setText(phrase.substring(0, deleting ? charIdx - 1 : charIdx + 1))
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  return text
}

function RevealSection({ children, className = '', delay = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.1 })
    ob.observe(el)
    return () => ob.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${delay} ${className}`}>{children}</div>
}

export default function Home({ openModal }) {
  const typedText = useTypingEffect()
  const heroRef = useRef(null)
  const heroImgRef = useRef(null)
  const appMockupRef = useRef(null)
  const [postcode, setPostcode] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (heroImgRef.current && scrollY < window.innerHeight) {
        const isTouch = window.matchMedia('(pointer: coarse)').matches
        if (!isTouch) heroImgRef.current.style.transform = `translateY(${scrollY * 0.12}px)`
      }
      if (appMockupRef.current) {
        const rect = appMockupRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const progress = 1 - rect.top / window.innerHeight
          appMockupRef.current.style.transform = `rotateY(${-15 + progress * 10}deg) rotateX(${5 - progress * 5}deg)`
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroContent}>
          <RevealSection className={styles.eyebrowWrap}>
            <div className="eyebrow">Premium Steam Ironing Service</div>
          </RevealSection>
          <RevealSection delay="delay-1">
            <h1 className={styles.heroTitle}>Steam-perfect.<br /><em>Time-perfect.</em></h1>
          </RevealSection>
          <RevealSection delay="delay-2">
            <p className={styles.heroSub}>
              <span>{typedText}</span>
              <span className="type-cursor" />
            </p>
          </RevealSection>
          <RevealSection delay="delay-3" className={styles.heroCta}>
            <button className="btn-primary" onClick={() => openModal('booking')}>
              Know More
            </button>
            <a href="#how" className={styles.linkArrow}>
              See how it works <span>→</span>
            </a>
          </RevealSection>
          <RevealSection delay="delay-4" className={styles.socialProof}>
            <div>
              <div className="stars">★★★★★</div>
              <div className={styles.spText}>4.9 from 12,000+ reviews</div>
            </div>
            <div className={styles.divider} />
            <div className={styles.avatars}>
              {['#C8C0B4', '#E8E4DC', '#7A9E87'].map((c, i) => (
                <div key={i} className={styles.avatar} style={{ background: c }} />
              ))}
            </div>
            <div className={styles.spText}>50k+ happy customers</div>
          </RevealSection>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroGlow} />
          <img src={heroImg} alt="Crisp white shirts on wooden hangers" ref={heroImgRef} className={styles.heroImg} />
          <div className={styles.floatingCard}>
            <span className="pulse-dot" />
            <div>
              <strong>Order #MY-4821</strong><br />
              <span style={{ fontSize: 11, opacity: 0.6 }}>Out for Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className={styles.trustBar}>
        <div className={styles.marquee}>
          {Array(2).fill(['Free Pickup & Delivery', 'Same-Day Service Available', 'Eco-Certified Cleaning', '50,000+ Orders Delivered', 'Specialist Garment Care', 'No Subscription Required', '4.9★ Customer Rating', '100% Satisfaction Guarantee']).flat().map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item} <span className={styles.diamond}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className={`section-padding ${styles.servicesSection}`} id="services">
        <RevealSection className={styles.sectionHeader}>
          <div className="eyebrow">What We Care For</div>
          <h2>Every garment. Every fabric. Every time.</h2>
        </RevealSection>
        <RevealSection delay="delay-1" className={styles.servicesGrid}>
          {SERVICES.map((svc) => (
            <div key={svc.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <div className={styles.cardBottom}>
                <button
                  className={styles.cardLink}
                  onClick={() => openModal('learn', { title: svc.detailTitle, desc: svc.detailDesc })}
                >
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </RevealSection>
      </section>

      {/* HOW IT WORKS */}
      <section className={`section-padding ${styles.howSection}`} id="how">
        <RevealSection className={styles.sectionHeader}>
          <div className="eyebrow" style={{ color: 'var(--brand-sage)' }}>The Mysa Process</div>
          <h2 style={{ color: '#fff', fontStyle: 'italic', fontWeight: 400, fontSize: 52 }}>Effortless from door to door.</h2>
        </RevealSection>
        <RevealSection delay="delay-1" className={styles.timeline}>
          {[
            { step: 'A', icon: '📅', title: 'Schedule', desc: 'Pick your time slot through the Mysa app or website. Available 7 days a week.' },
            { step: 'B', icon: '🚗', title: 'We Collect', desc: 'Your dedicated Mysa Valet arrives on time. No waiting. Leave your bag at the door.' },
            { step: 'C', icon: '🔬', title: 'Expert Care', desc: 'Each item is inspected and cleaned by specialists using eco-certified processes.' },
            { step: 'D', icon: '📦', title: 'Delivered Fresh', desc: 'Returned to your door on wooden hangers, in protective garment bags.' },
          ].map((s) => (
            <div key={s.step} className={styles.step}>
              <div className={styles.stepIcon}>{s.icon}</div>
              <span className={styles.stepLabel}>Step {s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </RevealSection>
        <RevealSection delay="delay-3" className={styles.testimonialFloat}>
          <div className="stars">★★★★★</div>
          <p style={{ fontStyle: 'italic', fontSize: 13, marginTop: 8 }}>
            "Honestly the best service I've ever used. My suits come back looking brand new."<br /><br />
            — Rohan M., Mumbai
          </p>
        </RevealSection>
      </section>

      {/* BOOKING WIDGET */}
      <section className={styles.bookingWidget}>
        <RevealSection>
          <h2>Ready in 60 seconds.</h2>
          <p>Enter your postcode and book your first pickup free.</p>
          <div className={styles.bookingForm}>
            <input
              type="text"
              placeholder="Enter your postcode..."
              value={postcode}
              onChange={e => setPostcode(e.target.value)}
            />
            <button onClick={() => openModal('booking')}>Check Availability →</button>
          </div>
        </RevealSection>
      </section>

      {/* SUSTAINABILITY */}
      <section className={styles.sustainability} id="sustainability">
        <div className={styles.sustContent}>
          <RevealSection>
            <div className="eyebrow">Our Commitment</div>
          </RevealSection>
          <RevealSection delay="delay-1">
            <h2 className={styles.sustTitle}>Clean clothes.<br />Cleaner planet.</h2>
          </RevealSection>
          <RevealSection delay="delay-2" className={styles.sustGrid}>
            {[
              { num: '20M+ Litres', text: 'of water saved with our HE machines' },
              { num: '100%', text: 'PERC-free, chemical-safe dry cleaning' },
              { num: 'Zero Plastic', text: 'All packaging is reusable or biodegradable' },
              { num: 'Carbon Neutral', text: 'Delivery fleet offsets certified' },
            ].map((s) => (
              <div key={s.num} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statText}>{s.text}</div>
              </div>
            ))}
          </RevealSection>
        </div>
      </section>



      {/* APP SECTION */}
      <section className={styles.appSection}>
        <div className={styles.appContent}>
          <RevealSection>
            <div className="eyebrow" style={{ color: 'var(--brand-sage)' }}>The Mysa App</div>
          </RevealSection>
          <RevealSection delay="delay-1">
            <h2 className={styles.appTitle}>Your wardrobe,<br /><em>in your pocket.</em></h2>
          </RevealSection>
          <RevealSection delay="delay-2">
            <p className={styles.appDesc}>
              Schedule pickups in seconds. Track your order in real time. Set your garment preferences. All from the Mysa app.
            </p>
          </RevealSection>
          <RevealSection delay="delay-3" className={styles.appBadges}>
            {['App Store', 'Google Play'].map(b => (
              <div key={b} className={styles.appBadge}>{b}</div>
            ))}
          </RevealSection>
          <RevealSection delay="delay-4">
            <div style={{ fontSize: 13, color: 'var(--text-mist)' }}>
              <span className="stars">★★★★★</span> 4.9 · 8,400 ratings
            </div>
          </RevealSection>
        </div>
        <RevealSection delay="delay-2" className={styles.appVisual}>
          <img src={appMockup} alt="Mysa App Interface" ref={appMockupRef} />
        </RevealSection>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <RevealSection>
          <h2>Your first pickup is on us.</h2>
          <p>No commitment. No signup fee. Just clean clothes.</p>
          <button className="btn-white" onClick={() => openModal('booking')}>Know More</button>
        </RevealSection>
      </section>

    </div>
  )
}
