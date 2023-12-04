import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from 'yup'

import { ControlledInput } from '@components/Controllers/ControlledInput'
import { Button } from '@components/Controllers/Button'
import { auth } from '@services/auth'

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
      .catch(() => Alert.alert('Opa! Deu erro hein!'))
      .finally(() => setIsLoading(false))
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
        autoCapitalize="none"
        error={errors.email?.message}
      />
      <ControlledInput
        placeholder="Senha"
        classNameExtern="mb-8"
        control={control}
        iconName="lock"
        name="password"
        secureTextEntry
        autoCapitalize="none"
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
