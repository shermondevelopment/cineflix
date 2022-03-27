import styled from 'styled-components'

export const Seats = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.color};
  border: 1px solid
    ${(props) => (props.color === '#C3CFD9' ? '#808F9D' : '#F7C52B')};
  border-radius: 50%;
  text-align: center;
  line-height: 26px;
  margin: 0 13px 18px 0;
  cursor: pointer;
  user-select: none;
`
