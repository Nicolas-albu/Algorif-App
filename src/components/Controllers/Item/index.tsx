import { TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'
import React from 'react'

type ItemProps = {
  title: string
  className?: string
  iconName: React.ComponentProps<typeof MaterialIcons>['name']
}

function ItemStyled({ title, className, iconName, ...rest }: ItemProps) {
  return (
    <TouchableOpacity
      className={twMerge('p-5 rounded-lg bg-blue-200 flex-row', className)}
      {...rest}
    >
      <MaterialIcons name={iconName} size={30} color="#3FC79A" />
      <Text className="ml-5 font-bold text-xl text-gray-300">{title}</Text>
    </TouchableOpacity>
  )
}

export const Item = styled(ItemStyled)
