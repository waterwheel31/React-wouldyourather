import {NEW_QUESTION} from '../actions/newQuestion'


export default function question (state = null, action){

    console.log('reducer NEW_QUESTION', 'state:'. state, 'action:', action)

    switch (action.type){
        case NEW_QUESTION:
            
            return {
                ...state,
                [action.question.id]: action.question
            }

        default: 
            return state
    }
}