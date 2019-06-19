import React,{ Component } from 'react';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import { Route } from 'react-router-dom';
class dashboard extends Component {
    render(){
        return(
            <div>
                <Route path="/" exact component={Login} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
            </div>
        );
    }
};

export default dashboard;