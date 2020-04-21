import {NEW_QUESTION} from '../actions/newQuestion'
import {RECEIVE_QUESTIONS} from '../actions/newQuestion'
import {ANSWER_QUESTION} from '../actions/newQuestion'

export default function question (state = null, action){

    
    switch (action.type){
        case NEW_QUESTION:
            console.log('reducer NEW_QUESTION', 'state:', state, 'action:', action)
            return {
                ...state,
                [action.question.id]: action.question
            }
        
        case ANSWER_QUESTION:
            console.log('reducer ANSWER_QUESTION', 'state:', state, 'action:', action)
            return {
                ...state,
                question[action.questionId]:{
                    ...state[action.quesitonId],
                    answers: {
                        userId: action.userId,
                        choice: action.choice
                    }
                }
               
            }

 
        case RECEIVE_QUESTIONS:
            console.log('reducer RECEIVE_QUESTIONS', 'state:', state, 'action:', action)
            return {
                ...state,
                ...action.questions
            }

        default: 
            return state
    }
}