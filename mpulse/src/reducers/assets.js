import { CREATE_ASSET, UPDATE_ASSET } from '../actions'

const asset = (state, action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return {
        ...state,
        id: action.id,
        assetName: action.assetName,
        price: action.price,
        lastUpdate: action.lastUpdate,
        type: action.assetType
      }

    case UPDATE_ASSET:
      return {
        ...state,
        price: action.price,
        lastUpdate: action.lastUpdate
      }

    default:
      return state
  }
}

const assets = (state = [], action) => {
  switch (action.type) {
    case CREATE_ASSET:
      return [
        ...state,
        state.push(asset(state, action))
      ]
    case UPDATE_ASSET:
      return state.map(t =>
        asset(t, action)
      )
    default:
      return state
  }
}

export default assets