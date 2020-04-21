
import {getInitialData} from '../data/api'

import {receiveQuestions} from '../actions/newQuestion'


export function handleInitialData(){
    return () => {
        return getInitialData().then(({questions}) => {
            receiveQuestions(questions)
        })
    }
}