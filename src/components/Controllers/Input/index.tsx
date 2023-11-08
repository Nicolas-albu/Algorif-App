import { styled } from 'nativewind'
import { TextInput, TextInputProps, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { twMerge } from 'tailwind-merge'

type Inputs = TextInputProps & {
  iconName?: any
  classNameInput?: string
  classNameExtern?: string
}

function InputStyled({
  classNameInput,
  classNameExtern,
  iconName,
  ...rest
}: Inputs) {
  return (
    <View
      className={twMerge(
        'flex-row items-center bg-blue-100 px-2 rounded-xl mx-9',
        classNameExtern,
      )}
    >
      <Feather name={iconName} size={24} color="gray" />
      <TextInput
        className={twMerge('ml-2 p-4 w-full text-gray-400', classNameInput)}
        placeholderTextColor={'gray'}
        {...rest}
      />
    </View>
  )
}

export const Input = styled(InputStyled)
