import React, {
  useEffect,
  useState,
  useRef,
  useReducer,
  useContext,
} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import {
  SauceContainer,
  SauceImage,
  SauceInfo,
  LikeButtons,
  ControlButtons,
} from './saucePageStyledComponents.ts'
import colors from '../../styles/colors'
import { SauceState } from '../../types/interfaces'
import Confirmation from '../../components/confirmation/Confirmation.tsx'
import { Loader } from '../../styles/styledComponents'
import { UserContext } from '../../store/Context.tsx'
import { UserInterface } from '../../types/interfaces'

function SaucePage() {
  const { user2 } = useContext<UserInterface>(UserContext)
  const access_token = user2.token
  const [Message, setMessage] = useState<string | null>(null)

  const like = <FontAwesomeIcon icon={faThumbsUp} />
  const dislike = <FontAwesomeIcon icon={faThumbsDown} />

  let userId
  sessionStorage.getItem('userId')
    ? (userId = sessionStorage.getItem('userId'))
    : (userId = '')
  let sauceCreator
  const params = useParams()
  let payloadValue = useRef<number>()

  const initialState: SauceState = {
    sauce: null,
    userLiked: [],
    userDisliked: [],
    // payloadValue: 0,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function reducer(state: SauceState, action) {
    switch (action.type) {
      case 'SET_SAUCE':
        return { ...state, sauce: action.sauce }
      case 'SET_USER_LIKED':
        return { ...state, userLiked: action.userLiked }
      case 'SET_USER_DISLIKED':
        return { ...state, userDisliked: action.userDisliked }
      // case 'SET_PAYLOAD_VALUE':
      //   return { ...state, payloadValue: action.payloadValue };
      default:
        throw new Error('Invalid action type')
    }
  }

  const getSauce = async () => {
    const res = await axios.get(
      `https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
      {
        headers: {
          Authorization: `token ${access_token}`,
        },
      }
    )
    // setSauce(await res.data)
    // setUserLiked(sauce?.userLiked)
    // setUserDisliked(sauce?.userDisliked)
    const data = await res.data
    // console.log(data)
    dispatch({ type: 'SET_SAUCE', sauce: data })
    dispatch({ type: 'SET_USER_LIKED', userLiked: data.userLiked })
    dispatch({ type: 'SET_USER_DISLIKED', userDisliked: data.userDisliked })
  }

  const deleteSauce = () => {
    setMessage('deletion in progress')
    axios
      .delete(
        `https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
        {
          headers: {
            Authorization: `token ${access_token}`,
          },
        }
      )
      .then((response) => {
        // setMessage(response.data.message)
        console.log(response.data.message)
      })
      .then(() => (window.location.href = '/'))
      .catch((error) => {
        setMessage(error.message)
        console.error(error.message)
      })
  }

  const likeSauce = async (e, likeValue) => {
    e.preventDefault()
    if (user2.token === null) {
      alert('please log in to use the like buttons')
      console.log('please log in to use the like buttons')
    }
    // let history = userLiked.includes(userId)
    // let dislikeHistory = userDisliked.includes(userId)
    // console.log(dislikeHistory)
    // console.log(userLiked)
    // console.log(userDisliked)
    let history = state.userLiked.includes(userId)
    let dislikeHistory = state.userDisliked.includes(userId)
    console.log(dislikeHistory)
    console.log(state.userLiked)
    console.log(state.userDisliked)

    if (likeValue === 1) {
      if (history === true || dislikeHistory === true) {
        payloadValue.current = 0
        // dispatch({ type: 'SET_PAYLOAD_VALUE', payloadValue: 0 });
      } else {
        payloadValue.current = likeValue
        // dispatch({ type: 'SET_PAYLOAD_VALUE', payloadValue: likeValue });
      }
    } else {
      if (dislikeHistory === true || history === true) {
        dislikeHistory = false
        payloadValue.current = 0
        // dispatch({ type: 'SET_PAYLOAD_VALUE', payloadValue: 0 });
      } else {
        dislikeHistory = true
        payloadValue.current = likeValue
        // dispatch({ type: 'SET_PAYLOAD_VALUE', payloadValue: likeValue });
      }
    }

    const data = {
      userId,
      like: payloadValue.current,
      // like: state.payloadValue,
    }

    axios
      .post(
        `https://secure-harbor-62492.herokuapp.com/api/sauces/${state.sauce?._id}/like`,
        data,
        {
          headers: {
            Authorization: `token ${access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((err) => {
        console.log(err.data.message)
      })
  }

  useEffect(
    () => {
      getSauce()
      // sauceCreator = sauce?.userId
    }
    // [liked]
  )
  return (
    <div>
      <SauceContainer>
        {!state.sauce ? (
          <Loader data-testid="pageLoader" />
        ) : (
          <>
            <SauceImage>
              <img
                alt="A sauce"
                //  src={sauce?.imageUrl}
                src={state.sauce?.imageUrl}
              />
            </SauceImage>
            <SauceInfo
              mainColor={colors.secondaryColor}
              minorColor={colors.primaryColor}
            >
              <h1>Sauce name:</h1>
              <h2>{state.sauce?.name}</h2>
              <h3>Manufacturer:</h3>
              <p>{state.sauce?.manufacturer}</p>
              <h3>Description:</h3>
              <p>{state.sauce?.description}</p>
              <h3>Main ingredient:</h3>
              <p>{state.sauce?.mainPepper}</p>
              <LikeButtons>
                <button
                  onClick={(e) => likeSauce(e, 1)}
                  data-testid="likeButton"
                >
                  <i data-testid="likes">{like}</i>
                  <span>{state.sauce?.likes}</span>
                </button>
                <button
                  onClick={(e) => likeSauce(e, -1)}
                  data-testid="dislikeButton"
                >
                  <i>{dislike}</i>
                  <span>{state.sauce?.dislikes}</span>
                </button>
              </LikeButtons>
              <ControlButtons
                mainColor={colors.secondaryColor}
                minorColor={colors.primaryColor}
              >
                <Link to="/">
                  <button>
                    <span>Back to homepage</span>
                  </button>
                </Link>
                {state.sauce?.userId === userId ? (
                  Message === null ? (
                    <div>
                      <Link to={`updatesauce/${params.id}`}>
                        <button>
                          <span>MODIFY</span>
                        </button>
                      </Link>
                      <button
                        onClick={() =>
                          setMessage('Do you want to delete this sauce?')
                        }
                        //  onClick={(event) => deleteSauce()}
                      >
                        <span>DELETE</span>
                      </button>
                    </div>
                  ) : (
                    <Confirmation
                      message={Message}
                      setMessage={setMessage}
                      goAhead={deleteSauce}
                    />
                  )
                ) : (
                  <></>
                )}
              </ControlButtons>
            </SauceInfo>
          </>
        )}
      </SauceContainer>
    </div>
  )
}
export default SaucePage
