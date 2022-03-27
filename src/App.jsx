import React from 'react'

/* Router */
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

/* Pages */
import Home from './pages/Home'
import Movies from './pages/Movies'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sessoes/:id" element={<Movies />} />
        <Route path="/assentos/:id" element={<Movies />} />
      </Routes>
    </>
  )
}
