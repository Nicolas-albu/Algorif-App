import { twMerge } from 'tailwind-merge'
import { Text, TouchableOpacity } from 'react-native'
import { styled } from 'nativewind'

type QuestionProps = {
  title: string
  className?: string
}

function QuestionStyled({ title, className, ...rest }: QuestionProps) {
  return (
    <TouchableOpacity
      className={twMerge('p-5 rounded-lg bg-blue-200 flex-row', className)}
      {...rest}
    >
      <Text className="ml-5 font-bold text-xl text-gray-300">{title}</Text>
    </TouchableOpacity>
  )
}

export const Question = styled(QuestionStyled)
