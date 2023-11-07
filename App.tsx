// import { useEffect, useState, useCallback } from 'react'
import { View } from 'react-native'
import { Login } from './src/screens/Login'
// import Entypo from '@expo/vector-icons/Entypo'
// import * as SplashScreen from 'expo-splash-screen'
// import * as Font from 'expo-font'

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync()

export default function App() {
  // const [appIsReady, setAppIsReady] = useState(false)

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync({
  //         Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  //       })

  //       await Font.loadAsync(Entypo.font)
  //     } catch (err) {
  //       console.warn(err)
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true)
  //     }
  //   }

  //   prepare()
  // }, [])

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync()
  //   }
  // }, [appIsReady])

  // if (!appIsReady) {
  //   return null
  // }

  return (
    // onLayout={onLayoutRootView}
    <View className="flex-1 bg-blue-300">
      <Login />
    </View>
  )
}
