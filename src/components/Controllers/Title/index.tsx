import { Text } from 'react-native'
import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'

type TitleProps = {
  children: ReactNode
  className?: string
}

function TitleStyled({ children, className, ...rest }: TitleProps) {
  return (
    <Text
      className={twMerge('text-4xl font-bold text-white-200', className)}
      {...rest}
    >
      {children}
    </Text>
  )
}

export const Title = styled(TitleStyled)
