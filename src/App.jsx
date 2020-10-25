import React, { useState } from 'react';
import { Header } from './Header'
import { Timeline } from './Timeline'
import { AddThingTrigger, AddThingForm } from './AddThing'
import StateManager from './StateManager/Store'
import { Theme, BottomContent } from './theme';

export default () => {
  const [visible, setVisible] = useState(false)

  const addThing = thing => {
    // dispatch addThing
    setVisible(false)
  }
  return (
    <StateManager>
      <Theme>
        <header>
          <Header />
        </header>
        <main>
          <Timeline />
          <AddThingTrigger onClick={() => setVisible(true)} />
          <BottomContent visible={visible} onClose={() => setVisible(false)}>
            <AddThingForm onSubmit={addThing} />
          </BottomContent>
        </main>
      </Theme>
    </StateManager>
  )
}
