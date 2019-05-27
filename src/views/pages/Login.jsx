import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";
import NotificationAlert from "react-notification-alert";

import * as api from '../../api'

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  onLoginClick = () => {
    const { email, password } = this.state
    if(email !== "" && password !== ""){
      api.signIn(email, password)
        .then(snap=>{
          this.notification("success", "Las credenciales son correctas")
        })
        .catch(error=>{
          this.notification("danger", "Se ha iniciado sesión incorrectamente")
        })
    } else {
      this.notification("warning", "Llene todos los campos.")
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
        autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
}
  
  render() {
    return (
      <div className="login-page">
        <NotificationAlert ref="notificationAlert" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                        placeholder="Correo..." 
                        type="text" 
                        value={this.state.email}
                        onChange={(e)=>this.setState({email: e.target.value})}
                        />
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Contraseña..."
                        type="password"
                        autoComplete="off"
                        value={this.state.password}
                        onChange={(e)=>this.setState({password: e.target.value})}
                      />
                    </InputGroup>
                    <br />
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="btn-round mb-3"
                      color="warning"
                      onClick={e => this.onLoginClick()}
                    >
                      Ingresar
                    </Button>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
