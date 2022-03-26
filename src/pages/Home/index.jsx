import React, { useContext, useEffect, useState } from 'react'

/* Axios */
import axios from 'axios'

/* Styles */
import * as S from './styled'

/* Components */
import Header from '../../components/Header'
import Cardmovie from '../../components/CardMovie'

import { AppCineFlixContext } from '../../contexts/AppContext'

const Home = () => {
  /* State */
  const [movieSelect, setMovie] = useState({})

  const [galleryMovies, setGalleryMovies] = useState(null)

  /* Data of Context */
  const { movie } = useContext(AppCineFlixContext)

  useEffect(() => {
    axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then((moviesApi) => setGalleryMovies(moviesApi.data))
  }, [])

  return (
    <>
      <Header />
      <main>
        {movie.date}
        <S.Content>
          <S.ContentHeader>
            <S.ArrowAction src="/assets/image/arrow-left.svg" />
            <S.ContentTitle>Selecione o filme</S.ContentTitle>
            {movieSelect.id && (
              <S.ArrowAction src="/assets/image/arrow-right.svg" />
            )}
          </S.ContentHeader>
          <S.ContentOptionsMovies>
            {galleryMovies &&
              galleryMovies.map((item) => (
                <Cardmovie
                  figureMovie={item.posterURL}
                  key={item.id}
                  onClick={() => setMovie(item)}
                />
              ))}
          </S.ContentOptionsMovies>
        </S.Content>
      </main>
    </>
  )
}

export default Home
