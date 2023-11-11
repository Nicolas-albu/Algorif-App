import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { User } from '@firebase/auth'

import { AuthRoutes } from './auth.routes'
import { MainRoutes } from './main.routes'
import { auth } from '@services/auth'

export function Routes() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser)

    return subscriber
  }, [])

  return (
    <NavigationContainer>
      {user ? <MainRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
