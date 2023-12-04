import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { AccountScreen } from '@screens/AccountScreen'
import { QuestionRoutes } from './questions.routes'
import { HomeScreen } from '@screens/HomeScreen'

export type MainRoutesParamList = {
  Home: undefined
  Questions: undefined
  Account: undefined
}

const MainTab = createBottomTabNavigator<MainRoutesParamList>()

export function MainRoutes() {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111827',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 6,
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="home"
              size={size + 5}
              color={focused ? '#3FC79A' : color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Questions"
        component={QuestionRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="sword-cross"
              size={size + 5}
              color={focused ? '#3FC79A' : color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="user"
              size={size + 5}
              color={focused ? '#3FC79A' : color}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </MainTab.Navigator>
  )
}
