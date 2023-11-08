import { Image } from 'react-native'

import { Container } from '@components/Controllers/Container'
import { SubTitle } from '@components/Controllers/SubTitle'
import { Content } from '@components/Controllers/Content'
import { SignInForm } from '@components/Forms/SignInForm'
import { Title } from '@components/Controllers/Title'

export function SignIn() {
  return (
    <Container className="justify-center">
      <Content>
        <Image
          className="mb-5"
          source={require('@assets/algorif-icon.png')}
          alt="Ícone"
        />
      </Content>
      <Content className="justify-center">
        <Title className="mb-2">AlgorIF</Title>
        <SubTitle className="mb-10">Login</SubTitle>
        <SignInForm />
      </Content>
    </Container>
  )
}
