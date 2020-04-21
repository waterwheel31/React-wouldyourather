import {NEW_QUESTION} from '../actions/newQuestion'
import {RECEIVE_QUESTIONS} from '../actions/newQuestion'

export default function question (state = null, action){

    

    switch (action.type){
        case NEW_QUESTION:
            console.log('reducer NEW_QUESTION', 'state:'. state, 'action:', action)
            return {
                ...state,
                [action.question.id]: action.question
            }

 
        case RECEIVE_QUESTIONS:
            console.log('reducer RECEIVE_QUESTIONS', 'state:'. state, 'action:', action)
            return {
                ...state,
                ...action.questions
            }

        default: 
            return state
    }
}