import React from 'react';
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './App.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Header from './components/header'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import NewQuestion from './components/NewQuestion'
import Theme from './designs/theme'

import { handleInitialData } from './actions'



class App extends React.Component{

  state = {

  }

  componentDidMount() {
    //this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/'  render={()=>(    
           <Home/> 
           
        )}/>

        <Route exact path='/home_answered'  render={()=>(
            <Header/> 
        )}/>
        <Route exact path='/new_question'  render={()=>(
            <NewQuestion/>
        )}/>
        <Route exact path='/answer_question'  render={()=>(
             <Header/> 
        )}/>
        <Route exact path='/leaderboard'  render={()=>(
             <Header/> 
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
