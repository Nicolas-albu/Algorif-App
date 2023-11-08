import { ReactNode } from 'react'
import { View } from 'react-native'

import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'

type ContentProps = {
  children: ReactNode
  className?: string
}

function ContentStyled({ children, className, ...rest }: ContentProps) {
  return (
    <View className={twMerge('items-center', className)} {...rest}>
      {children}
    </View>
  )
}

export const Content = styled(ContentStyled)
