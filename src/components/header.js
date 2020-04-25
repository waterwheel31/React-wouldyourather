
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { MuiThemeProvider} from '@material-ui/core/styles'
import Theme from '../designs/theme'

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'


class Header extends React.Component{


    showAvatar(){
        let avatarURL = 'URL'
        let userName = ''
        const loginUser = this.props.loginUser

        let users = []
        if (this.props.users !== null || this.props.uers !== undefined){
            users = Object.values(this.props.users)
        }

        users.forEach(function(user){
            if(user.id === loginUser){
                avatarURL = user.avatarURL
                userName = user.name
            }
        })
        return (
            <div>
                <Typography color="textSecondary" align="right"> (login user:  {userName}  )</Typography>
                <div align="right">
                    <Avatar alt={userName} src={avatarURL} />
                </div>
            </div>
        )
    }

    render(){
        return (
            <MuiThemeProvider theme={Theme}>
                    <div> <h1>Would You Rather?</h1>
                      {this.props.loginUser === undefined || this.props.loginUser === null
                        ? null 
                        : <div>
                             {this.showAvatar()}
                          </div>
                        }
                      
                      {this.props.loginUser === undefined || this.props.loginUser === null
                        ?   <div>
                                <AppBar position="static"
                                        fullwidth="true"
                                >
                                <Tabs value="0"  
                                    aria-label="simple tabs example"
                                    centered
                                    >       
                                        <Tab label="Login" value="0" component={Link} to={{pathname:'/login'}}/>
                                    
                                </Tabs>
                                </AppBar>
                            </div> 
                        :   <div>
                                <AppBar position="static">
                                <Tabs value='0'
                                    aria-label="simple tabs example"
                                    centered
                                    >
                                        <Tab label="Home" value="0" component={Link} to={{pathname:'/', state:{redirectTo:'test'}}}/>
                                        <Tab label="New Question" value="1" component={Link} to={{pathname:'/add' }}/>
                                        <Tab label="Leader Board" value="2" component={Link} to={{pathname:'/leaderboard' }}/>
                                        <Tab label="Logout" value="3" component={Link} to={{pathname:'/logout'}}/>
                                </Tabs>
                                </AppBar>
                            </div>
                      }
                    </div>
            </MuiThemeProvider>      
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
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)


