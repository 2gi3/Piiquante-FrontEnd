import { createContext } from 'react'
import { UserInterface } from '../types/interfaces'

export const UserContext = createContext<UserInterface>({
  userId: null,
  token: null,
  email: null,
})
