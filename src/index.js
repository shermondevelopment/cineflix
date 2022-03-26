import React from 'react'
import ReactDOM from 'react-dom'

/* AppMain */
import { App } from './App'

import { BrowserRouter } from 'react-router-dom'

/* Context */
import AppCineProvider from './contexts/AppContext'

ReactDOM.render(
  <AppCineProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppCineProvider>,
  document.getElementById('root')
)
