import React from 'react'
import { View } from 'react-native'
import { twMerge } from 'tailwind-merge'

type IconContainerProps = {
  children: React.ReactNode
  isFocused?: boolean
}

export function IconContainer({ children, isFocused }: IconContainerProps) {
  return (
    <View
      className={twMerge(
        'items-center justify-center ml-2',
        isFocused && 'border-green-100',
      )}
    >
      {children}
    </View>
  )
}
