import React from 'react';
import { connect } from 'react-redux'
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './home.css'

import * as actions from 'actions';

class Home extends React.Component {

    render(){
        return(
            <div className="home-page">
                <Row>
                    <Col style={{textAlign: 'right'}}>
                        <Button size="sm"
                            onClick={()=>{
                                const { logout } = this.props;
                                logout()
                            }}
                        >
                            <i className="fa fa-power-off"/> Logout
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <NavLink to="/ordenamiento">
                            <Card style={{width: '600px', margin: '50px auto'}}>
                                <CardBody style={{textAlign: 'center'}}>
                                    <h4>Ordenamiento</h4>
                                    <img
                                        src="http://static.t13.cl/images/sizes/1200x675/1532726915-palabras-1.jpg"
                                        alt="..."
                                        style={{height: '350px'}}
                                    />
                                </CardBody>
                            </Card>
                        </NavLink>
                    </Col>
                    <Col md="6">
                        <NavLink to="/lectura">
                            <Card style={{width: '600px', margin: '50px auto'}}>
                                <CardBody style={{textAlign: 'center'}}>
                                    <h4>Lectura</h4>
                                    <img
                                        src="http://www.aikaeducacion.com/wp-content/uploads/2017/02/Lectura-cr%C3%ADtica_Aika-990x551.jpg"
                                        alt="..."
                                        style={{height: '350px'}}
                                    />
                                </CardBody>
                            </Card>
                        </NavLink>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        logout: () => {
            dispatch(actions.userLogginOut())
        }
    }
)

export default connect(null, mapDispatchToProps)(Home);