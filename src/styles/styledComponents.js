import styled, { css, keyframes } from 'styled-components'
import colors from './colors'

export const rotate = keyframes`
from {
   transform: rotate(0deg);
}

to {
transform: rotate(360deg);
}
`
export const Gallery = styled.div`
  padding: 0 5vw;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const Loader = styled.div`
  padding: 24px;
  border: 6px solid #f44336;
  border-bottom-color: transparent;
  border-radius: 32px;
  -webkit-animation: bXglxr 1s infinite linear;
  animation: bXglxr 1s infinite linear;
  height: 0;
  width: 0;
  margin: 30px auto 75px auto;
`
export const PrimaryButtonMixIn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 6px;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  background-color: ${(prop) => prop.mainColor};
  color: white;
  font-size: larger;
  font-weight: 500;
  letter-spacing: 1px;
  transition: box-shadow 750ms ease-out;
  text-shadow: 1px 1px 1px black;
  a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: 2px 2px 2px ${(prop) => prop.minorColor};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 3px 3px 3px ${(prop) => prop.minorColor};
    color: ${(prop) => prop.minorColor};
  }
  &:hover + div {
    display: flex;
    align-items: center;
    bottom: 0;
  }
`
export const PrimaryButton = styled.div`
  ${PrimaryButtonMixIn}
`

export const HiddenComponent = styled.div`
  position: relative;
  z-index: -1;
  margin: auto;
  max-width: 159px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  bottom: 41px;
  border-radius: 6px;
  height: 40px;
  background: ${colors.tertiaryColor};
  transition: bottom 1500ms ease-in-out;
  /* &:hover {
    display: flex;
    align-items: center;
    bottom: 0;
  } */
`
export const ErrorMessage = styled.div`
  box-sizing: border-box;
  padding: 5vw;
  width: 300px;
  margin: 0 auto 60px auto;
  text-align: center;
`
