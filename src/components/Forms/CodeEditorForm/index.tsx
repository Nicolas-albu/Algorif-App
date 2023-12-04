/* eslint-disable no-new-func */
import { SafeAreaView } from 'react-native-safe-area-context'
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor'
import { twMerge } from 'tailwind-merge'
import { View } from 'react-native'
import { useState } from 'react'

import { Button } from '@components/Controllers/Button'
import { QuestionService } from '@services/questions'
import { DatabaseTypes } from '@services/database'
import { UserServices } from '@services/users'

type CodeEditorFormProps = {
  setSolved: (value: boolean) => void
  data: DatabaseTypes.Question
  className?: string
  fontSize?: number
}

function getAttributesNames(func: string) {
  const parameterRegex = /\(([^)]+)\)/
  const match = func.match(parameterRegex)

  return match && match[1]
    ? match[1].split(',').map((param) => param.trim())
    : []
}

function getFunctionBody(func: string) {
  const bodyRegex = /(?:\{)([\s\S]+)(?:\})/
  const match = func.match(bodyRegex)

  return match && match[1] ? match[1].trim() : ''
}

export function CodeEditorForm({
  data: { code: initialCode, test: tests, ...data },
  setSolved,
  className,
  ...rest
}: CodeEditorFormProps) {
  const [testsPassed, setTestsPassed] = useState<boolean[]>([])
  const [code, setCode] = useState(initialCode)

  function updateStatusQuestion() {
    const isCorrect = testsPassed.every((result) => result === true)

    if (isCorrect) {
      UserServices.updateScore()
      setSolved(true)
    }
    QuestionService.setQuestionStatus(
      data.title,
      isCorrect,
      data.difficulty,
      data.topic,
      initialCode,
    )
  }

  function handleSubmit() {
    const testingCode = new Function(
      ...getAttributesNames(code),
      getFunctionBody(code),
    )

    setTestsPassed(tests.map((test) => testingCode(test.input) === test.output))
    updateStatusQuestion()
  }

  return (
    <>
      <View className={twMerge('flex-1 mb-10', className)} {...rest}>
        <View className="flex-1 ml-5 flex-row">
          {testsPassed.map((result, index) => (
            <View
              key={index}
              className={twMerge(
                'w-5 h-5 rounded-md',
                result ? 'bg-green-300' : 'bg-red-300',
              )}
            />
          ))}
        </View>
        <SafeAreaView className="items-center">
          <CodeEditor
            style={{
              fontSize: 15,
              inputLineHeight: 15,
              highlighterLineHeight: 15,
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
