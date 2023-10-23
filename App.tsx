import { View } from 'react-native'
import { Login } from './src/screens/Login'
import {
  useFonts,
  Poppins_400Regular as Poppins,
} from '@expo-google-fonts/poppins'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins,
  })

  return (
    <View className="flex-1 bg-blue-300">
      <Login />
    </View>
  )
}
