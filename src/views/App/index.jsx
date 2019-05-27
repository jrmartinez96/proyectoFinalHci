

import React from 'react';
import { connect } from 'react-redux'
import { Route, HashRouter as Router, Redirect } from 'react-router-dom';

import Redirecting from '../../components/Redirecting';
import Login from '../pages/Login.jsx'
import Home from '../pages/Home'
import Ordenamiento from '../pages/OrdenamientoDePalabras'
import Lectura from '../pages/Lectura'

import * as selectors from 'reducers';

import "bootstrap/dist/css/bootstrap.css";
import "../../assets/scss/paper-dashboard.scss";
import "../../assets/demo/demo.css";

class App extends React.Component{

    render(){
        const {isLoggedIn} = this.props
        console.log(isLoggedIn)
        return(
            <div>
                <Router>
                    <div>
                        <Route path="/" render={props=> <Redirecting {...props}/>} />
                        <Route exact path="/" render={props => <Redirect to="/auth" />}/>
                        <Route path="/auth" render={props => {
                            if(isLoggedIn){
                                return <Redirect to="/home"/>
                            }
                            return <Login {...props} />
                        }} />
                        <Route path="/home" render={props => {
                            if(isLoggedIn){
                                return <Home {...props} />
                            }

                            return <Redirect to="/auth"/>
                        }} />
                        <Route path="/ordenamiento" render={props => {
                            if(isLoggedIn){
                                return <Ordenamiento {...props} />
                            }

                            return <Redirect to="/auth"/>
                        }}/>
                        <Route path="/lectura" render={props => {
                            if(isLoggedIn){
                                return <Lectura {...props} />
                            }

                            return <Redirect to="/auth"/>
                        }}/>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isLoggedIn: selectors.getIsLoggedIn(state),
    }
)

const mapDispatchToProps = (dispatch) => (
    {
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);