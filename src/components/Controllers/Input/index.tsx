import { TextInput, TextInputProps, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { twMerge } from 'tailwind-merge'
import React, { useState } from 'react'
import { styled } from 'nativewind'

import { IconContainer } from '@components/Utilities/IconContainer'

export type InputProps = TextInputProps & {
  iconName?: React.ComponentProps<typeof Feather>['name']
  classNameInput?: string
  classNameExtern?: string
  error?: string
}

function InputStyled({
  classNameInput,
  classNameExtern,
  iconName,
  value,
  error,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <>
      <View className={classNameExtern}>
        <View className={'flex-row px-2 mx-9 rounded-xl bg-blue-100'}>
          <IconContainer isFocused={isFocused}>
            <Feather
              name={iconName}
              size={24}
              color={
                error ? 'red' : isFocused || isFilled ? '#3FC79A' : '#C0C4CE'
              }
            />
          </IconContainer>
          <TextInput
            className={twMerge(
              'ml-2 p-4 w-full font-medium',
              error
                ? 'text-red-600'
                : (isFocused || isFilled) && 'text-green-100',
              classNameInput,
            )}
            placeholderTextColor={
              error ? 'red' : isFocused || isFilled ? '#3FC79A' : '#C0C4CE'
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            {...rest}
          />
        </View>
        {error && (
          <Text className="text-right mx-12 mt-1 text-red-600">{error}</Text>
        )}
      </View>
    </>
  )
}

export const Input = styled(InputStyled)
