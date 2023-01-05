import styled from 'styled-components'
import colors from '../../styles/colors'

export const ConfirmationContainer = styled.div`
  margin: 20px auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  div:first-child {
    height: 80px;
    width: 230px;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    h3 {
      max-width: 160px;
      font-size: 18px;
      color: black;
      font-weight: 500;
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    button {
      width: 80px;
      margin: 0 20px;
    }
  }
`
