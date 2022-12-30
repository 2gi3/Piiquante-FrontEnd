import React from 'react'
import axios from 'axios'

export function logOut() {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('userId')
  sessionStorage.removeItem('UserName')
  sessionStorage.removeItem('email')
  window.location.href = '/'
}

export const automaticLogin2 = async (credentials, email) => {
  try {
    const res = await axios.post(
      'https://secure-harbor-62492.herokuapp.com/api/auth/login',
      credentials
    )
    const data = await res.data
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('userId', data.userId)
    return {
      userId: data.userId,
      token: data.token,
      email: email,
    }
  } catch (error) {
    console.log(error)
  }
}
