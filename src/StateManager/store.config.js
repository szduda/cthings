import { useActions } from "./useActions";
import {
  defaultState as timelineDefault,
  timelineReducer,
  timelineActions,
  useTimelineGetters
} from './definitions/timeline.store'
import {
  defaultState as currentDefault,
  currentReducer,
  currentActions
} from './definitions/current.store'

export const initialState = {
  timeline: timelineDefault,
  current: currentDefault,
}

export const reducer = ({ timeline, current }, action) => {
  return {
    timeline: timelineReducer(timeline, action),
    current: currentReducer(current, action),
  }
}

export const useMyGetters = state => ({
  ...useTimelineGetters(state)
})

const useCurrentActions = dispatch => useActions(dispatch, currentActions)
const useTimelineActions = dispatch => useActions(dispatch, timelineActions)

export const useMyActions = dispatch => ({
  timeline: useTimelineActions(dispatch),
  current: useCurrentActions(dispatch)
})