
import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Theme from '../designs/theme'
import Header from './header'

import { connect } from 'react-redux'
import { newQuestion } from '../actions/newQuestion'

import { Redirect } from "react-router-dom";




class NewQuestion extends React.Component{


    state = {
        choice1: '',
        choice2: '',
        redirect: ''
    }

    generateId(){
        return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
    }

    handleChange1 = (e) => {
        const text = e.target.value
    
        this.setState(() => ({
            choice1: text
        }))
        console.log('handle change', 'choice1:', this.state.choice1)
    }

    handleChange2 = (e) => {
        const text = e.target.value
    
        this.setState(() => ({
            choice2: text
        }))
        console.log('handle change', 'choice2:', this.state.choice2)
    }
      

    handleSubmit = (e) => {
        e.preventDefault()

        const id = this.generateId()

        const question = {
            id: id,
            user: this.props.loginUser,
            choice1: this.state.choice1,
            choice2: this.state.choice2,
            num_1: 0,
            num_2: 0,
            answers: {},
            timeStamp: (new Date()).getTime()
        }

        this.props.newQuestion(question)
    
        this.setState(()=>({
            choice1: '',
            choice2: '',
            redirect: '/'    
        }))
   
      }




    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (
            <MuiThemeProvider theme={Theme}>
            <div>
                <Header/> 
                <div>
                {this.props.loginUser === undefined 
                ? <div>
                  <div> Please login before adding new quetion</div>
                  <Redirect
                    to={{
                        pathname: '/login',
                        state: {referrer: '/add'}
                  }}></Redirect>
                  </div>
        
                :
                    <form onSubmit={this.handleSubmit}> 
                        <div><h2>Create New Question </h2> </div>
                    
                        <TextField id="outlined-basic" label="Choice1" variant="outlined"
                                   onChange={this.handleChange1}
                                   />
                    
                        <div> OR </div>
                    
                        <TextField id="outlined-basic" label="Choice2" variant="outlined"
                                   onChange={this.handleChange2}
                        />
                    
                        <div>
                        <Button type='submit'
                                variant="contained" 
                                color="primary">
                            Submit
                        </Button>
                        </div>
                    </form>
                }
                </div>
            </div>
            </MuiThemeProvider>
           
          )
    }

}



const mapStateToProps = (state) => {
    return {
        loginUser: state.selectUser,  
    }
}

const mapDispatchToProps = dispatch => {
   return {
       newQuestion: (question) => dispatch(newQuestion(question))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)