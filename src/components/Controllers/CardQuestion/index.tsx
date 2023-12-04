import { Text, TouchableOpacity, View } from 'react-native'
import { DatabaseTypes } from '@services/database'
import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'

type QuestionProps = {
  data: DatabaseTypes.Question
  onPress?: () => void
  className?: string
}

export const difficultyColor = (difficulty: string) => {
  if (difficulty === 'Difícil') return '#FF0000'
  if (difficulty === 'Médio') return '#FFC700'
  return '#3FC79A'
}

function CardQuestionStyled({
  data,
  className,
  onPress,
  ...rest
}: QuestionProps) {
  return (
    <TouchableOpacity
      className={twMerge('p-5 rounded-lg bg-blue-200 flex-column', className)}
      onPress={onPress}
      {...rest}
    >
      <Text className="ml-5 font-bold text-xl text-gray-300">{data.title}</Text>
      <View className="ml-5 flex-row mb-2">
        <Text
          className="font-bold text-md text-gray-500 mr-5"
          style={{ color: difficultyColor(data.difficulty) }}
        >
          {data.difficulty}
        </Text>
        <Text className="font-bold text-md text-gray-500">{data.topic}</Text>
      </View>
      <Text className="ml-5 font-medium text-md text-gray-500">
        {data.description}
      </Text>
    </TouchableOpacity>
  )
}

export const CardQuestion = styled(CardQuestionStyled)
