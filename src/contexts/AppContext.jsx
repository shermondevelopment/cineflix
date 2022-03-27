import React, { useReducer } from 'react'
import { createContext } from 'react'
import { useReducerMovie, initialState } from '../reducers/reducer'

export const AppCineFlixContext = createContext({
  state: initialState,
  dispatch: () => null,
})

export const mainReducer = (state, action) => ({
  ...useReducerMovie(state, action),
})

const AppCineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AppCineFlixContext.Provider value={{ state, dispatch }}>
      {children}
    </AppCineFlixContext.Provider>
  )
}

export default AppCineProvider
