import styled from 'styled-components'
import colors from '../../styles/colors.js'
import { PrimaryButtonMixIn } from '../../styles/styledComponents'

export const SauceContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  padding: 3vw 6vw;

  /* .sauceImage {
    padding-right: 10px;
    max-width: 500px;

    img {
      max-width: 100%;
      max-height: 360px;
    }
  } */

  /* .sauceInfo {
    max-width: 50vw;
    background: linear-gradient(90deg, #683ab720 20%, #f4433610 80%);
    padding: 10px;

    .label {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: -5px;
    }

    .sauceInfoField {
      border-bottom: 1px solid #683ab728;
      padding-bottom: 4px;
      margin-top: 6px;
    }

    .likeButtons {
      display: flex;
      margin-bottom: 5px;

      .thumbs {
        padding: 0.5em 1em;
        background-color: transparent;
        border: none;

        &:focus {
          outline: none;
          color: #673ab7;
        }

        &:focus-visible {
          outline: none;
        }

        i {
          padding: 0 8px 5px 0;
          &:hover {
            filter: drop-shadow(2px 2px 5px ${colors.secondaryColor});
          }
        }
        &:hover {
          cursor: pointer;
          text-shadow: 2px 2px 5px ${colors.secondaryColor};
        }
      }
    }

    .controlButtons {
      .nav-link {
        display: block;
        text-align: left;

        .backButton {
          ${PrimaryButtonMixIn}
          background-color: ${colors.secondaryButton};
          border: none;
          margin: 0;
        }
      }

      .modifyDeleteButtons {
        display: flex;
        min-width: 190px;
        justify-content: left;
        padding: 8px 50px 0 0;

        .modifyButton {
          ${PrimaryButtonMixIn}
          margin-right: 15px;
          margin-top: 8px;
        }

        .deleteButton {
          ${PrimaryButtonMixIn}
          margin-top: 8px;
          margin-left: 10px;
          background-color: red;
        }
      }
    }
  } */

  @media all and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`
export const SauceImage = styled.div`
  padding-right: 10px;
  max-width: 500px;

  img {
    max-width: 100%;
    max-height: 360px;
  }
  @media all and (max-width: 768px) {
    .sauceImage {
      padding-right: 0;
      width: 50vw;
      min-width: 320px;

      img {
        object-fit: cover;
        width: 100%;
        max-height: 240px;
        border-radius: 15px 15px 0 0;
      }
    }
  }
  @media all and (max-width: 360px) {
    .sauceImage {
      width: 85vw;
      min-width: auto;
    }
  }
`
export const SauceInfo = styled.div`
  max-width: 50vw;
  background: linear-gradient(90deg, #683ab720 20%, #f4433610 80%);
  padding: 10px;

  h1,
  h3 {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: -5px;
  }

  h2,
  p {
    border-bottom: 1px solid #683ab728;
    padding-bottom: 4px;
    margin-top: 6px;
  }

  /* .controlButtons {
    .nav-link {
      display: block;
      text-align: left;

      .backButton {
        ${PrimaryButtonMixIn}
        background-color: ${colors.secondaryButton};
        border: none;
        margin: 0;
      }
    }

    .modifyDeleteButtons {
      display: flex;
      min-width: 190px;
      justify-content: left;
      padding: 8px 50px 0 0;

      .modifyButton {
        ${PrimaryButtonMixIn}
        margin-right: 15px;
        margin-top: 8px;
      }

      .deleteButton {
        ${PrimaryButtonMixIn}
        margin-top: 8px;
        margin-left: 10px;
        background-color: red;
      }
    }
  } */
  @media all and (max-width: 768px) {
    margin-top: 10px;
    max-width: 500px;
    width: 50vw;
    min-width: 320px;
    text-align: center;
    border-radius: 0 0 15px 15px;

    h2 {
      font-size: 26px;
    }

    p:first-of-type {
      font-size: 20px;
    }

    .controlButtons {
      .nav-link {
        text-align: center;
      }
    }

    .controlButtons {
      .modifyDeleteButtons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        min-width: auto;
        padding: 0;
      }
    }
  }
  @media all and (max-width: 360px) {
    width: 85vw;
    min-width: auto;
  }
`
export const LikeButtons = styled.div`
  display: flex;
  margin-bottom: 5px;

  button {
    padding: 0.5em 1em;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
      color: #673ab7;
    }

    &:focus-visible {
      outline: none;
    }

    i {
      padding: 0 8px 5px 0;
      &:hover {
        filter: drop-shadow(2px 2px 5px ${colors.secondaryColor});
      }
    }
    &:hover {
      cursor: pointer;
      text-shadow: 2px 2px 5px ${colors.secondaryColor};
    }
  }
  @media all and (max-width: 768px) {
    justify-content: center;
  }
`
export const ControlButtons = styled.div`
  > a:first-of-type {
    display: block;
    text-align: left;

    button {
      ${PrimaryButtonMixIn}
      background-color: ${colors.secondaryButton};
      border: none;
      margin: 0;
    }
  }

  > div {
    display: flex;
    min-width: 190px;
    justify-content: left;
    padding: 8px 50px 0 0;

    button:first-child {
      ${PrimaryButtonMixIn}
      margin-right: 15px;
      margin-top: 8px;
    }

    button:nth-child(2) {
      ${PrimaryButtonMixIn}
      margin-top: 8px;
      margin-left: 10px;
      background-color: red;
    }
  }
  @media all and (max-width: 768px) {
    a:first-of-type {
      text-align: center;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      min-width: auto;
      padding: 0;
    }
  }
`
