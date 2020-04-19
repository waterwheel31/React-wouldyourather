
import React from 'react'
import Theme from '../designs/theme'
import Header from './header'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


class Login extends React.Component{

    state = {
        users: [
            {
                "id": "karen",
                "name": "Karen",
                "handle": "karen",
                "avatarURL": "./karen.jpg"
              },
              {
                "id": "richard",
                "name": "Richard",
                "handle": "richard",
                "avatarURL": "./richard.jpg"
              },
              {
                "id": "tyler",
                "name": "Tyler",
                "handle": "tyler",
                "avatarURL": "./tyler.jpg"
              }
        ]
    }

    selectUser = (userName) => {
        console.log("selectUser:", userName)
    }

    render(){

        const Context = React.createContext()    

        return (
            <Context.Provider value={this.props.store}>    
                <MuiThemeProvider theme={Theme}>
                <div>
                    <Header/> 

                    <div><h2>User List</h2></div>
                    {this.props.children} 
                    <List>
                        {this.state.users.map((user)=>(
                        <ListItem alignItems="flex-start" onClick={this.selectUser.bind(this, user.name)}>
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

function mapStateToProps(){
    return {

    }
}

export default Login
