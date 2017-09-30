import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auths from './auths'
import Destination from './Destination'

const AppReducer = combineReducers({
  auths,
  Destination,
  router: routerReducer
})

export default AppReducer
