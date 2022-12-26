import { createContext } from 'react'

export const UserContext = createContext({
  userId: null,
  token: null,
  email: null,
})
