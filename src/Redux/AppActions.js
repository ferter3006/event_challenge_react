export const setUSerState = user => {
  return {
    type: 'SET_USER_STATE',
    payload: user
  }
}

export const addRecharger = () => {
  return {
    type: 'ADD_RECHARGER'
  }
}