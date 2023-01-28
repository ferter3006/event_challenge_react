const initialState = {
  recharger: 0,
  user: {
    id: '',
    name: '',
    email: '',
    token: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_STATE':
      return {
        ...state,
        user: action.payload
      }
    case 'ADD_RECHARGER':
      return {
        ...state,
        recharger: state.recharger + 1
      }
    default:
      return state
  }
}
