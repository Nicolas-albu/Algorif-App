import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Markdown from '@valasolutions/react-native-markdown'
import { ScrollView, Text, View } from 'react-native'
import { useState } from 'react'

import { difficultyColor } from '@components/Controllers/CardQuestion'
import { QuestionRoutesParamList } from 'src/routes/questions.routes'
import { CodeEditorForm } from '@components/Forms/CodeEditorForm'
import { Container } from '@components/Controllers/Container'
import { Title } from '@components/Controllers/Title'

type Props = NativeStackScreenProps<QuestionRoutesParamList, 'Question'>

export function QuestionScreen({ route }: Props) {
  const [isSolved, setIsSolved] = useState(false)
  const { data } = route.params

  return (
    <Container className="flex-1">
      {isSolved ? (
        <View className="flex-1 justify-center items-center">
          <Title>Parabéns!</Title>
        </View>
      ) : (
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
            <Markdown style={{ body: { color: '#CCCFD9', fontSize: 14 } }}>
              {data.detailedDescription}
            </Markdown>
          </View>
          <CodeEditorForm data={data} setSolved={setIsSolved} />
        </ScrollView>
      )}
    </Container>
  )
}
