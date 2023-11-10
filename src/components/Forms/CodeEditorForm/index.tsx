/* eslint-disable no-eval */
/* eslint-disable no-new-func */
import { SafeAreaView } from 'react-native-safe-area-context'
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor'
import { twMerge } from 'tailwind-merge'
import { View } from 'react-native'

import { Button } from '@components/Controllers/Button'
import { FirebaseTypes } from '@services/firebase'
import React, { useState } from 'react'

type CodeEditorViewProps = {
  initialCode?: string
  className?: string
  fontSize?: number
  tests: FirebaseTypes.Test[]
}

export function CodeEditorForm({
  className,
  initialCode,
  tests,
  ...rest
}: CodeEditorViewProps) {
  const [code, setCode] = useState(initialCode)

  function handleSubmit() {
    const testsPassed = '\n let passedTests = []'
    const passed = '\n let passed = true'
    let validating = code + testsPassed + passed
    const testsDone = ` 
      if (passed === true) {
        console.log(true)
      } else {
        console.log(false)
      }
      `

    const addValidatorTest = tests.map((test) => {
      const input = test.input
        .split(',')
        .map((item) => {
          const isStringOnlyLetters =
            /^[a-zA-ZáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛÀàèìòùÈÌÒÙÇçÃãÕõ]+$/.test(item.trim())
          if (isStringOnlyLetters) {
            return `"${item.trim()}"`
          } else {
            return item.trim()
          }
        })
        .join(', ')

      return `
        if(main(${input}) === "${test.output}") {
          passedTests.push(true)   
        } else {
          passed = false
          passedTests.push(false) 
        }
        `
    })

    addValidatorTest.forEach((test) => {
      validating += test + testsDone
    })

    try {
      console.log(validating)
      console.log(eval(validating!))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <View className={twMerge('flex-1 mb-10', className)} {...rest}>
        <SafeAreaView className="items-center">
          <CodeEditor
            style={{
              fontSize: 15,
              inputLineHeight: 15,
              highlighterLineHeight: 15,
              marginTop: 20,
              width: '90%',
            }}
            syntaxStyle={CodeEditorSyntaxStyles.dracula}
            initialValue={initialCode}
            language="javascript"
            onChange={setCode}
            autoFocus={false}
            showLineNumbers
          ></CodeEditor>
        </SafeAreaView>
      </View>
      <Button
        title="Enviar"
        className="mx-10 mb-5"
        onPress={handleSubmit}
      ></Button>
    </>
  )
}
