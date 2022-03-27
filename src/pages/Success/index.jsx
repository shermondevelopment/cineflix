import React, { useContext, useEffect } from 'react'

/* Compoentns */
import Button from '../../components/Button'

/* Context */
import { AppCineFlixContext } from '../../contexts/AppContext'

/** react router */
import { useNavigate } from 'react-router-dom'

/* styled */
import * as S from './styled'

const Success = () => {
  const { state } = useContext(AppCineFlixContext)

  const navigate = useNavigate()

  useEffect(() => {
    !state.client.name && navigate('/')
  }, [])

  return (
    <S.Content>
      <S.Header>
        <S.Title>
          Pedido Feito
          <br /> com sucesso!
        </S.Title>
      </S.Header>
      <S.InfoMovie>
        <span className="title">Filme é sessão</span>
        <span className="title-movie">{state.movie.title}</span>
        <span className="title-date">{state.client.date}</span>
      </S.InfoMovie>
      <S.InfoMovie>
        <span className="title">Ingressos</span>
        {state.tickets.map((item, index) => (
          <span className="title-date" key={index}>{`Assento ${item}`}</span>
        ))}
      </S.InfoMovie>
      <S.InfoMovie>
        <span className="title">Comprador</span>
        <span className="title-date">Nome: {state.client.name}</span>
        <span className="title-date">CPF: {state.client.cpf}</span>
      </S.InfoMovie>
      <Button onClick={() => navigate('/')}>Voltar para a Home</Button>
    </S.Content>
  )
}

export default Success
