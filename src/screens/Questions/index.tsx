import { FlatList, Text } from 'react-native'

import { Container } from '@components/Controllers/Container'

export function Questions() {
  return (
    <Container className="d-flex items-center justify-center">
      <Text className="text-4xl font-bold text-white-200">Tópicos</Text>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => (
          <Text className="font-bold text-white-200">{item.key}</Text>
        )}
      />
    </Container>
  )
}
