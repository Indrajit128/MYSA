import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import BookingModal from './components/BookingModal'
import { useState, useEffect } from 'react'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import HowItWorks from './pages/HowItWorks'
import Sustainability from './pages/Sustainability'

import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState('booking')
  const [learnData, setLearnData] = useState({ title: '', desc: '' })

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(timer)
  }, [])

  const openModal = (type, data = {}) => {
    setModalType(type)
    if (data.title) setLearnData(data)
    setModalOpen(true)
    document.body.classList.add('modal-open')
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.classList.remove('modal-open')
  }

  return (
    <BrowserRouter>
      <Loader visible={loading} />
      <Navbar openModal={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<Home openModal={openModal} />} />
          <Route path="/services" element={<Services openModal={openModal} />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/sustainability" element={<Sustainability />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer openModal={openModal} />
      <BookingModal
        open={modalOpen}
        onClose={closeModal}
        type={modalType}
        learnData={learnData}
        onSwitchToBooking={() => openModal('booking')}
      />
    </BrowserRouter>
  )
}
