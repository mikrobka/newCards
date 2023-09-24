import * as React from 'react'

import { ChevronUp } from '@assets/icons'
import { SignIn } from '@components/auth/sign-in'
import { SignUp } from '@components/auth/sign-up'

export function App() {
  const signInHandler = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <SignIn onSubmit={signInHandler} />
    </div>
  )
}
