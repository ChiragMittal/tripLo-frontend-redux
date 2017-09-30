import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import Auth from './Auth'
import Destination from './Destination'

const AppReducer = combineReducers({
  Auth,
  Destination,
  router: routerReducer
})

export default AppReducer
