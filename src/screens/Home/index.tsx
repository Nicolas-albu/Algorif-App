import { Text } from 'react-native'

import { Container } from '@components/Controllers/Container'

export function Home() {
  return (
    <Container className="d-flex flex-1 flex-row justify-center items-center">
      <Text className="text-4xl font-bold text-white-200">Home!</Text>
    </Container>
  )
}
