import { TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { Container } from '../components/Container'
import { Button } from '../components/Button'

export function Login() {
  return (
    <Container>
      <View className="flex-row items-center bg-blue-100 px-2 rounded-xl">
        <Feather name="mail" size={24} color="gray" />
        <TextInput
          className="ml-2 p-4 w-full text-gray-400 placeholder-white-100"
          placeholder="Endereço de e-mail"
          keyboardType="email-address"
        />
      </View>

      <View className="flex-row items-center bg-blue-100 px-2 rounded-xl my-5">
        <Feather name="lock" size={24} color="gray" />
        <TextInput
          className="ml-2 p-4 w-full text-gray-400 placeholder-white-100"
          placeholder="Senha"
          keyboardType="visible-password"
        />
      </View>

      <Button className="mt-5" title="Entrar" />
    </Container>
  )
}
