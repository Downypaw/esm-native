import React from 'react'
import { lazy } from 'react'

const Screen = lazy(() => import('./Screen.js'))

export const App = () => {
  return (
    <>
      <h1>App</h1>
      <Screen />
    </>
  )
}
