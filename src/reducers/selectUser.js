import {SELECT_USER} from '../actions/selectUser'
import {RECEIVE_USERS} from '../actions/selectUser'

export default function selectUser (state = null, action){
    switch (action.type){
        case SELECT_USER:
            console.log('reducer SELECT_USER', 'action.user:', action.user, 'state:'. state, 'action:', action)
            return action.user

        case RECEIVE_USERS:
            console.log('reducer RECEIVE_USERS', 'state:'. state, 'action:', action)
            return {
                ...state,
                users: action.users
            }
            
        default: 
            return state
    }
}