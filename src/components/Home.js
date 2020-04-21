import React from 'react'
import Theme from '../designs/theme'
import Header from './header'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { answerQuestion } from '../actions/newQuestion';

import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';


class Home extends React.Component{


    showQuestion(question){

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
                        {question.user} asked, would you rather
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
            </Card>
        )
    }


    handleClick(questionId, choice){
        console.log("handleClick", "questionId:", questionId, "choice:", choice)

        const userId = this.props.loginUser

        this.props.answerQuestion(userId, questionId, choice)

    }

    unansweredList = () => {

        console.log('questions:')
        console.log(this.props.questions)

        let questions = []

        if (this.props.questions != null || this.props.questions != undefined){
            questions = Object.values(this.props.questions)
            
        }

        console.log('questions:', questions)
        
        return (
            <div>
                {questions.length === 0
                    ? null  
                    :<div> 
                        {questions.map((question) => (
                            <li key={question.id}>
                            {console.log(question)}
                            {this.showQuestion(question)}
                            </li>
                        ))}
                        
                        
                    </div>
                }
            </div>
        )
    }

    answeredList = () => {
        let questions = []

        if (this.props.questions != null || this.props.questions != undefined){
            questions = Object.values(this.props.questions)
            
        }

        console.log('questions:', questions)
        
        return (
            <div>
                {questions.length === 0
                    ? null  
                    :<div> 
                        {questions.map((question) => (
                            <li key={question.id}>
                            {console.log(question)}
                            {this.showQuestion(question)}
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
                <div><h2>Question List (Unanswered)</h2></div>

                {this.unansweredList()}

                <div><h2>Question List (Answered)</h2></div>

                {this.answeredList()}

            </div>
        )
        }

}

const mapStateToProps = (state) => {

    return {
        loginUser: state.selectUser,
        questions: state.question
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
        answerQuestion: (userId, questionId, choice) => dispatch(answerQuestion(userId, questionId, choice))
    }
 }
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home)
 