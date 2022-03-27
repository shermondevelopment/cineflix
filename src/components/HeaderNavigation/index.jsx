import React from 'react'

/* Route */
import { useNavigate } from 'react-router-dom'

/* Styles */
import * as S from './styled'

const HeaderNavigation = ({ left, title, previus }) => {
  const navigate = useNavigate()

  return (
    <S.ContentHeader>
      {left && (
        <S.ArrowAction
          src="/assets/image/arrow-left.svg"
          onClick={() => navigate(`${previus}`)}
        />
      )}
      <S.ContentTitle>{title}</S.ContentTitle>
    </S.ContentHeader>
  )
}

export default HeaderNavigation
