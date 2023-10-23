import { TouchableOpacity, Text } from 'react-native'
import { styled } from 'nativewind'

type ButtonProps = {
  title: string
  onPress?: () => void
}

function ButtonStyled({ title, onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className="py-3 px-8 border-2 rounded-lg border-green-100 bg-blue-100 active:bg-green-100 active:opacity-75 transition duration-150 ease-in-out"
      onPress={onPress}
      {...rest}
    >
      <Text className="text-green-100 text-xl font-bold active:text-black-100">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export const Button = styled(ButtonStyled)
