import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { styled } from 'nativewind'

type ContainerProps = {
  children: ReactNode
}

function ContainerStyled({ children, ...rest }: ContainerProps) {
  return (
    <View
      className="flex-1 flex-column items-center justify-center mx-9"
      {...rest}
    >
      {children}
    </View>
  )
}

export const Container = styled(ContainerStyled)
