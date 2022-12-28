import background from '../../assets/images/chillyLarge.webp'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'
import {
  BackgroundImageContainer,
  Block,
  BlockImg,
  LogInLogOutButtons,
  Slogan,
  Title,
  UsernameDisplay,
} from './headerStyledComponents'
import colors from '../../styles/colors'
import { logOut } from '../../functions/globalFunctions.ts'

function NavBar() {
  const logOutIcon = <FontAwesomeIcon icon={faArrowRightFromBracket} />
  const logInIcon = <FontAwesomeIcon icon={faArrowRightToBracket} />
  const params = useParams()
  const history = useLocation()
  const pathname = history.pathname
  const userEmail = sessionStorage.getItem('email')

  const mosaicRows = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  }

  const [blockHeight, setBlockHeight] = useState(window.innerHeight)
  const [blockWidth, setBlockWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => {
    setBlockWidth((v) => (v = window.innerWidth))
    setBlockHeight((v) => (v = window.innerHeight))
  })

  /**
   * Function that creates the animated mosaic image in the website header.
   * @param {number} row The index of the row, 0 is the top row, 1 is the second from the top, and so on.
   * @param {number} delay delay property in the css animation
   * @returns a row of 10 tiles with with background images that match each other like a mosaic
   */
  const adjustRowAnimationDelay = (row, delay) => {
    for (let i = 0; i < 10; i++) {
      let animationSpeed = 3000
      if (i === 1 || i === 4 || i === 8) {
        animationSpeed = 1000
      } else if (i === 2 || i === 5 || i === 9) {
        animationSpeed = 750
      } else {
        animationSpeed = 2000
      }
      mosaicRows[row].push(
        <Block
          key={i}
          durationMS={i * 100 + animationSpeed}
          delayMS={delay}
          width={`${blockWidth / 10}`}
          height={`${blockHeight / 10}`}
        >
          <BlockImg
            backgroundPosition={`${(-i * blockWidth) / 10}px ${
              -(blockHeight / 10) * row
            }px`}
            width={`${blockWidth}px`}
            loading="eager"
            src={background}
            alt=" a chilly plant"
          />
        </Block>
      )
    }
    return mosaicRows[row].map((tile) => tile)
  }

  return (
    <header>
      <BackgroundImageContainer width={`${blockWidth}px`}>
        <div>
          {adjustRowAnimationDelay(0, 500)}
          {adjustRowAnimationDelay(1, 1500)}
          {adjustRowAnimationDelay(2, 1000)}
          {adjustRowAnimationDelay(3, 750)}
          {adjustRowAnimationDelay(4, 1750)}
          {adjustRowAnimationDelay(5, 1250)}
          {adjustRowAnimationDelay(6, 1000)}
          {adjustRowAnimationDelay(7, 2000)}
          {adjustRowAnimationDelay(8, 1500)}
        </div>
      </BackgroundImageContainer>
      {pathname === '/signin' ||
      pathname === '/newsauce' ||
      pathname === '/signup' ? (
        <></>
      ) : (
        <LogInLogOutButtons
          mainColor={colors.secondaryButton}
          minorColor={colors.tertiaryColor}
        >
          {!sessionStorage.getItem('token') ? (
            <Link to={'/signin'}>
              <div>
                <button>
                  Log&nbsp;in&nbsp; <span>{logInIcon}</span>
                </button>
              </div>
            </Link>
          ) : (
            <div>
              <button onClick={logOut}>
                Log&nbsp;out&nbsp; <span>{logOutIcon}</span>
              </button>
            </div>
          )}
        </LogInLogOutButtons>
      )}
      {sessionStorage.getItem('token') ? (
        <UsernameDisplay>
          {' '}
          <p>Logged in: {userEmail}</p>{' '}
        </UsernameDisplay>
      ) : (
        <></>
      )}
      <Title>
        <Link to="/">
          <h1>HOT TAKES</h1>
        </Link>
      </Title>
      <Slogan>
        <p>THE WEB'S BEST HOT SAUCE REVIEWS</p>
      </Slogan>
    </header>
  )
}
export default NavBar
