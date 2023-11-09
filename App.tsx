import { View } from 'react-native'

import { SignIn } from '@screens/SignIn'

import { Routes } from 'src/routes'

export default function App() {
  return (
    <View className="flex-1 bg-blue-300">
      <Routes />
      {/* <SignIn /> */}
    </View>
  )
}
