import React from 'react'
import AppCineProvider from './contexts/AppContext'

/* Pages */
import Home from './pages/Home'

export const App = () => {
  return (
    <AppCineProvider>
      <Home />
    </AppCineProvider>
  )
}
