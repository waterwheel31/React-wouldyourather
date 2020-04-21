import {_getQuestions} from './DATA.js'

export function getInitialData(){
    return Promise.all([
        _getQuestions()
    ]).then((questions) => ({questions}))
}

