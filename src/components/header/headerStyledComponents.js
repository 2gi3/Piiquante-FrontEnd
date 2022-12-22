import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'
import { PrimaryButtonMixIn } from '../../styles/styledComponents'

export const blockByBlock = keyframes`
0% {
    opacity: 0;
    transform: scale(0) translateY(1000px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`
export const BackgroundImageContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  height: 90vh;
  & > div:first-child {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    width: ${(prop) => prop.width};
  }
  @media all and (min-width: 361px) and (max-width: 768px) {
    height: 455px;
  }
  @media all and (max-width: 360px) {
    height: 455px;
  }
`

export const Block = styled.div.attrs((prop) => ({
  style: {
    width: `${prop.width}px`,
    height: `${prop.height}px`,
  },
}))`
  position: relative;
  display: block;
  overflow: hidden;
  opacity: 0;
  transform: scale(0) translateY(1000px);
  animation: ${blockByBlock} ${(prop) => prop.durationMS}ms ease-in-out
    ${(prop) => prop.delayMS}ms forwards;
`
export const BlockImg = styled.img.attrs((props) => ({
  style: {
    width: props.width,
    objectPosition: props.backgroundPosition,
  },
}))`
  object-fit: cover;
  min-height: 500px;
  @media all and (min-width: 361px) and (max-width: 767px) {
    min-height: 600px;
  }
  @media all and (min-width: 768px) and (max-width: 1080px) {
    min-height: 1000px;
  }
  @media all and (min-width: 1081px) {
    min-height: 1200px;
  }
`

export const LogInLogOutButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  z-index: 999;

  div:first-child {
    button {
      background: linear-gradient(
        225deg,
        ${colors.primaryColor},
        ${colors.secondaryColor} 50%
      );
      color: white;
      font-size: larger;
      font-weight: 500;
      padding: 5px;
      border: 1px solid #ececec;
      position: absolute;
      text-align: end;
      height: 75px;
      width: 75px;
      right: 5px;
      top: 5px;
      border-radius: 10% 10% 10% 90% / 10% 10% 10% 90%;
      transition: box-shadow 750ms ease-out;
      text-shadow: 1px 1px 1px black;

      svg {
        filter: drop-shadow(1px 1px 1px black);
      }

      &:hover {
        box-shadow: 3px 3px 2px ${colors.secondaryColor};
        cursor: pointer;
      }

      &:focus {
        outline: none;
        box-shadow: 3px 3px 3px ${colors.secondaryColor};
        color: ${colors.primaryColor};
      }
    }
  }
  @media all and (min-width: 361px) and (max-width: 768px) {
    div:first-child {
      button {
        background: none;
        ${PrimaryButtonMixIn}
        text-align: center;
        font-size: 15px;
        letter-spacing: normal;
        font-weight: 400;
        padding: 7px 14px;
        min-width: 82px;
        border: none;
      }
    }
  }
  @media all and (max-width: 360px) {
    div:first-child {
      button {
        background: none;
        ${PrimaryButtonMixIn}
        text-align: center;
        font-size: 15px;
        letter-spacing: normal;
        font-weight: 400;
        padding: 7px 14px;
        min-width: auto;
        top: 16px;
        border: none;

        span {
          display: none;
        }
      }
    }
  }
`
export const Title = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: 400px;
  a {
    text-decoration: none;
    transition: box-shadow 750ms ease-out;
    padding-right: 3px;

    &:hover {
      text-shadow: 1px 1px 1px rgb(185, 185, 185);
    }

    h1 {
      text-align: center;
      margin-left: 50px;
      color: $secondaryColor;
      font-size: 10vw;
      font-weight: 700;
      text-shadow: 1px 1px #f0f0f0, 1px 2px 1px #e0e0e0, 1px 3px 1px #d1d1d1,
        1px 4px 1px #c0c0c0, 1px 7px 3px rgb(16 16 16 / 40%),
        1px 11px 6px rgb(16 16 16 / 20%), 1px 15px 15px rgb(16 16 16 / 20%),
        1px 17px 27px rgb(16 16 16 / 40%);
    }
  }
  @media all and (min-width: 361px) and (max-width: 768px) {
    a {
      padding: 0 17px;
      h1 {
        margin-left: 30px;
        text-align: center;
      }
    }
  }
  @media all and (max-width: 360px) {
    padding-left: 15px;

    a {
      h1 {
        margin-top: 12px;
        margin-left: 0px;
        text-align: left;
        margin-bottom: -16px;
      }
    }
  }
`
export const Slogan = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  p {
    margin-top: 5px;
    color: black;
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    text-shadow: 1px 1px white;
    animation: deckLoader 1000ms linear;
    text-shadow: 1px 1px #aaaaaa, 1px 2px 1px #a0a0a0, 1px 3px 1px #999999;
  }
  @media all and (min-width: 361px) and (max-width: 768px) {
    p {
      font-size: 3.5vw;
    }
  }
  @media all and (max-width: 360px) {
    padding: 0 10px;
    p {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
    }
  }
`
export const UsernameDisplay = styled.div`
  position: absolute;
  top: -10px;
  left: 5px;
  font-size: 15px;
  color: white;
  text-shadow: 2px 2px 2px black;
`
