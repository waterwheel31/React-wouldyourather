
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Theme from '../designs/theme'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'


class Header extends React.Component{

    render(){
        return (
            <MuiThemeProvider theme={Theme}>
                    <div> <h1>Would You Rather?</h1>
                      {this.props.loginUser == undefined || this.props.loginUser == null
                        ? null 
                        : <div align="right">loginuser: {this.props.loginUser} </div>
                        }
                      
                      {this.props.loginUser == undefined || this.props.loginUser == null
                        ?   <div>
                                <AppBar position="static">
                                <Tabs value="Value"  
                                    aria-label="simple tabs example"
                                    centered
                                    >       
                                    <Link to='/login'>
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
                                    <Link to='/'>
                                        <Tab label="Home" />
                                    </Link>
                                    <Link to='/new_question'>
                                        <Tab label="New Question" />
                                    </Link>
                                    <Link to='/leaderboard'>
                                        <Tab label="Leader Board" />
                                    </Link>
                                    <Link to='/logout'>
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
    }
}

const mapDispatchToProps = dispatch => {
   return {
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)


