import { createContext, useContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { auth } from '../services/firebase'

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
}

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
}

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload

    return {
      ...state,
      ...(user
        ? {
            isAuthenticated: true,
            isLoading: false,
            user,
          }
        : {
            isLoading: false,
          }),
    }
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user,
    }
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    }
  },
}

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export const AuthContext = createContext({ undefined })

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const initialize = async () => {
    //const localStorage = localStorage()
    const user = JSON.parse(localStorage.getItem('@AuthFirebase:metadata'))
    if (user) {
      signIn(user)
    }
    //auth.currentUser = user
    try {
      const isAuthenticated = auth.currentUser ? true : false

      if (isAuthenticated) {
        const user = auth.currentUser

        dispatch({
          type: HANDLERS.INITIALIZE,
          payload: user,
        })
      } else {
        dispatch({
          type: HANDLERS.INITIALIZE,
        })
      }
    } catch (err) {
      console.error(err)
      dispatch({
        type: HANDLERS.INITIALIZE,
      })
    }
  }

  useEffect(() => {
    initialize().catch(console.error)
  }, [])

  const signIn = (user) => {
    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user,
    })
  }

  const signOut = async () => {
    await auth.signOut()
    dispatch({
      type: HANDLERS.SIGN_OUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

export const AuthConsumer = AuthContext.Consumer

export const useAuth = () => useContext(AuthContext)
