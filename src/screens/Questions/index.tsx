import { FlatList, View } from 'react-native'
import { useEffect, useState } from 'react'

import { QuestionService, QuestionTypeFirestore } from '@services/questions'
import { Container } from '@components/Controllers/Container'
import { Question } from '@components/Controllers/Question'

type QuestionProps = {
  topicName: string
}

export function Questions({ topicName }: QuestionProps) {
  const [questions, setQuestions] = useState<QuestionTypeFirestore[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedQuestions = await QuestionService.getQuestions(topicName)
      setQuestions(fetchedQuestions)
    }
    fetchData()
  }, [])

  return (
    <Container>
      <View className="flex-1 mt-10">
        <FlatList
          data={questions.map((question) => ({ key: question.title }))}
          renderItem={({ item }) => (
            <Question title={item.key} className="my-2 mx-5" />
          )}
        />
      </View>
    </Container>
  )
}
