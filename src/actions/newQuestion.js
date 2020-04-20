
export const NEW_QUESTION = 'NEW_QUESTION'

export function newQuestion(question){

   console.log('Action newQuestion') 
   return {
       type: NEW_QUESTION,
       question: question
   }

}