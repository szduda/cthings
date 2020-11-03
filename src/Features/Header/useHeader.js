import React, { useState } from 'react'
import { useStore } from '../../StateManager/Store'
import { Header } from './Header'

export const useHeader = () => {
  const useHeaderContext = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const { state, actions } = useStore()
    const { current } = state
    const { setDate } = actions.current
    return { menuOpened, setMenuOpened, current, setDate }
  }
  return () => <Header {...{ useHeaderContext }} />
}