import { ReactNode } from 'react'
import { View } from 'react-native'

import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'

type ContentProps = {
  children: ReactNode
  className?: string
}

function ContainerStyled({ children, className, ...rest }: ContentProps) {
  return (
    <View className={twMerge('flex-1 bg-blue-300', className)} {...rest}>
      {children}
    </View>
  )
}

export const Container = styled(ContainerStyled)
