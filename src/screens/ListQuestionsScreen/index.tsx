import { FlatList, View, Text } from 'react-native'
import { useEffect, useState } from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { QuestionRoutesParamList } from 'src/routes/questions.routes'
import { CardQuestion } from '@components/Controllers/CardQuestion'
import { Container } from '@components/Controllers/Container'
import { QuestionService } from '@services/questions'
import { DatabaseTypes } from '@services/database'

type Props = NativeStackScreenProps<QuestionRoutesParamList, 'ListQuestions'>

export function ListQuestionsScreen({ navigation, route }: Props) {
  const [questions, setQuestions] = useState<DatabaseTypes.Question[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { category } = route.params

  useEffect(() => {
    const fetchData = async () => {
      const fetchedQuestions = await QuestionService.getQuestions(category)
      setQuestions(fetchedQuestions)
      setIsLoading(false)
    }
    fetchData()
  }, [category])

  const questionInList = questions.map((question) => ({ question }))

  return isLoading ? (
    <Container className="items-center justify-center">
      <Text className="text-2xl font-bold text-white-200">Carregando...</Text>
    </Container>
  ) : (
    <Container>
      {questions.length === 0 ? (
        <Container className="m-2 items-center justify-center">
          <Text className="text-2xl text-center font-bold text-white-200">
            Nenhuma questão disponivel para {category}
          </Text>
        </Container>
      ) : (
        <View className="flex-1 mt-10">
          <FlatList
            data={questionInList}
            renderItem={({ item }) => (
              <CardQuestion
                data={item.question}
                className="my-2 mx-6"
                onPress={() =>
                  navigation.navigate('Question', { data: item.question })
                }
              />
            )}
          />
        </View>
      )}
    </Container>
  )
}
