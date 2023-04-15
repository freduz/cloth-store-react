import { createContext, useContext, useEffect, useReducer } from 'react'
import { authStateChangeListener } from '../utils/firebase.util'
import { createUser } from '../services/user-service'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

const USER_ACTIONS = {
  SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const INITIAL_STATE = {
  currentUser:null
}

const userReducer = (_state, action) => {
  const { type, payload } = action
  switch(type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ..._state,
        currentUser:payload
      }

    default:
      throw new Error(`Unhandled type ${type} in user reducer`)

  }
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
  const setCurrentUser = (user) => {
    dispatch({ type:USER_ACTIONS.SET_CURRENT_USER, payload:user })
  }

  useEffect(() => {
    const subscription = authStateChangeListener((user) => {
      if (user) {
        createUser(user)
      }
      setCurrentUser(user)
    })

    return subscription
  }, [])
  const user = { currentUser, setCurrentUser }
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const GetCurrentUser = () => useContext(UserContext)
