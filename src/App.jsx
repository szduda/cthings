import React from 'react';
import { Header } from './Header'
import { Timeline } from './Timeline'
import { AddThingTrigger } from './AddThing'

export default () => (
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Timeline />
      <AddThingTrigger />
    </main>
  </div>
)
