

import React from 'react';
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom';
import Login from '../pages/Login.jsx'


import "bootstrap/dist/css/bootstrap.css";
import "../../assets/scss/paper-dashboard.scss";
import "../../assets/demo/demo.css";

class App extends React.Component{

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" render={props => <Redirect to="/auth" />}/>
                        <Route path="/auth" render={props => <Login {...props} />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;