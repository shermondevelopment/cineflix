import React from 'react'
import { createContext } from 'react'

const AppState = {
  movie: {
    title: 'Dracula',
    hours: '',
    date: '',
  },
  tickets: [13, 23],
  client: {
    name: '',
    cpf: '',
  },
}

export const AppCineFlixContext = createContext(AppState)

const AppCineProvider = ({ children }) => {
  return (
    <AppCineFlixContext.Provider value={AppState}>
      {children}
    </AppCineFlixContext.Provider>
  )
}

export default AppCineProvider
