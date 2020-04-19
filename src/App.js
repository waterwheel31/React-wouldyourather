import React from 'react';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Header from './components/header'
import Login from './components/Login'
import NewQuestion from './components/NewQuestion'
import Theme from './designs/theme'



class App extends React.Component{

  state = {

  }


  render() {
    return (
      <div className="App">

        <Route exact path='/'  render={()=>(    
           <Header/> 
           
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

      </div>
    )
  }
}

export default App;
