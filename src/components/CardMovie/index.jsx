import React from 'react'

/* Styles */
import * as S from './styled'

const CardMovie = ({ width, height, figureMovie, ...rest }) => {
  return (
    <S.Card width={width} height={height} {...rest}>
      <S.Figure src={figureMovie} alt="" />
    </S.Card>
  )
}

export default CardMovie
