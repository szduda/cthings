import React from 'react';
import { Header } from './Header'
import { Timeline } from './Timeline'
import { AddThingTrigger } from './AddThing'
import StateManager from './StateManager/Store'

export default () => (
  <StateManager>
    <header>
      <Header />
    </header>
    <main>
      <Timeline />
      <AddThingTrigger />
    </main>
  </StateManager>
)
