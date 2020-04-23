import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Header from './components/header'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import Theme from './designs/theme'

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
