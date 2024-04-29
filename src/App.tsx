// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Copy from "./components/layout/Copy"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Copy />
      </BrowserRouter>
    </div>
  )
}

export default App