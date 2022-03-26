import React, { useContext } from 'react'

/* Components */
import Header from '../../components/Header'

import { AppCineFlixContext } from '../../contexts/AppContext'

const Home = () => {
  const { movie } = useContext(AppCineFlixContext)

  return (
    <>
      <Header />
      <h2>Home</h2>
    </>
  )
}

export default Home
