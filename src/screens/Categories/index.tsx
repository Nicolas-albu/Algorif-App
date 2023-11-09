import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

import { Container } from '@components/Controllers/Container'
import { Category } from '@components/Controllers/Category'
import { CategoryService } from '@services/categories'

export function Categories() {
  const [categories, setCategories] = useState<string[]>([])
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCategories = await CategoryService.getAll()
      setCategories(fetchedCategories)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Text className="mt-20 ml-5 mb-3 text-4xl font-bold text-white-200">
        Categorias
      </Text>
      <View className="flex-1">
        <FlatList
          data={categories.map((category) => ({ key: category }))}
          renderItem={({ item }) => (
            <Category
              className="my-2 mx-5"
              title={item.key}
              iconName="category"
              onPress={() => {
                navigation.navigate('Questions', { topicName: item.key })
              }}
            />
          )}
        />
      </View>
    </Container>
  )
}
