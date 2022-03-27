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
import CardMovie from '../../components/CardMovie'

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
    navigate(`/assentos/${movieAgends.id}`)
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
                    <S.AgendHour
                      key={item.id}
                      onClick={() => setDateMovie(item.name, days.weekday)}
                    >
                      {item.name}
                    </S.AgendHour>
                  )
                })}
              </S.AgendOptionHours>
            </S.AgendsOption>
          ))}
      </S.AgendsMovies>
      <S.WatchMovieHeader>
        <S.WatchMovieHeaderContent>
          <CardMovie
            width={64}
            height={89}
            figureMovie={movieAgends && movieAgends.posterURL}
          />
          <S.AgendInfoMovie>
            <S.AgendOptionTitle>
              {movieAgends && movieAgends.title}
            </S.AgendOptionTitle>
          </S.AgendInfoMovie>
        </S.WatchMovieHeaderContent>
      </S.WatchMovieHeader>
    </S.Content>
  )
}

export default Movies
