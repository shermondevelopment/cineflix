import React from 'react'

/* CardMovie */
import CardMovie from '../CardMovie'

/* styled */
import * as S from './styled'

const Footer = ({ figureMovie, title, date }) => {
  return (
    <S.WatchMovieHeader>
      <S.WatchMovieHeaderContent>
        <CardMovie width={64} height={89} figureMovie={figureMovie} />
        <S.AgendInfoMovie>
          <S.AgendOptionTitle>{title}</S.AgendOptionTitle>
          <S.AgendOptionTitle>{date}</S.AgendOptionTitle>
        </S.AgendInfoMovie>
      </S.WatchMovieHeaderContent>
    </S.WatchMovieHeader>
  )
}

export default Footer
