import React from 'react'

/* Router */
import { Routes, Route } from 'react-router-dom'

/* Pages */
import Home from './pages/Home'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}
