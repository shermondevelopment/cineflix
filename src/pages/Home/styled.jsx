import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
`

export const ContentTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  height: 110px;
  line-height: 110px;
  margin: auto;
`

export const ContentOptionsMovies = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const ArrowAction = styled.img`
  cursor: pointer;
`
