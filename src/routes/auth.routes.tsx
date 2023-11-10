import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignInScreen } from '@screens/SignInScreen'

export type AuthRoutesParamList = {
  SignIn: undefined
}

const AuthStack = createNativeStackNavigator<AuthRoutesParamList>()

export function AuthRoutes() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
    </AuthStack.Navigator>
  )
}
