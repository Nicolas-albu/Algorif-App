import { Control, Controller } from 'react-hook-form'

import { Input, InputProps } from '@components/Controllers/Input'

type ControllerInputProps = InputProps & {
  control: Control<any>
  name: string
}

export function ControlledInput({
  control,
  name,
  ...rest
}: ControllerInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input value={value} onChangeText={onChange} {...rest} />
      )}
    />
  )
}
