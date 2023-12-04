import { Text } from 'react-native'
import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'
import { styled } from 'nativewind'

type SubTitleProps = {
  children: ReactNode
  className?: string
}

function SubTitleStyled({ children, className, ...rest }: SubTitleProps) {
  return (
    <Text className={twMerge('font-medium text-gray-300', className)} {...rest}>
      {children}
    </Text>
  )
}

export const SubTitle = styled(SubTitleStyled)
