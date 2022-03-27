import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const AgendsMovies = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 200px;
`

export const AgendsOption = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const AgendOptionTitle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
`
export const AgendOptionHours = styled.div``

export const AgendHour = styled.button`
  width: max-content;
  color: #fff;
  background-color: #e8833a;
  padding: 8px 20px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
  margin-right: 8px;
`
export const WatchMovieHeader = styled.div`
  width: 100%;
  background-color: #9eadba;
  display: flex;
  justify-content: center;
  padding-top: 11px;
  position: fixed;
  bottom: 0;
`
export const WatchMovieHeaderContent = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
`
export const AgendInfoMovie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
