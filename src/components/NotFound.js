import React from 'react';

import Header from './header'


class NotFound extends React.Component{

    state = {
  
    }

    render(){
        return(
            <div>
                <Header/>    
                <div>404 Not Found</div>
            </div>
        )
    }

}

export default NotFound
