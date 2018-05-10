import { combineReducers } from 'redux'
import assets from './assets'
import test from './test'

const mpulseApp = combineReducers({
  assets,
  test
})

export default mpulseApp
