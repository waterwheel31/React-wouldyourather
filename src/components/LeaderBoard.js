import React from 'react'
import Theme from '../designs/theme'
import Header from './header'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'







class LeaderBoard extends React.Component{
    
    showLeaderBoard(){
        return (
            <div>leaderboard</div>
        )
    }
    
    
    render(){
        return(
            <div>
            <Header/>       
            <div>
                {this.props.loginUser == undefined 
                    ? <div> Please login first</div>
                    : <div>
                        <h2>Leader Board </h2>
                        {this.showLeaderBoard()}
                     </div>
                }
             </div>
        </div>
        )
    }
}



const mapStateToProps = (state) => {

    return {
        loginUser: state.selectUser,
        questions: state.question
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
 }
 

 export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)