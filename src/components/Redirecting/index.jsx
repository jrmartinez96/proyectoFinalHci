/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    Redirecting.jsx
==========================================
*/

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../actions';
import * as selectors from '../../reducers';


class redirecting extends React.Component {

    componentDidUpdate(){
        const { appState, pathRedirected } = this.props;
        const redirectState = selectors.getRedirectState(appState);
        if(redirectState){
            pathRedirected();
        }

    }

    render(){
        const { appState } = this.props;
        const redirectState = selectors.getRedirectState(appState);
        const pathRedirecting = selectors.getRedirectPath(appState);
        const currentPath = this.props.location.pathname;
        
        if(redirectState && (currentPath !== pathRedirecting)){
            return <Redirect to={pathRedirecting} />
        } 

        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        pathRedirected: () =>{
            dispatch(actions.finishRedirecting());
        }
    }
)

const Redirecting = connect(mapStateToProps, mapDispatchToProps)(redirecting);

export default Redirecting;