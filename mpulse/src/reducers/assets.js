import { CREATE_ASSET } from '../actions'

const assets = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        counter: Object.keys(state).length - 1,
        [action.payload.id]: action.payload
      }
    default:
      return state
  }
}

export default assets