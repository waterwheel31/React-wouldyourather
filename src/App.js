import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Question from './components/Question'

import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'

import { handleInitialData } from './actions'



class App extends React.Component{

  state = {

  }

  componentDidMount() {
    console.log('componentDidMount()')
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/'  render={()=>(    
           <Home/>  
        )}/>
        <Route exact path='/add'  render={()=>(
            <NewQuestion/>
        )}/>
        <Route exact path='/question/:id' render={()=>(
             <Question/> 
        )}/>
        
        <Route exact path='/leaderboard'  render={()=>(
             <LeaderBoard/> 
        )}/>
        <Route exact path='/login' render={()=>(
             <Login/> 
        )}/>
        <Route exact path='/logout' render={()=>(
             <Logout/> 
        )}/>

      </div>
    )
  }
}

function mapStateToProps () {
  return {
  }
}


export default connect(mapStateToProps)(App)
