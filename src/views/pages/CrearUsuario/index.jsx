/*
==========================================
    LUMATION SERVICES

    Jose Martinez

    Proyecto - Spectrum

    Dashboard.jsx
==========================================
*/

import React from "react";
import { Row, Col, Card, CardBody, Input, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NotificationAlert from "react-notification-alert";

import * as api from '../../../api';

class ForgotPassword extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            popoverButton: false,
            popoverInput: false
        }
    }

    onCrear = () => {
        const { email, password, confirmPassword } = this.state
        if(email !== '' && password !== '' && confirmPassword !== ''){
            if(password === confirmPassword){
                if(password.length >= 6){
                    const data = {
                        email: email
                    }

                    api.createUserAuth(email, password)
                        .then(snap=>{
                            api.createUserFirestore(data)
                            this.setState({email: '', password: '', confirmPassword: ''})
                            this.notification('success', "El usuario se ha creado correctamente.")
                        })
                        .catch(error => {
                            this.notification('danger', "Ocurrió un error, verifique que los campos estan correctos.")
                        })
                } else {
                    this.notification('warning', "La contraseña debe de ser al menos de 6 caracteres.")
                }
            } else {
                this.notification('warning', "Las contraseñas no coinciden.")
            }
        } else {
            this.notification('warning', "Llene todos los campos.")
        }
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

        return (
            <div style={{height: '100vh', background: 'skyblue', overflow: 'hidden'}}>
                <NotificationAlert ref="notificationAlert" />
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
                                    placeholder="Ingrese su correo..."
                                    value={this.state.email}
                                    onChange={(e)=>{
                                        this.setState({email: e.target.value})
                                    }}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <h6>Contraseña</h6>
                                <Input
                                    type="password"
                                    placeholder="Ingrese su contraseña..."
                                    value={this.state.password}
                                    onChange={(e)=>this.setState({password: e.target.value})}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <h6>Confirmar contraseña</h6>
                                <Input
                                    type="password"
                                    placeholder="Confirme su contraseña..."
                                    value={this.state.confirmPassword}
                                    onChange={(e)=>this.setState({confirmPassword: e.target.value})}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col style={{textAlign:'center'}}>
                                <Button 
                                    onClick={()=>this.onCrear()}
                                >
                                    Crear
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default ForgotPassword;
