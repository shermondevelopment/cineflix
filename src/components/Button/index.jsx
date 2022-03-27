import React from 'react'

/* Styled */
import * as S from './styled'

const Button = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>
}

export default Button
