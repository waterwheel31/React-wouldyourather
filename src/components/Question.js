import React from 'react'
import Header from './header'
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/newQuestion';
import NotFound from './NotFound'
import {Route} from 'react-router-dom'

import { Redirect } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';


class Question extends React.Component{


    handleClick(questionId, choice){
        console.log("handleClick", "questionId:", questionId, "choice:", choice)
        const userId = this.props.loginUser
        this.props.answerQuestion(userId, questionId, choice)

    }

    showAvatar(questionUser){
        let avatarURL = 'URL'
        let userName = ''
        
        let users = []
        if (this.props.users !== null && this.props.users !== undefined){
            users = Object.values(this.props.users)
        }

        users.forEach(function(user){
            if(user.id === questionUser){
                avatarURL = user.avatarURL
                userName = user.name
            }
        })
        return (
          
            <CardContent align="center">
                <Avatar alt={userName} src={avatarURL} />
                <Typography color="textSecondary"> {userName} </Typography>
            </CardContent>
          
        )
    }

    render(){

        const primaryColor = red[50]
        const secondaryColor = red[500]
       
       
        const questionId = window.location.pathname.split('/')[2]
   
        console.log('questions:', this.props.questions)
        try{
            console.log('questions:', this.props.questions[questionId])
        } catch {
            return (
                <Route path="*" component={NotFound} status={404}/>
            )
        }

        const question = this.props.questions[questionId]
        const userId = this.props.loginUser
        let myAnswer = ''
        let answered = false
        let countAll = 0
        let count1 = 0
        let count2 = 0

        console.log('question:', question)

        if (question !== undefined){

            const answers = Object.values(question.answers)
            answers.forEach((function(answer){
                if (answer.userId === userId){
                    answered = true
                    myAnswer = answer.choice
                }
                countAll += 1
                if (answer.choice === 'CHOICE1'){
                    count1 += 1
                } else {
                    count2 +=1
                }
            }))
        }

        return(
            <div>
               
                <Header/>    
                {this.props.loginUser === undefined || this.props.loginUser === null
                ? <div>
                <div> Please login before adding new quetion</div>
                <Redirect
                  to={{
                      pathname: '/login',
                      state: {referrer: '/question'}
                }}></Redirect>
                </div>
                :
                <div>

                <Card style={{backgroundColor: primaryColor}}>
                    <CardContent>
                        
                            {this.showAvatar(question.user)} asked, 
                            would you rather
                       
                        <Typography  gutterBottom>
                            {question.choice1} 
                        </Typography>
                        <Typography color="textSecondary"  gutterBottom>
                            or 
                        </Typography>
                        <Typography  gutterBottom>
                            {question.choice2}  ? 
                        </Typography>
                    </CardContent>
                    

                    {answered === true 
                    ? 
                    <div>
                        <Typography color="textSecondary"  gutterBottom>
                            Number of Answers: {countAll} 
                        
                        </Typography>
                        <Typography color="textSecondary"  gutterBottom>
                            Number of first choice: {count1} ({Math.round(count1/countAll)*100} %)
                        </Typography>
                        <Typography color="textSecondary"  gutterBottom>
                            Number of second choice: {count2} ({Math.round(count2/countAll)*100} %)
                        </Typography>
                        <Typography color="textSecondary"  gutterBottom>
                            You answereed {myAnswer==='CHOICE1' ? question.choice1 : question.choice2} 
                        </Typography>
                    </div>
                    :
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button size="small" 
                                style={{backgroundColor: secondaryColor, color: 'white' }}
                                onClick={() => {this.handleClick(question.id, "CHOICE1")}}
                                >{question.choice1}</Button>
                        <Button size="small" 
                                style={{backgroundColor: secondaryColor, color: 'white'}}
                                onClick={() => {this.handleClick(question.id, "CHOICE2")}}
                                >{question.choice2}</Button>
                    </CardActions>
                    }
                </Card>
                </div>
                }
            </div>
        )
    }

}



const mapStateToProps = (state) => {

    return {
        loginUser: state.selectUser,
        questions: state.question,
        users: state.receiveUsers,  
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        answerQuestion: (userId, questionId, choice) => dispatch(answerQuestion(userId, questionId, choice))
    }
 }
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Question)
 