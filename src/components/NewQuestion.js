
import React from 'react'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Theme from '../designs/theme'
import Header from './header'




class NewQuestion extends React.Component{

    render(){
        return (
            <MuiThemeProvider theme={Theme}>
            <div>
                <Header/> 
                <div>
                <form> 
                    <div><h2>Create New Question </h2> </div>
                  
                    <TextField id="outlined-basic" label="Choice1" variant="outlined" />
                   
                    <div> OR </div>
                   
                    <TextField id="outlined-basic" label="Choice2" variant="outlined" />
                  
                    <div>
                    <Button variant="contained" color="primary">
                           Submit
                    </Button>
                    </div>
                </form>
                </div>
            </div>
            </MuiThemeProvider>
           
          )
    }



}

export default NewQuestion
