import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`

export const Header = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #247a6b;
  font-size: 24px;
`
export const InfoMovie = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  margin-bottom: 30px;

  & > .title {
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-weight: 700;
    font-size: 24px;
  }
  & > .title-movie,
  & > .title-date {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    margin-top: 15px;
  }
`
