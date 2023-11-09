import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Categories } from '@screens/Categories'
import { Questions } from '@screens/Questions'

const Stack = createNativeStackNavigator()

export function QuestionRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Questions" component={Questions} />
    </Stack.Navigator>
  )
}
