import React,{ Component } from 'react';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import { Route } from 'react-router-dom';
class dashboard extends Component {
    render(){
        return(
            <div>
                <Route path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </div>
        );
    }
};

export default dashboard;