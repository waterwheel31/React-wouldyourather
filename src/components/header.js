
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Theme from '../designs/theme'
import {Link} from 'react-router-dom'



class Header extends React.Component{

    render(){
        return (
            <MuiThemeProvider theme={Theme}>
                    <div> <h1>Would You Rather?</h1>
               
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
                        <Link to='/login'>
                            <Tab label="Login" />
                        </Link>
                        
                      </Tabs>
                      </AppBar>

                      
                    </div>
            </MuiThemeProvider>

           
          )
    }



}

export default Header

