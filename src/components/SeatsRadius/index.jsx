import React, { useState, useContext, useEffect } from 'react'

/*  styled */
import * as S from './styled'

/* Context */
import { AppCineFlixContext } from '../../contexts/AppContext'

const SeatsRadius = ({ name, id, isAvailable }) => {
  const [select, setSelect] = useState(false)

  const { state, dispatch } = useContext(AppCineFlixContext)

  const addAssents = (name) => {
    dispatch({ type: 'addTickes', payload: { tickets: name } })
  }

  useEffect(() => {
    state.tickets = []
  }, [])

  return (
    <S.Seats
      color={isAvailable ? '#C3CFD9' : '#FBE192'}
      key={id}
      style={{
        backgroundColor: isAvailable && select ? '#8DD7CF' : '',
        borderColor: isAvailable && select ? '#1AAE9E' : '',
      }}
      onClick={() => {
        setSelect(!select),
          addAssents(name),
          !isAvailable && alert('Esse assento não está disponível')
      }}
    >
      {name}
    </S.Seats>
  )
}
export default SeatsRadius
