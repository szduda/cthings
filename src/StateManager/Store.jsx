import React, { createContext, useContext, useReducer } from 'react';
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

const useCurrentActions = dispatch => useActions(dispatch, currentActions)
const useTimelineActions = dispatch => useActions(dispatch, timelineActions)

export const StateContext = createContext();
export const useStore = () => {
  const [state, dispatch] = useContext(StateContext)
  const getters = {
    ...useTimelineGetters(state)
  }
  const actions = {
    timeline: useTimelineActions(dispatch),
    current: useCurrentActions(dispatch)
  }
  return { state, actions, getters }
}

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const initialState = {
  timeline: timelineDefault,
  current: currentDefault,
}

const reducer = ({ timeline, current }, action) => {
  return {
    timeline: timelineReducer(timeline, action),
    current: currentReducer(current, action),
  }
}

export const StateManager = props => (
  <StateProvider  {...{ initialState, reducer, ...props }} />
)

export default StateManager