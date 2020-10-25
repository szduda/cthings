import React from 'react';
import { Header } from './Header'
import { Timeline } from './Timeline'
import { AddThingTrigger } from './AddThing'
import StateManager from './StateManager/Store'
import { Theme } from './theme';

export default () => (
  <StateManager>
    <Theme>
      <header>
        <Header />
      </header>
      <main>
        <Timeline />
        <AddThingTrigger />
      </main>
    </Theme>
  </StateManager>
)
