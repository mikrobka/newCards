import * as React from 'react'

import { SignIn } from '@components/auth/sign-in'

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
