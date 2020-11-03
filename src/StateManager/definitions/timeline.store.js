import DataService from "../../DataService"

export const defaultState = ({
  things: {}
})

const emptyThings = {
  activities: [],
  feelings: [],
  thoughts: []
}

const plurals = { activity: 'activities', feeling: 'feelings', thought: 'thoughts' }

export const timelineReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'addThing':
      const dayLine = { ...state.things[payload.date] || emptyThings }
      dayLine[plurals[payload.thing.type]].push({ ...payload.thing, id: 'temp' })
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
    case 'updateThing': (() => {
      const type = plurals[payload.thing.type]
      console.log('thing', payload.thing)
      const dayLine = { ...state.things[payload.date] }
      dayLine[type] = [...dayLine[type].filter(t => t.id !== payload.tempId), payload.thing]
      console.log('dayLine[type]', dayLine[type])
      return {
        ...state,
        things: {
          [payload.date]: dayLine
        }
      }
    })()

    default:
      return state;
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