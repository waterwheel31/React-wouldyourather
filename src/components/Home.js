import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from './header'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { answerQuestion } from '../actions/newQuestion';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import red from '@material-ui/core/colors/red';


class Home extends React.Component{

    state ={
        page: 'UNANSWERED'
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
            <div align="center">
                <Avatar alt={userName} src={avatarURL} />
                <Typography color="textSecondary"> {userName} </Typography>
            </div>
        )
    }

    showQuestion(question, showButton){

        const primaryColor = red[50]
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
        const linkPath = '/question/'+question.id
        console.log('linkPath:', linkPath)

        return (
            <Link to={linkPath} style={{ textDecoration: 'none'}}>
            <Card className={classes.root} variant="outlined" style={{backgroundColor: primaryColor}}>
                <CardContent>
                    {this.showAvatar(question.user)}
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        asked a question.
                    </Typography>

                </CardContent>
                
            </Card>
            </Link>
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

        if (this.props.questions !== null && this.props.questions !== undefined){
            questions = Object.values(this.props.questions)
            
        }

        questions.forEach(function(question){
            let add = true       
            if (question.user === userId){add = false}
            if (question.answers.length !== undefined){
                question.answers.forEach(function(answer){
                    if (answer.userId === userId) {add = false}
                })
            }
            if (add){
                questions_filtered.push(question)
            }
        })

        questions_filtered = questions_filtered.sort((a,b)=>a.timeStamp - b.timeStamp)
    
        return (
            <div>
                {questions_filtered.length === 0
                    ? null  
                    :<div> 
                        {questions_filtered.map((question) => (
                            <div key={question.id}>  {this.showQuestion(question, true)} </div>
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

        if (this.props.questions !== null || this.props.questions !== undefined){
            questions = Object.values(this.props.questions)
            
        }

        questions.forEach(function(question){
            let add = false

            if (question.answers.length !== undefined){
                question.answers.forEach(function(answer){
                    if (answer.userId === userId) {add = true}
                })
            }
            if (question.user === userId){add = false}
            if (add){
                questions_filtered.push(question)
            }
        })

        questions_filtered = questions_filtered.sort((a,b)=>b.timeStamp - a.timeStamp)

        return (
            <div>
                {questions_filtered.length === 0
                    ? null  
                    :<div> 
                        {questions_filtered.map((question) => (
                            <div key={question.id}> {this.showQuestion(question,false)}</div>
                        ))}
                    </div>
                }
            </div>
        )
}


    render(){

        console.log("props:", this.props)
        console.log('state:', this.state)

        return(
           
            
                <div>
                    <Header/>    
                    {this.props.loginUser === undefined  || this.props.loginUser === null 
                     ? <div>
                         <div> Please login first</div>
                         <Redirect
                            to={{
                                pathname: '/login',
                                state: {referrer: '/'}
                            }}
                         
                         />
                       </div>
                    :
                    <div>
                        {this.props.loginUser === undefined 
                            ? <div> Please login first</div>
                            : <div>
                                 <div>   
                                <BottomNavigation
                                    showLabels
                                >
                                    <BottomNavigationAction 
                                        label="Unanswered Questions" 
                                        onClick={() => this.setState({ page: 'UNANSWERED' })}
                                        />
                                    <BottomNavigationAction 
                                        label="Answered Questions" 
                                        onClick={() => this.setState({ page: 'ANSWERED' })}
                                        />
                                </BottomNavigation>
                                </div>

                                {this.state.page === "UNANSWERED" 
                                ? 
                                   <div>
                                    <div><h2>Unanswered Questions</h2></div>
                                        {this.unansweredList()}
                                   </div>
                                :
                                  <div>
                                    <div><h2>Answered Questions</h2></div>
                                        {this.answeredList()}
                                  </div>
                                }
                            </div>
                        }
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
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home)
 