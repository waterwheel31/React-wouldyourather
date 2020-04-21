import { combineReducers } from 'redux'
import selectUser from './selectUser'
import question from './question'

export default combineReducers({
    selectUser,
    question,

})