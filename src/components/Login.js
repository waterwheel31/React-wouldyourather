
import React from 'react'
import Theme from '../designs/theme'
import Header from './header'
import { Redirect } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import red from '@material-ui/core/colors/red';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { connect } from 'react-redux'

import {selectUser} from '../actions/selectUser'


class Login extends React.Component{

 
    selectUser = (userName) => {
        console.log("current login user:", this.props.loginUser)
        console.log("props:", this.props)
        this.props.selectUser(userName)
        console.log("selectUser:", userName)
        console.log("current login user after select:", this.props.loginUser)
        
    }

    render(){

        const primaryColor = red[50]

        let users = []
        const Context = React.createContext()    
        console.log('users:', this.props.users)
        if (this.props.users != null || this.props.uers != undefined){
            users = Object.values(this.props.users)
        }

        console.log('users:', users)


        return (
            <Context.Provider value={this.props.store}>    
                <MuiThemeProvider theme={Theme}>
                <div>
                    <Header/> 
                    
                    <div><h2>User List</h2></div>
                    {this.props.children} 
                    <List>
                        {users.map((user)=>(
                        <ListItem alignItems="flex-start" style={{backgroundColor: primaryColor}}
                            onClick={this.selectUser.bind(this, user.id)}>
                            <ListItemAvatar>
                                    <Avatar alt={user.name} src={user.avatarURL} />
                                </ListItemAvatar>
                            <ListItemText>
                                {user.name}
                               
                            </ListItemText>
                        </ListItem>
                        ))}
                    </List>
                
                </div>
                </MuiThemeProvider>
            </Context.Provider>  
          )
    }
}

const mapStateToProps = (state) => {

    return {
        loginUser: state.selectUser,
        users: state.receiveUsers,
        
    }
}

const mapDispatchToProps = dispatch => {
   return {
       selectUser: (user) => dispatch(selectUser(user))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)
