import React, { useEffect, useState, useRef, useReducer } from 'react'
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
} from './saucePageStyledComponents'
import colors from '../../styles/colors'
import { SauceState } from '../../types/interfaces'
import { UserID } from '../../types/enums'

function SaucePage() {
  const like = <FontAwesomeIcon icon={faThumbsUp} />
  const dislike = <FontAwesomeIcon icon={faThumbsDown} />

  const access_token = sessionStorage.getItem('token')
  let userId
  sessionStorage.getItem('userId')
    ? (userId = sessionStorage.getItem('userId'))
    : (userId = '')
  let sauceCreator
  const params = useParams()
  // const [sauce, setSauce] = useState<SauceInterface>()
  // const [userLiked, setUserLiked] = useState<any>([])
  // const [userDisliked, setUserDisliked] = useState<any>([])
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
    dispatch({ type: 'SET_SAUCE', sauce: res.data })
    dispatch({ type: 'SET_USER_LIKED', userLiked: res.data.userLiked })
    dispatch({ type: 'SET_USER_DISLIKED', userDisliked: res.data.userDisliked })
  }

  const deleteSauce = () => {
    axios
      .delete(
        `https://secure-harbor-62492.herokuapp.com/api/sauces/${params.id}`,
        {
          headers: {
            Authorization: `token ${access_token}`,
          },
        }
      )
      .then((response) => console.log('Delete successful'))
      .catch((error) => {
        console.log(error.message)
        console.error('There was an error!', error)
      })
    window.location.href = '/'
  }

  const likeSauce = async (e, likeValue) => {
    e.preventDefault()
    if (!sessionStorage.getItem('token')) {
      alert('please log in to use the like buttons')
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
        console.log('sauce liked')
      })
      .catch((err) => {
        console.log(err)
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
            <button onClick={(e) => likeSauce(e, 1)}>
              <i>{like}</i>
              <span>{state.sauce?.likes}</span>
            </button>
            <button onClick={(e) => likeSauce(e, -1)}>
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
              <div>
                <Link to={`updatesauce/${params.id}`}>
                  <button>
                    <span>MODIFY</span>
                  </button>
                </Link>
                <button onClick={(event) => deleteSauce()}>
                  <span>DELETE</span>
                </button>
              </div>
            ) : (
              <></>
            )}
          </ControlButtons>
        </SauceInfo>
      </SauceContainer>
    </div>
  )
}
export default SaucePage
