
export const NEW_QUESTION = 'NEW_QUESTION'
export const RECEIVE_QUESTIONS = ' RECEIVE_QUESTIONS'

export function newQuestion(question){

   console.log('Action newQuestion') 
   return {
       type: NEW_QUESTION,
       question: question
   }

}

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }