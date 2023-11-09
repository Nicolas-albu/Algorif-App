import { yupResolver } from '@hookform/resolvers/yup'
import auth from '@react-native-firebase/auth'
import { Alert, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'

import { ControlledInput } from '@components/Controllers/ControlledInput'
import { Button } from '@components/Controllers/Button'

type SignInData = {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
})

export function SignInForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(schema),
  })
  const [isLoading, setIsLoading] = useState(false)

  function handleSignIn(data: SignInData) {
    setIsLoading(true)
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('Signed in!')
      })
      .catch((error) => {
        Alert.alert('Opa! Deu erro hein!', error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View>
      <ControlledInput
        placeholder="Endereço de e-mail"
        keyboardType="email-address"
        classNameExtern="mb-4"
        control={control}
        iconName="mail"
        name="email"
        error={errors.email?.message}
      />
      <ControlledInput
        placeholder="Senha"
        classNameExtern="mb-8"
        control={control}
        iconName="lock"
        name="password"
        secureTextEntry
        error={errors.password?.message}
      />
      <Button
        className="mt-8 mx-20"
        title="Entrar"
        onPress={handleSubmit(handleSignIn)}
        isLoading={isLoading}
      />
    </View>
  )
}
