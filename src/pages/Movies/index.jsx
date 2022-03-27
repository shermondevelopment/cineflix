import React, { useEffect, useState, useContext } from 'react'

import { useNavigate } from 'react-router-dom'

import { AppCineFlixContext } from '../../contexts/AppContext'

/* reactRouter */
import { useParams } from 'react-router-dom'

/** Styled */
import * as S from './styled'

/* axios */
import axios from 'axios'

/** Components */
import HeaderNavigation from '../../components/HeaderNavigation'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

const Movies = () => {
  const [movieAgends, setMovieAgends] = useState(null)
  const { dispatch } = useContext(AppCineFlixContext)
  const navigate = useNavigate()

  const { id } = useParams()

  const setDateMovie = (hours, day) => {
    dispatch({
      type: 'addHours',
      payload: { hours },
    })
    dispatch({
      type: 'addDate',
      payload: { weekDay: day },
    })
    dispatch({
      type: 'addTitle',
      payload: { title: movieAgends.title },
    })
    navigate(`/seats/${movieAgends.id}`)
  }

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`
      )
      .then((movie) => setMovieAgends(movie.data))
  }, [])

  return (
    <S.Content>
      <HeaderNavigation left={true} title="Selecione o horário" previus="/" />
      <S.AgendsMovies>
        {movieAgends &&
          movieAgends.days.map((days) => (
            <S.AgendsOption key={days.id}>
              <S.AgendOptionTitle>
                {days.weekday} - {days.date}
              </S.AgendOptionTitle>
              <S.AgendOptionHours>
                {days.showtimes.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      onClick={() => setDateMovie(item.name, days.weekday)}
                    >
                      {item.name}
                    </Button>
                  )
                })}
              </S.AgendOptionHours>
            </S.AgendsOption>
          ))}
      </S.AgendsMovies>
      <Footer
        figureMovie={movieAgends?.posterURL && movieAgends.posterURL}
        title={movieAgends?.title && movieAgends.title}
      />
    </S.Content>
  )
}

export default Movies
