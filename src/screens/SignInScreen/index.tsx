import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'

import { Container } from '@components/Controllers/Container'
import { SubTitle } from '@components/Controllers/SubTitle'
import { Content } from '@components/Controllers/Content'
import { SignInForm } from '@components/Forms/SignInForm'
import { Title } from '@components/Controllers/Title'

export function SignInScreen() {
  return (
    <Container className="justify-center">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <Content>
            <Image
              className="mb-5"
              source={require('@assets/algorif-icon.png')}
              alt="Ícone"
            />
            <Title className="mb-2">AlgorIF</Title>
            <SubTitle className="mb-10">Login</SubTitle>
            <SignInForm />
          </Content>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
