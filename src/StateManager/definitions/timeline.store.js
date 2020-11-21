import { plurals } from '../../appHelper'

export const defaultState = ({
  things: {}
})

const emptyThings = {
  activities: [],
  feelings: [],
  thoughts: []
}

export const timelineReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'addThing':
      const dayLine = { ...state.things[payload.date] || emptyThings }
      dayLine[plurals[payload.thing.type]].push(payload.thing)
      return {
        ...state,
        things: {
          [payload.date]: dayLine
        }
      }
    case 'setThings':
      return {
        ...state,
        things: { [payload.date]: payload.things }
      }
    case 'updateThing': return updateThing(state)(payload)

    default:
      return state;
  }
}

const updateThing = state => ({ thing, date, id, thingType }) => {
  const type = plurals[thingType]
  const dayLine = { ...emptyThings, ...state.things[date] }
  const index = dayLine[type].findIndex(t => t.id === id)
  if (index < 0) return state

  dayLine[type][index] = { ...dayLine[type][index], ...thing }
  return {
    ...state,
    things: {
      [date]: dayLine
    }
  }
}

export const timelineActions = {
  setThings: payload => ({
    type: 'setThings',
    payload
  }),
  addThing: payload => ({
    type: 'addThing',
    payload
  }),
  updateThing: payload => ({
    type: 'updateThing',
    payload
  })
}

export const useTimelineGetters = ({ timeline, current }) => ({
  getCurrentThings: () => (timeline.things[current.date] || emptyThings)
})