import * as React from 'react'

import { SignIn } from '@components/auth/sign-in'
import { SignUp } from '@components/auth/sign-up'

export function App() {
  const signInHandler = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <SignUp onSubmit={signInHandler} />
    </div>
  )
}
