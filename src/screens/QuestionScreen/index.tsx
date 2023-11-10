import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ScrollView, Text, View } from 'react-native'

import { difficultyColor } from '@components/Controllers/CardQuestion'
import { QuestionRoutesParamList } from 'src/routes/questions.routes'
import { CodeEditorForm } from '@components/Forms/CodeEditorForm'
import { Container } from '@components/Controllers/Container'

type Props = NativeStackScreenProps<QuestionRoutesParamList, 'Question'>

export function QuestionScreen({ route }: Props) {
  const { data } = route.params

  return (
    <Container className="flex-1">
      <ScrollView>
        <View className="ml-5 mt-10">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="sword-cross"
              size={35}
              color={difficultyColor(data.difficulty)}
            />
            <Text className="mx-5 max-w-[300px] text-center mb-3 text-2xl font-bold text-white-200">
              {data.title}
            </Text>
          </View>
          <Text className="font-medium text-sm text-left text-gray-500 px-3">
            {data.detailedDescription}
          </Text>
        </View>
        <CodeEditorForm initialCode={data.code} tests={data.test} />
      </ScrollView>
    </Container>
  )
}
