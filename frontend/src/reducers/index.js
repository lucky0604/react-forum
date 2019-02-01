import { combineReducers } from 'redux'
import auth from './auth'
import register from './register'
import users from './users'
import userProfile from './userprofile'

const rootReducer = combineReducers({
  auth,
  register,
  userProfile,
  users
})

export default rootReducer