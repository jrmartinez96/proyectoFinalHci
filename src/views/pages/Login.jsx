import React from "react";
import { connect } from 'react-redux';
import * as selectors from 'reducers';
import * as actions from 'actions';
import { NavLink } from 'react-router-dom'

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
    const { login } = this.props;
    if(email !== "" && password !== ""){
      api.getUserInfoFromFirestore(email)
        .then(snap=>{
          if(snap.docs.length > 0){
            api.signIn(email, password)
              .then(snap=>{
                login(email, password);
              })
              .catch(error=>{
                this.notification("danger", error.message)
              })
          } else {
            this.setState({loading: false})
            this.notification("warning", "Este usuario no existe.")
          }
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
                <Card className="card-login" style={{marginTop: '150px'}}>
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
                      color="success"
                      onClick={e => this.onLoginClick()}
                    >
                      Ingresar
                    </Button>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                      <NavLink to="/crear-usuario">
                        Crear mi usuario
                      </NavLink>
                      <br/>
                      <NavLink to="/forgot-password">
                        Olvide mi contraseña
                      </NavLink>
                    </div>
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

const mapStateToProps = (state) => (
  {
      currentUser: selectors.getCurrentUser(state),
  }
)

const mapDispatchToProps = (dispatch) => (
  {
      login: (data) => {
        dispatch(actions.userLogginIn(data))
      }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Login);
