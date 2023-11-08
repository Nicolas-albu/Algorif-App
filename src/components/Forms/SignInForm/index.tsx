import { Button } from '@components/Controllers/Button'
import { Input } from '@components/Controllers/Input'
import { useState } from 'react'

import { View } from 'react-native'

export function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSignIn() {
    setIsLoading(true)
  }

  return (
    <View>
      <Input
        classNameExtern="mb-4"
        placeholder="Endereço de e-mail"
        value={email}
        iconName="mail"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        secureTextEntry={false}
      />
      <Input
        placeholder="Senha"
        value={password}
        iconName="lock"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button
        className="mt-8 mb-20 mx-20"
        title="Entrar"
        onPress={handleSignIn}
        isLoading={isLoading}
      />
    </View>
  )
}
