import { format as formatDate } from 'date-fns'
// export const defaultState = ({
//   things: {
//     "24-10-2020": {
//       activities: [
//         { start: 8, name: 'Shower' },
//         { start: 8.5, name: 'Breakfast' },
//         { start: 9, end: 17, name: 'Work' }
//       ],
//       feelings: [
//         { start: 12, end: 16, name: 'Motivated' },
//         { start: 11, name: 'Hungryyyyy :(' }
//       ],
//       thoughts: [
//         { start: 8, name: 'Nice wake up!' },
//         { start: 14, name: 'I should buy a boat' },
//         { start: 17.5, name: 'Party or not to party?' }
//       ],
//     }
//   }
// })

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
    case 'setThings':
      const { things } = payload
      return {
        ...state,
        things
      }
    case 'addThing':
      const { thing, date } = payload
      const dayLine = { ...state.things[date] || emptyThings }
      dayLine[plurals[thing.type]].push(thing)
      // todo: storage
      return {
        ...state,
        things: {
          [date]: dayLine
        }
      }

    default:
      return state;
  }
}

export const timelineActions = {
  setThings: things => ({
    type: 'setThings',
    payload: things
  }),
  addThing: thing => ({
    type: 'addThing',
    payload: thing
  }),
}

export const useTimelineGetters = ({ timeline, current }) => ({
  getCurrentThings: () => (timeline.things[current.date] || emptyThings)
})