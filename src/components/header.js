
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Theme from '../designs/theme'

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'


class Header extends React.Component{


    showAvatar(){
        let avatarURL = 'URL'
        let userName = ''
        const loginUser = this.props.loginUser

        let users = []
        if (this.props.users != null || this.props.uers != undefined){
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
                      {this.props.loginUser == undefined || this.props.loginUser == null
                        ? null 
                        : <div>
                             {this.showAvatar()}
                          </div>
                        }
                      
                      {this.props.loginUser == undefined || this.props.loginUser == null
                        ?   <div>
                                <AppBar position="static">
                                <Tabs value="Value"  
                                    aria-label="simple tabs example"
                                    centered
                                    >       
                                    <Link to='/login' style={{ textDecoration: 'none'  ,color: 'white' }}>
                                        <Tab label="Login" />
                                    </Link>
                                    
                                </Tabs>
                                </AppBar>
                            </div> 
                        :   <div>
                                <AppBar position="static">
                                <Tabs value="Value"  
                                    aria-label="simple tabs example"
                                    centered
                                    >
                                    <Link to='/' style={{ textDecoration: 'none' ,color: 'white' }}>
                                        <Tab label="Home" />
                                    </Link>
                                    <Link to='/new_question' style={{ textDecoration: 'none'  ,color: 'white' }}>
                                        <Tab label="New Question" />
                                    </Link>
                                    <Link to='/leaderboard' style={{ textDecoration: 'none'  ,color: 'white' }}>
                                        <Tab label="Leader Board" />
                                    </Link>
                                    <Link to='/logout' style={{ textDecoration: 'none'  ,color: 'white' }}>
                                        <Tab label="Logout" />
                                    </Link>
                                    
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


