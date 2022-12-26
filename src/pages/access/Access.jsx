import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightToBracket,
  faAt,
  faUsers,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Container,
  InContainer,
  AlternativeAccess,
  AccessInputBox,
} from './styledComponents'
import { PrimaryButton } from '../../styles/buttons'
import colors from '../../styles/colors'
import { UserContext } from '../../store/Context'
import { automaticLogin2 } from '../../functions/globalFunctions'

function Access() {
  const { user2, user2Set } = useContext(UserContext)
  const navigate = useNavigate()
  const goToHomepage = () => navigate('/')
  const [requiredAction, setRequiredAction] = useState('login')
  const [dynamicText, setDynamicText] = useState("Don't")
  const [AlternativeAccessDisplay, setAlternativeAccessDisplay] =
    useState('block')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = useRef(null)
  const [passwordType, setPasswordType] = useState('password')
  // const re = /\S+@\S+\.\S+/g
  const userData = {
    email,
    password,
  }

  //
  const switchButtons = () => {
    if (requiredAction === 'login') {
      setRequiredAction('signup')
      setDynamicText('Already')
    } else {
      setRequiredAction('login')
      setDynamicText("Don't")
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  //log in or pass 'signup' as the second argument to create an account
  const Access = async (e, endpoint = 'login') => {
    e.preventDefault()
    sessionStorage.setItem('email', email)

    try {
      const res = await axios.post(
        `https://secure-harbor-62492.herokuapp.com/api/auth/${endpoint}`,
        userData
      )
      const data = await res.data
      if (data.message === 'User added successfully!') {
        await user2Set(await automaticLogin2(userData, email))
        goToHomepage()
      } else {
        await user2Set({
          userId: data.userId,
          token: data.token,
          email: email,
        })
        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('userId', data.userId)
        goToHomepage()
      }
    } catch (error) {
      console.log(error)
      // setError(true)
    }
  }

  return (
    <main>
      <Container>
        <InContainer>
          <form onSubmit={(event) => Access(event, requiredAction)}>
            <AccessInputBox>
              <input
                ref={inputRef}
                type="email"
                name="userEmail"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faAt} />
              </div>
            </AccessInputBox>
            <AccessInputBox>
              <input
                type={passwordType}
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                type="button"
                onClick={() => {
                  passwordType === 'password'
                    ? setPasswordType('text')
                    : setPasswordType('password')
                }}
                className="icon"
              >
                {passwordType === 'password' ? (
                  <FontAwesomeIcon icon={faEyeSlash} />
                ) : (
                  <FontAwesomeIcon icon={faEye} />
                )}
              </button>
            </AccessInputBox>
            <div>
              <PrimaryButton
                majorColor={colors.primaryColor}
                minorColor={colors.secondaryColor}
                type="submit"
                value="submit"
              >
                {requiredAction === 'login' ? (
                  <span>
                    Log&nbsp;in <FontAwesomeIcon icon={faArrowRightToBracket} />
                  </span>
                ) : (
                  <span>
                    Sign&nbsp;up <FontAwesomeIcon icon={faUsers} />
                  </span>
                )}
              </PrimaryButton>
            </div>
          </form>
          <AlternativeAccess appear={AlternativeAccessDisplay}>
            {dynamicText} have an account?
            <button
              onClick={() => {
                switchButtons()
              }}
            >
              {requiredAction === 'login' ? (
                <span>
                  Sign&nbsp;up <FontAwesomeIcon icon={faUsers} />
                </span>
              ) : (
                <span>
                  Log&nbsp;in <FontAwesomeIcon icon={faArrowRightToBracket} />
                </span>
              )}
            </button>
          </AlternativeAccess>
        </InContainer>
      </Container>
    </main>
  )
}

export default Access
