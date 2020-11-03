import React from 'react';
import { DataService } from '../DataService'
import { Theme } from '../Features/theme';
import { useHeader } from '../Features/Header/useHeader'
import { useTimeline } from '../Features/Timeline/useTimeline'

export default () => {
  const Timeline = useTimeline({ DataService })
  const Header = useHeader()
  return (
    <Theme>
      <header>
        <Header />
      </header>
      <main>
        <Timeline />
      </main>
    </Theme>
  )
}
