export const defaultState = ({
  date: "24-10-2020",
  view: 'timeline'
})

export const currentReducer = (state, action) => {
  const { payload, type } = action
  switch (type) {
    case 'setDate':
      console.log('setDate')
      return {
        ...state,
        date: payload
      }
    default:
      return state;
  }
}

export const currentActions = {
  setDate: date => ({
    type: 'setDate',
    payload: date
  })
}