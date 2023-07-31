import React from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { CheckboxType, Checkbox } from '@components/ui'

export type ControlledCheckboxProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
} & Omit<CheckboxType, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>(props: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })

  return (
    <Checkbox
      {...{
        onChange,
        checked: value,
        errorMessage: error,
        error: Boolean(error),
        id: props.name,
        ...props,
      }}
    />
  )
}
