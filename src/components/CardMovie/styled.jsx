import styled from 'styled-components'

export const Card = styled.section`
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : '145')}px;
  height: ${(props) => (props.height ? props.height : '209')}px;
  padding: 8px;
  cursor: pointer;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 11px;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`
export const Figure = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
