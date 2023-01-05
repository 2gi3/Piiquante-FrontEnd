import { PrimaryButtonMixIn } from '../../styles/styledComponents'
import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'

export const newSauceInputFieldWarning = keyframes`
0% {
        transform: scale(0);
        bottom: -85px;
    }

    70% {
        transform: scale(1.1);
        bottom: 0px;
    }

    100% {
        transform: scale(1);
        bottom: -15px;
    }
`
export const NewSauceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:first-child {
    width: 70%;
    display: flex;
    justify-content: center;
    padding: 3vh 0 60px 0;
    position: relative;

    .hidden {
      display: none;
    }

    .appear {
      font-size: 15px;
      font-weight: 400;
      color: white;
      letter-spacing: 1px;
      min-width: 240px;
      max-width: 460px;
      width: 55%;
      border-radius: 15px;
      padding: 5px;
      text-align: center;
      z-index: 3;
      position: absolute;
      animation: ${newSauceInputFieldWarning} 1000ms ease-in-out forwards;
      padding: 2px;
      background-color: $primaryColor;
    }

    .inputRange {
      display: flex;
      flex-wrap: wrap;
      max-width: 200px;
      margin-bottom: 25px;
      input {
        &:hover {
          cursor: pointer !important ;
        }
      }

      label {
        width: 100%;
      }
    }
  }
  @media all and (min-width: 361px) and (max-width: 768px) {
    & > div:first-child {
      .inputBox {
        width: 100%;

        input,
        textarea {
          min-width: 330px;
        }
      }
    }
  }

  @media all and (max-width: 360px) {
    & > div:first-child {
      .inputBox {
        width: 100%;

        input,
        textarea {
          min-width: 200px;
        }
      }
    }
  }
`
export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;
  width: 500px;

  #description {
    height: 110px;
    word-wrap: break-word;
    word-break: break-all;
  }

  label {
    margin-bottom: 1px;
  }

  .icon {
    background-color: white;
    padding: 3px 12px 0 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  input,
  textarea {
    min-width: 300px;
    border: none;
    width: 100%;
    min-height: 30px;
    border-radius: 10px;
    padding-left: 10px;
    margin-bottom: 3px;
    background-color: #f443363a;

    &:focus-visible {
      outline: none;
      background-color: #f4433660;
      box-shadow: 2px 2px 2px #683ab779;
    }
  }
  textarea {
    min-height: 80px;
  }
  @media all and (min-width: 361px) and (max-width: 768px) {
    width: 100%;

    input,
    textarea {
      min-width: 330px;
    }
  }

  @media all and (max-width: 360px) {
    width: 100%;

    input,
    textarea {
      min-width: 200px;
    }
  }
`
export const AddImageButton = styled.div`
  display: flex;
  /* max-width: 230px; */
  justify-content: left;
  margin-left: -3px;
  font-size: 14px;
  input,
  button {
    ${PrimaryButtonMixIn}
    margin: 0;
    max-width: 200px;
    font-size: inherit;
  }
  #vanish {
    display: none;
  }
`
export const InputRange = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
  margin-bottom: 25px;
  input {
    &:hover {
      cursor: pointer !important ;
    }
  }

  label {
    width: 100%;
  }
`
