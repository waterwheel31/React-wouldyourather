import React from 'react'
import Theme from '../designs/theme'
import Header from './header'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/newQuestion';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';


class Home extends React.Component{



    showAvatar(questionUser){
        let avatarURL = 'URL'
        let userName = ''
        
        let users = []
        if (this.props.users != null || this.props.users != undefined){
            users = Object.values(this.props.users)
        }

        users.forEach(function(user){
            if(user.id === questionUser){
                avatarURL = user.avatarURL
                userName = user.name
            }
        })
        return (
            <div align="center">
                <Avatar alt={userName} src={avatarURL} />
                <Typography color="textSecondary"> {userName} </Typography>
            </div>
        )
    }

    showQuestion(question, showButton){

        const primaryColor = red[50]
        const secondaryColor = red[500]
        const useStyles = makeStyles({
            root: {
              minWidth: 275,
            },
            bullet: {
              display: 'inline-block',
              margin: '0 2px',
              transform: 'scale(0.8)',
            },
            title: {
              fontSize: 14,
            },
            pos: {
              marginBottom: 12,
            },
          });
       
        const classes = useStyles;

        return (
            <Card className={classes.root} variant="outlined" style={{backgroundColor: primaryColor}}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {this.showAvatar(question.user)} asked, 
                        would you rather
                    </Typography>
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
                {showButton === true
                ?
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button size="small" 
                                style={{backgroundColor: secondaryColor}}
                                onClick={() => {this.handleClick(question.id, "CHOICE1")}}
                                >{question.choice1}</Button>
                        <Button size="small" 
                                style={{backgroundColor: secondaryColor}}
                                onClick={() => {this.handleClick(question.id, "CHOICE2")}}
                                >{question.choice2}</Button>
                    </CardActions>
                : null 
                }
            </Card>
        )
    }


    handleClick(questionId, choice){
        console.log("handleClick", "questionId:", questionId, "choice:", choice)

        const userId = this.props.loginUser

        this.props.answerQuestion(userId, questionId, choice)

    }

    unansweredList = () => {

        const userId = this.props.loginUser
      
        let questions = []
        let questions_filtered = []
        

        if (this.props.questions != null || this.props.questions != undefined){
            questions = Object.values(this.props.questions)
            
        }

        questions.forEach(function(question){
            let add = true 
            
            if (question.user === userId){add = false}

            if (question.answers.length != undefined){
                question.answers.forEach(function(answer){
                    if (answer.userId === userId) {add = false}
                })
            }
            if (add){
                questions_filtered.push(question)
            }
        })

        //console.log('not answered questions:', questions)
        //console.log('not answered questions (filtered):', questions_filtered)

    
        return (
            <div>
                {questions_filtered.length === 0
                    ? null  
                    :<div> 
                        {questions_filtered.map((question) => (
                            <li key={question.id}>
        
                            {this.showQuestion(question, true)}
                            </li>
                        ))}
                        
                        
                    </div>
                }
            </div>
        )
    }

    answeredList = () => {

        const userId = this.props.loginUser
        let questions = []
        let questions_filtered = []

        if (this.props.questions != null || this.props.questions != undefined){
            questions = Object.values(this.props.questions)
            
        }

        questions.forEach(function(question){
            let add = false
            //console.log(question.id)
            //console.log(question.user)
            
            if (question.answers.length != undefined){
                question.answers.forEach(function(answer){
                    if (answer.userId === userId) {add = true}
                })
            }

            if (question.user === userId){add = false}

            
            if (add){
                questions_filtered.push(question)
            }
        })

        //console.log('not answered questions:', questions)
        //console.log('not answered questions (filtered):', questions_filtered)
        
        return (
            <div>
                {questions_filtered.length === 0
                    ? null  
                    :<div> 
                        {questions_filtered.map((question) => (
                            <li key={question.id}>
                           
                            {this.showQuestion(question,false)}
                            </li>
                        ))}
                        
                        
                    </div>
                }
            </div>
        )
}



    render(){
        return(
            
                <div>
                    <Header/>       
                    <div>
                        {this.props.loginUser == undefined 
                            ? <div> Please login first</div>
                            : <div>
                                <div><h2>Question List (Unanswered)</h2></div>

                                    {this.unansweredList()}

                                <div><h2>Question List (Answered)</h2></div>

                                    {this.answeredList()}
                             </div>
                        }
                     </div>
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
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home)
 