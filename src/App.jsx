import React from 'react'

/* Router */
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

/* Pages */
import Home from './pages/Home'
import Movies from './pages/Movies'
import Seats from './pages/Seats'
import Success from './pages/Success'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/session/:id" element={<Movies />} />
        <Route path="/seats/:id" element={<Seats />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  )
}
