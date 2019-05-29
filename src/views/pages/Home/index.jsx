import React from 'react';
import { connect } from 'react-redux'
import { Card, CardBody, Row, Col, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './home.css'

import * as actions from 'actions';

class Home extends React.Component {

    constructor(){
        super()
        this.state = {
            logoutModal: false,
        }
    }

    render(){
        return(
            <div className="home-page">
                <Modal isOpen={this.state.logoutModal} toggle={()=>this.setState({logoutModal: false})}>
                    <ModalHeader>
                        ¿Seguro que quiere cerrar sesión?
                    </ModalHeader>
                    <ModalBody>
                        <div style={{textAlign: 'center'}}>
                            <Button
                                onClick={()=>{
                                this.setState({logoutModal: false})
                            }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                color="danger"
                                onClick={()=>{
                                const { logout } = this.props;
                                logout()
                            }}
                            >
                                Sí, cerrar sesión
                            </Button>
                        </div>
                    </ModalBody>
                </Modal>
                <Row>
                    <Col style={{textAlign: 'right', margin: '20px 20px 0 0'}}>
                        <Button size="sm"
                            color="danger"
                            onClick={()=>{
                                this.setState({logoutModal: true})
                            }}
                        >
                            <i className="fa fa-power-off"/> Cerrar sesión
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
                <Row>
                    <Col style={{textAlign: 'center'}}>
                            <NavLink to="/results">
                                <Button style={{fontSize: '1rem'}}>
                                    <i className="fa fa-chart-line"/> Mis Resultados
                                </Button>
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