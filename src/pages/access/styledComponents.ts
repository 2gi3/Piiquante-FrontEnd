import styled from 'styled-components'
import colors from '../../styles/colors.js'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  margin-bottom: 13vh;
  position: relative;
  z-index: 2;
  .hidden {
    display: none;
  }
`

export const InContainer = styled.div`
  position: relative;
  min-width: 270px;
  width: 55%;
  border-radius: 15px;
  max-width: 500px;
  background-color: #4b4b4b;
  border: 5px solid #4b4b4b;
  padding: 45px 3vw 3vw 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const AccessInputBox = styled.div`
      height: 30px;
      display: flex;
      justify-content: center;
      margin: 0 26px 50px 26px;

      .icon {
        all: unset;
        background-color: white;
        height: 48px;
        min-width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;

        svg {
          font-size: 28px;
          color: ${colors.secondaryColor};
        }
      }
      button {
        &:hover {
          cursor: pointer;
        }
      }

      input {
        min-width: 100%;
        height: 46px;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        padding-left: 10px;

        &:focus-visible + .icon {
          outline: none;
          background-color: #f44336;
          box-shadow: 2px 2px 2px ${colors.secondaryColor};
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 1px;
          color: white;
        }

        &:focus-visible {
          outline: none;
          background-color: #f44336;
          box-shadow: 2px 2px 2px ${colors.secondaryColor};
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 1px;
          color: white;
        }
      }
`

export const AlternativeAccess = styled.div`
  display: ${(prop) => prop.appear};
  padding-top: 25px;
  color: white;
  text-align: end;
  font-size: larger;
  button {
    all: unset;
    font-size: 22px;
    padding-left: 5px;
    display: inline-block;
    font-weight: 600;
    letter-spacing: 1px;
    color: ${colors.tertiaryColor};
    text-shadow: 1px 1px 1px black;
    span {
      margin-left: 5px;
      svg {
        margin-left: 5px;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
`
