import React, { useState, useEffect } from 'react'
import { useStore } from '../../StateManager/Store'
import { Timeline } from './Timeline'
import { getNextId } from '../../appHelper'

export const useTimeline = ({ DataService }) => {
  const useTimelineContext = () => {
    const { state, getters, actions } = useStore()
    const date = state.current.date
    const { setThings } = actions.timeline

    useEffect(() => {
      const asyncEffect = async () => {
        const things = await DataService.fetchThings({ date })
        setThings({ date, things })
      }
      asyncEffect()
    }, [date])

    const [formVisible, setFormVisible] = useState(false)

    const things = getters.getCurrentThings()

    const addThing = async thing => {
      const tempThing = { ...thing, id: getNextId() }
      actions.timeline.addThing({ thing: tempThing, date })
      setFormVisible(false)
      const id = await DataService.addThing({ date, thing })
      actions.timeline.updateThing({
        id: tempThing.id,
        thingType: thing.type,
        date,
        thing: { id }
      })
    }

    return { things, addThing, setFormVisible, formVisible }
  }

  return () => <Timeline {...{ useTimelineContext }} />
}