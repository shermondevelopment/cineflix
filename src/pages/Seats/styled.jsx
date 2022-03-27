import styled from 'styled-components'

export const Content = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const SeatsArea = styled.div`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
`

export const SeatsStatusArea = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const SeatsStatusType = styled.span`
  font-family: 'Roboto', sans-serif;
  color: #4e5a65;
`

export const SeatsStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`

export const StatusRadius = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  margin-bottom: 15px;
`

export const InfoClient = styled.div`
  margin: 45px 0 45px 0;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > label {
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 18px;
  }

  & > input {
    width: 327px;
    height: 35px;
    padding: 10px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
`
