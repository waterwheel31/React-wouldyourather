
export const SELECT_USER = 'SELECT_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function selectUser(user){
   return {
       type: SELECT_USER,
       user: user
   }

}

export function receiveUsers(users){
    console.log('receive users, users:', users)
    return {
        type: RECEIVE_USERS,
        users: users
    }
 
 }