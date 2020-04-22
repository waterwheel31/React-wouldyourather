import { combineReducers } from 'redux'
import selectUser from './selectUser'
import receiveUsers from './receiveUsers'
import question from './question'

export default combineReducers({
    selectUser,
    receiveUsers,
    question,

})