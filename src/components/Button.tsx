import { TouchableOpacity, Text } from 'react-native'
import { styled } from 'nativewind'

type ButtonProps = {
  title: string
  onPress?: () => void
}

function ButtonStyled({ title, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="py-3 px-7 border-2 border-green-100 bg-blue-100 active:bg-green-100 rounded-xl active:opacity-75 transition duration-150 ease-in-out"
      onPress={onPress}
      {...rest}
    >
      <Text className="text-green-100 text-xl active:text-black-100">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export const Button = styled(ButtonStyled)
