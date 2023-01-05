import styled from 'styled-components'
import colors from '../../styles/colors'

export const SauceCardContainer = styled.div`
  max-width: 204px;
  margin: 10px 20px;
  padding-top: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 2px ${colors.primaryColor};

  &.sauceBoxOwnSauce {
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 85%,
      ${colors.tertiaryColor} 100%
    );
  }

  a {
    text-decoration: none;
    div:first-child {
      display: flex;
      justify-content: center;
      padding: 8px;

      img {
        object-fit: contain;
        height: 150px;
        width: 150px;
      }
    }
    div:nth-child(2) {
      text-align: center;

      h2 {
        font-size: 18px;
        color: ${colors.secondaryColor};
      }

      p {
        font-size: 15px;
        color: ${colors.secondaryColor};
      }
    }
  }

  &:hover {
    box-shadow: 2px 2px 5px ${colors.secondaryColor};
  }

  /* .sauceBoxImage {
    display: flex;
    justify-content: center;
    padding: 8px;

    img {
      object-fit: contain;
      height: 150px;
      width: 150px;
    }
  } */

  /* .sauceName {
    text-align: center;

    h2 {
      font-size: 18px;
      color: ${colors.secondaryColor};
    }

    p {
      font-size: 15px;
      color: ${colors.secondaryColor};
    }
  } */

  @media all and (min-width: 361px) and (max-width: 768px) {
    width: 46%;
    min-width: 165px;
    max-width: 220px;
    margin: 7px 3px;
    padding-bottom: 8px;
    background-color: white;
    a {
      div:first-child {
        img {
          height: 150px;
          width: 60vw;
          max-width: 149px;
        }
      }
      div:nth-child(2) {
        h2 {
          font-size: 16px;
        }

        p {
          margin-top: -10px;
          margin-bottom: 0;
          font-size: 14px;
        }
      }
    }

    /* .sauceName {
      h2 {
        font-size: 16px;
      }

      p {
        margin-top: -10px;
        margin-bottom: 0;
        font-size: 14px;
      }
    } */
  }

  @media all and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    min-width: 96%;
    height: 150px;
    margin: 5px 3px;
    padding: 5px;
    a {
      div:first-child {
        display: inline-block !important;
        vertical-align: top;
        height: 90%;
        width: 44%;

        img {
          height: 125px;
          // width: 30vw;
          width: 100%;
        }
      }
      div:nth-child(2) {
        display: inline-block !important;
        padding-left: 5px;
        padding-top: 38px;
        vertical-align: middle;
        height: 100%;
        text-align: left;

        h2 {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }
    }

    /* .sauceBoxImage {
      display: inline-block !important;
      vertical-align: top;
      height: 90%;
      width: 44%;

      img {
        height: 125px;
        // width: 30vw;
        width: 100%;
      }
    } */

    /* .sauceName {
      display: inline-block !important;
      padding-left: 5px;
      padding-top: 38px;
      vertical-align: middle;
      height: 100%;
      text-align: left;

      h2 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    } */
  }
`
