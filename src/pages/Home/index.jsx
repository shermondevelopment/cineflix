import React, { useContext } from 'react'

import { AppCineFlixContext } from '../../contexts/AppContext'

const Home = () => {
  const { movie } = useContext(AppCineFlixContext)

  return <h1>Home {movie.title}</h1>
}

export default Home
