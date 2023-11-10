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

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await CategoryService.getAll()
      setCategories(fetchedCategories)
    }

    fetchData()
  }, [])

  const categoriesInList = categories.map((category) => ({ key: category }))

  return (
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
