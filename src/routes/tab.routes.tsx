import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { Questions } from '@screens/Questions'
import { Account } from '@screens/Account'
import { Home } from '@screens/Home'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="Home"
        component={Home}
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
      <Tab.Screen
        name="Questions"
        component={Questions}
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
      <Tab.Screen
        name="Account"
        component={Account}
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
    </Tab.Navigator>
  )
}
