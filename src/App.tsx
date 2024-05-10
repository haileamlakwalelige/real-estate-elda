// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Copy from "./components/layout/Copy"
import Properties from "./screens/Properties"
import About from "./screens/About"
import PageNotFound from "./screens/PageNotFound"
import ScrollToTop from "./ScrollToTop"
import Contact from "./screens/Contact"
import Information from "./screens/Information"

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/information" element={<Information />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <Copy />
      </BrowserRouter>
    </div>
  )
}

export default App