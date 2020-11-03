import React from 'react';
import { StateManager } from './StateManager/Store'
import Main from './Pages/Main'

export default () => {
  return (
    <StateManager>
      <Main />
    </StateManager>
  )
}
