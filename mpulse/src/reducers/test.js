const test = (state = [], action) => {
  switch (action.type) {
    case 'TEST_REDUCER':
      console.log('reducer triggered ' + action.type)
      return [
        ...state,
        state.push(action.number)
      ]
    default:
      return state
  }
}

export default test