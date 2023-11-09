import { FlatList, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

import { Container } from '@components/Controllers/Container'
import { CategoryService } from '@services/categories'
import { Item } from '@components/Controllers/Item'

export function Questions() {
  const [categories, setCategories] = useState<string[]>([])

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
        Tópicos
      </Text>
      <View className="flex-1">
        <FlatList
          data={categories.map((category) => ({ key: category }))}
          renderItem={({ item }) => (
            <Item className="my-2 mx-5" title={item.key} iconName="category" />
          )}
        />
      </View>
    </Container>
  )
}
