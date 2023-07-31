import React from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@components/ui'

export type ControlledTextFieldProps<T extends FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
} & Omit<TextFieldProps, 'onChange' | 'value' | 'id'>

export const ControlledTextField = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.name,
    control: props.control,
  })

  return <TextField {...props} {...field} errorMessage={error?.message} id={props.name} />
}
