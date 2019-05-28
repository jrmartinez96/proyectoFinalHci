/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    Dashboard.jsx
==========================================
*/

import React from "react";
import { Row, Col, Card, CardBody, Input, Button, Popover, PopoverBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NotificationAlert from "react-notification-alert";

import * as api from '../../../api';

class ForgotPassword extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            popoverButton: false,
            popoverInput: false
        }
    }

    onSendEmail = () => {
        const { email } = this.state;

        api.forgotPassword(email)
            .then(snap => {
                this.notification("success", "¡Correo enviado!")
            })
            .catch(error => {
                this.notification("danger", error.message)
            })
    }

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
            autoDismiss: 5
          };
        this.refs.notificationAlert.notificationAlert(options);
    }

    render() {
        const isMobile = window.innerWidth < 700;

        return (
            <div style={{height: '100vh', background: 'skyblue', overflow: 'hidden'}}>
                <NotificationAlert ref="notificationAlert" />
                {isMobile ?
                    <Card style={{width:"350px", margin: '0 auto'}}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <NavLink to="/">
                                        <Button size="sm" className="btn-round">
                                            <i className="fa fa-arrow-left"/> Regresar
                                        </Button>
                                    </NavLink>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <h6>Correo</h6>
                                    <Input
                                        type="text"
                                        placeholder="Ingrese su correo para reiniciar contraseña..."
                                        value={this.state.email}
                                        onChange={(e)=>{
                                            this.setState({email: e.target.value})
                                        }}
                                        onMouseEnter={()=>this.setState({popoverInput: true})}
                                        onMouseLeave={()=>this.setState({popoverInput: false})}
                                        id="Popove"
                                    />
                                    <Popover isOpen={this.state.popoverInput} target="Popove">
                                        <PopoverBody>
                                            Ingresa tu correo para recuperar tu contraseña
                                        </PopoverBody>
                                    </Popover>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col style={{textAlign:'center'}}>
                                    <Button 
                                        onClick={()=>this.onSendEmail()}
                                        onMouseEnter={()=>this.setState({popoverButton: true})}
                                        onMouseLeave={()=>this.setState({popoverButton: false})}
                                        id="buuu"
                                    >
                                        Enviar correo
                                    </Button>
                                    <Popover isOpen={this.state.popoverButton} target="buuu">
                                        <PopoverBody>
                                            Al enviar recibiras un correo donde podras reiniciar tu contraseña
                                        </PopoverBody>
                                    </Popover>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                :
                    <Card style={{width:"800px", margin: '150px auto'}}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <NavLink to="/">
                                        <Button size="sm" className="btn-round">
                                            <i className="fa fa-arrow-left"/> Regresar
                                        </Button>
                                    </NavLink>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <h6>Correo</h6>
                                    <Input
                                        type="text"
                                        placeholder="Ingrese su correo para reiniciar contraseña..."
                                        value={this.state.email}
                                        onChange={(e)=>{
                                            this.setState({email: e.target.value})
                                        }}
                                        onMouseEnter={()=>this.setState({popoverInput: true})}
                                        onMouseLeave={()=>this.setState({popoverInput: false})}
                                        id="Popove"
                                    />
                                    <Popover isOpen={this.state.popoverInput} target="Popove">
                                        <PopoverBody>
                                            Ingresa tu correo para recuperar tu contraseña
                                        </PopoverBody>
                                    </Popover>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col style={{textAlign:'center'}}>
                                    <Button 
                                        onClick={()=>this.onSendEmail()}
                                        onMouseEnter={()=>this.setState({popoverButton: true})}
                                        onMouseLeave={()=>this.setState({popoverButton: false})}
                                        id="buuu"
                                    >
                                        Enviar correo
                                    </Button>
                                    <Popover isOpen={this.state.popoverButton} target="buuu">
                                        <PopoverBody>
                                            Al enviar recibiras un correo donde podras reiniciar tu contraseña
                                        </PopoverBody>
                                    </Popover>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                }
            </div>
        );
    }
}

export default ForgotPassword;
