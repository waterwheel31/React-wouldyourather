import React from 'react'
import Header from './header'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import red from '@material-ui/core/colors/red';


class LeaderBoard extends React.Component{
    
    showLeaderBoard(){

        const primaryColor = red[50]
        let users = [] 
        console.log('users:', this.props.users)
        if (this.props.users !== null || this.props.uers !== undefined){
            users = Object.values(this.props.users)
            console.log('users:', users)
            users = users.sort((a,b)=> b.totalNum - a.totalNum)
        }

        console.log('users:', users)

        return (
             <div>
                    <List >
                        {users.map((user)=>(
                           <ListItem alignItems="flex-start" 
                                key={user.id}
                                style={{backgroundColor: primaryColor}} >
                                <ListItemAvatar>
                                     <Avatar alt={user.name} src={user.avatarURL} />
                                </ListItemAvatar>
                                <ListItemText>
                                     <Typography color="textPrimary"> {user.name} </Typography>
                                </ListItemText>
                                <ListItemText>
                                     <Typography color="textSecondary"># Questions:{user.questionNum} </Typography>
                                </ListItemText>
                                <ListItemText>
                                     <Typography color="textSecondary"># Answers:{user.answerNum} </Typography>
                                </ListItemText>
                                <ListItemText>
                                     <Typography color="textSecondary"># Total:{user.totalNum} </Typography>
                                </ListItemText>
                                
                            </ListItem>
                        ))}
                    </List>
            </div>
        )
    }
    
    
    render(){


        return(
            <div>
            <Header/>       
            <div>
                {this.props.loginUser === undefined 
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
        questions: state.question,
        users: state.receiveUsers,  
        
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
 }
 

 export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)