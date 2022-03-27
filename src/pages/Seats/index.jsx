import React, { useState, useEffect, useContext } from 'react'

/* Context */
import { AppCineFlixContext } from '../../contexts/AppContext'

/* Components */
import HeaderNavigation from '../../components/HeaderNavigation'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

/* react-router-dom */
import { useNavigate, useParams } from 'react-router-dom'

/* styled */
import * as S from './styled'

/* axios */
import axios from 'axios'
import SeatsRadius from '../../components/SeatsRadius'

const Seats = () => {
  /* useState */
  const [movieSeats, setMovieSeats] = useState(null)
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')

  const navigate = useNavigate()

  const { id } = useParams()

  const { state, dispatch } = useContext(AppCineFlixContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (state.tickets.length <= 0) {
      alert('Você deve escolher pelo menos um acento')
      return
    }
    dispatch({ type: 'addClient', payload: { name } })
    dispatch({ type: 'addCpf', payload: { cpf } })
    navigate(`/success`)
  }

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
      )
      .then((seats) => setMovieSeats(seats.data))
  }, [])

  return (
    <S.Content>
      <HeaderNavigation
        left={true}
        title="Selecione o(s) assento(s)"
        previus={`/session/${id}`}
      />
      <S.SeatsArea>
        {movieSeats &&
          movieSeats.seats.map((se) => (
            <SeatsRadius
              key={se.id}
              isAvailable={se.isAvailable}
              name={se.name}
            />
          ))}
      </S.SeatsArea>
      <S.SeatsStatusArea>
        <S.SeatsStatus>
          <S.StatusRadius color="#8DD7CF" />
          <S.SeatsStatusType>Selecionado</S.SeatsStatusType>
        </S.SeatsStatus>
        <S.SeatsStatus>
          <S.StatusRadius color="#C3CFD9" />
          <S.SeatsStatusType>Disponível</S.SeatsStatusType>
        </S.SeatsStatus>
        <S.SeatsStatus>
          <S.StatusRadius color="#FBE192" />
          <S.SeatsStatusType>Indisponível</S.SeatsStatusType>
        </S.SeatsStatus>
      </S.SeatsStatusArea>
      <form onSubmit={(e) => handleSubmit(e)}>
        <S.InfoClient>
          <S.Col>
            <label>Nome do comprador</label>
            <input
              type="text"
              name="client"
              required
              value={name}
              placeholder="Digite seu nome..."
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </S.Col>
          <S.Col>
            <label>CPF do comprador</label>
            <input
              type="text"
              name="client"
              value={cpf}
              required
              placeholder="Digite seu CPF"
              pattern="\d{3}.?-?\d{3}.?-?\d{3}.?-?\d{2}"
              onChange={(e) => setCpf(e.currentTarget.value)}
            />
          </S.Col>
        </S.InfoClient>
        <Button type="submit" style={{ margin: '0 0 205px 65px' }}>
          Reservar assento(s)
        </Button>
      </form>
      <Footer
        figureMovie={
          movieSeats?.movie?.posterURL && movieSeats?.movie?.posterURL
        }
        title={movieSeats?.movie?.title && movieSeats?.movie?.title}
        date={
          movieSeats?.day?.weekday &&
          `${movieSeats?.day?.weekday} - ${movieSeats?.day?.date}`
        }
      />
    </S.Content>
  )
}

export default Seats
