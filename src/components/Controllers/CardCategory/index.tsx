import { TouchableOpacity, ButtonProps, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'
import React from 'react'

type CategoryProps = ButtonProps & {
  title: string
  className?: string
}

function CardCategoryStyled({ title, className, ...rest }: CategoryProps) {
  return (
    <TouchableOpacity
      className={twMerge('p-5 rounded-lg bg-blue-200 flex-row', className)}
      {...rest}
    >
      <MaterialIcons name="category" size={30} color="#3FC79A" />
      <Text className="ml-5 font-bold text-xl text-gray-300">{title}</Text>
    </TouchableOpacity>
  )
}

export const CardCategory = styled(CardCategoryStyled)
