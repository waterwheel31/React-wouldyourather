
import React from 'react'
import Theme from '../designs/theme'
import Header from './header'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Redirect } from "react-router-dom";

import { connect } from 'react-redux'

import {selectUser} from '../actions/selectUser'


class Logout extends React.Component{


    selectUser = (user) => {
        this.props.selectUser(user)
        console.log('user:', user)
    }
    render(){
  
        {this.selectUser.bind(this, null)}
        return (    
            <Redirect to="/" />
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
    selectUser: (user) => dispatch(selectUser(user))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Logout)
