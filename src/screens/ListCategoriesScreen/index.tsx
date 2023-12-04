import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

import { QuestionRoutesParamList } from 'src/routes/questions.routes'
import { CardCategory } from '@components/Controllers/CardCategory'
import { Container } from '@components/Controllers/Container'
import { CategoryService } from '@services/categories'

type Props = NativeStackScreenProps<QuestionRoutesParamList, 'ListCategories'>

export function ListCategoriesScreen({ navigation }: Props) {
  const [categories, setCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await CategoryService.getAll()
      setCategories(fetchedCategories)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  const categoriesInList = categories.map((category) => ({ key: category }))

  return isLoading ? (
    <Container className="items-center justify-center">
      <Text className="text-2xl font-bold text-white-200">Carregando...</Text>
    </Container>
  ) : (
    <Container>
      <Text className="mt-20 ml-5 mb-3 text-4xl font-bold text-white-200">
        Categorias
      </Text>
      <View className="flex-1">
        <FlatList
          data={categoriesInList}
          renderItem={({ item }) => (
            <CardCategory
              className="my-2 mx-5"
              title={item.key}
              onPress={() => {
                navigation.navigate('ListQuestions', { category: item.key })
              }}
            />
          )}
        />
      </View>
    </Container>
  )
}
