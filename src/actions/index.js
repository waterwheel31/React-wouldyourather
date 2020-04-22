
import {getInitialData} from '../data/api'

import {receiveQuestions} from '../actions/newQuestion'
import {receiveUsers} from '../actions/selectUser'


export function handleInitialData(){
    console.log('handleInitialData()')
    return (dispatch) => {
        return getInitialData()
            .then(({question, users}) => {
           dispatch(receiveQuestions(question))
           // dispatch(receiveUsers(users))
        })
    }
}