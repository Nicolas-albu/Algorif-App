import {
  TouchableOpacity,
  ButtonProps as TouchableOpacityProps,
  Text,
} from 'react-native'
import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'

type ButtonProps = TouchableOpacityProps & {
  title: string
  className?: string
  isLoading?: boolean
}

function ButtonStyled({
  title,
  className,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        'py-3 justify-center items-center bg-green-100 rounded-lg border border-green-100',
        className,
      )}
      {...rest}
    >
      <Text className="text-center text-blue-100 text-xl font-bold">
        {isLoading ? '...' : title}
      </Text>
    </TouchableOpacity>
  )
}

export const Button = styled(ButtonStyled)
