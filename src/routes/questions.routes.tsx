import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ListCategoriesScreen } from '@screens/ListCategoriesScreen'
import { ListQuestionsScreen } from '@screens/ListQuestionsScreen'
import { QuestionScreen } from '@screens/QuestionScreen'
import { FirebaseTypes } from '@services/firebase'

export type QuestionRoutesParamList = {
  ListCategories: undefined
  ListQuestions: { category: string }
  Question: { data: FirebaseTypes.Question }
}

const QuestionStack = createNativeStackNavigator<QuestionRoutesParamList>()

export function QuestionRoutes() {
  return (
    <QuestionStack.Navigator screenOptions={{ headerShown: false }}>
      <QuestionStack.Screen
        name="ListCategories"
        component={ListCategoriesScreen}
      />
      <QuestionStack.Screen
        name="ListQuestions"
        component={ListQuestionsScreen}
      />
      <QuestionStack.Screen name="Question" component={QuestionScreen} />
    </QuestionStack.Navigator>
  )
}
