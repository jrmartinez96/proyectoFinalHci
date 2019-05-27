
// CONNECT REACT REDUX

import * as selectors from 'reducers';
import * as actions from 'actions';

const mapStateToProps = (state) => (
    {
        currentUser: selectors.getCurrentUser(state),
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        loadingOn: () => {
            dispatch(actions.loadingOn())
        },
        loadingOff: () => {
            dispatch(actions.loadingOff())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Component);




// NOTIFICATION
import NotificationAlert from "react-notification-alert";

    notification = (type, message) => {
        const options = {
            place: "tr",
            message: (
                <div style={{fontSize:'1.2rem'}}>
                    <div>
                        <b>Mensaje:</b>
                    </div>
                    <div>
                    {message}
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7
        };
        this.refs.notificationAlert.notificationAlert(options);
    }

  <NotificationAlert ref="notificationAlert" />


  /*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Jornaleros

    Dashboard.jsx
==========================================
*/

import React from "react";


class Fincas extends React.Component {

    render(){
        return (
            <div className="content">

            </div>
        )
    }
}

export const Fincas
