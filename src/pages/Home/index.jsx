import React, { useEffect, useState } from 'react'

/* router */
import { useNavigate } from 'react-router-dom'

/* Axios */
import axios from 'axios'

/* Styles */
import * as S from './styled'

/* Components */
import Cardmovie from '../../components/CardMovie'
import HeaderNavigation from '../../components/HeaderNavigation'

const Home = () => {
  /* State */

  /* navigate */
  const navigate = useNavigate()

  const [galleryMovies, setGalleryMovies] = useState(null)

  /* Data of Context */

  useEffect(() => {
    axios
      .get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
      .then((moviesApi) => setGalleryMovies(moviesApi.data))
  }, [])

  return (
    <>
      <main>
        <S.Content>
          <S.ContentOptionsMovies>
            <HeaderNavigation left={false} title="Selecione o filme" />
            {galleryMovies &&
              galleryMovies.map((item) => (
                <Cardmovie
                  figureMovie={item.posterURL}
                  key={item.id}
                  onClick={() => navigate(`/sessoes/${item.id}`)}
                />
              ))}
          </S.ContentOptionsMovies>
        </S.Content>
      </main>
    </>
  )
}

export default Home
