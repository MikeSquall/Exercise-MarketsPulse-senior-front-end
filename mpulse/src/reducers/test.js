const test = (state = [], action) => {
  switch (action.type) {
    case 'TEST_REDUCER':
      console.log('reducer triggered ' + action)
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default test