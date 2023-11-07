import { TextInput, View, Image, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { useAuth } from '../contexts/authContext'

type Inputs = {
  email: string
  password: string
}

const fieldsValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Por favor, informe seu e-mail')
    .email('Por favor, informe um e-mail vaìlido'),
  password: yup.string().required('Por favor, informe sua senha'),
})

export function Login() {
  const auth = useAuth()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(fieldsValidationSchema),
  })

  async function onSubmit({ email, password }: Inputs) {
    try {
      await auth.signIn(email, password)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (
    <Container>
      {/* <Image source={require(""../assets/Algorif-icon.png")} alt="Ícone" /> */}
      <Text className="text-4xl font-bold text-white-200 mb-3">Login</Text>
      <Text className="text-gray-300 font-medium mb-10">Login</Text>
      <View className="flex-row items-center bg-blue-100 px-2 rounded-xl">
        <Feather name="mail" size={24} color="gray" />
        <TextInput
          className="ml-2 p-4 w-full text-gray-400 placeholder-white-100"
          placeholder="Endereço de e-mail"
          keyboardType="email-address"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setValue('email', text)}
        />
      </View>

      <View className="flex-row items-center bg-blue-100 px-2 rounded-xl my-5">
        <Feather name="lock" size={24} color="gray" />
        <TextInput
          className="ml-2 p-4 w-full text-gray-400 placeholder-white-100"
          placeholder="Senha"
          keyboardType="visible-password"
          placeholderTextColor={'gray'}
          onChangeText={(text) => setValue('password', text)}
        />
      </View>

      <Button className="mt-5" title="Entrar" onPress={handleSubmit}/>
    </Container>
  )
}
