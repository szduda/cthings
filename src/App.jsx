import React from 'react';
import { Header } from './Header'
import { Timeline } from './Timeline'
import { StateManager } from './StateManager/Store'
import { Theme } from './theme';

export default () => {
  return (
    <StateManager>
      <Theme>
        <header>
          <Header />
        </header>
        <main>
          <Timeline />
        </main>
      </Theme>
    </StateManager>
  )
}
