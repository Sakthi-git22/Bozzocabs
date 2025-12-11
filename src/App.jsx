import React from 'react'
import { Routes, Route } from 'react-router-dom'

// 1. IMPORT YOUR COMPONENTS
import Home from './Home'
import PrivacyPolicy from './privacy'
import ScrollToTop from './ScrollToTop'
import Terms from './terms'
import Cookie from './cookie'
import Refund from './Refund'

const App = () => {
  return (
    <>
      <ScrollToTop /> {/* Forces page to top on route change */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie" element={<Cookie />}></Route>
        <Route path="/refund" element={<Refund />}></Route>
      </Routes>
    </>
  )
}

export default App