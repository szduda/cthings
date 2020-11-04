import React, { useState, useEffect } from 'react'
import { useStore } from '../../StateManager/Store'
import { Timeline } from './Timeline'

export const useTimeline = ({ DataService }) => {
  const useTimelineContext = () => {
    const { state, getters, actions } = useStore()
    const date = state.current.date
    const { setThings } = actions.timeline
    useEffect(() => {
      (async () => {
        const things = await DataService.fetchThings({ date })
        setThings({ date, things })
      })()
    }, [setThings, date])
    const things = getters.getCurrentThings()
    const [formVisible, setFormVisible] = useState(false)

    const addThing = async thing => {
      actions.timeline.addThing({ thing, date })
      const tempId = 'temp'
      setFormVisible(false)
      const id = DataService.addThing({ date, thing })
      actions.timeline.updateThing({ id: tempId, date, thing: { ...thing, id } })
    }

    return { things, addThing, setFormVisible, formVisible }
  }

  return () => <Timeline {...{ useTimelineContext }} />
}