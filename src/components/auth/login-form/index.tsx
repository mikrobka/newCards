import React from 'react'

import { useForm } from 'react-hook-form'

import { Button } from '@components/ui/button'
import { ControlledCheckbox } from '@components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@components/ui/controlled/controlled-text-field'

type Form = {
  login: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<Form>()

  const onSubmit = handleSubmit(data => console.log(data))

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ControlledTextField label={'Login'} name={'login'} control={control} />
        <ControlledTextField label={'Password'} name={'password'} control={control} />
        <ControlledCheckbox label={'Remember me '} name={'rememberMe'} control={control} />
        <Button type={'submit'}>Submit</Button>
      </form>
    </div>
  )
}
