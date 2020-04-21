
export const NEW_QUESTION = 'NEW_QUESTION'
export const RECEIVE_QUESTIONS = ' RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

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

export function answerQuestion (userId, questionId, choice) {
    return {
      type: ANSWER_QUESTION,
      userId: userId,
      questionId: questionId,
      choice: choice
    }
  }