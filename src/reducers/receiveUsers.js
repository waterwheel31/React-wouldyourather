import {RECEIVE_USERS} from '../actions/receiveUsers'

export default function receiveUsers (state = null, action){
    switch (action.type){
        
        case RECEIVE_USERS:
            console.log('reducer RECEIVE_USERS', 'state:'. state, 'action:', action)
            return action.users
                
        default: 
            return state
    }
}