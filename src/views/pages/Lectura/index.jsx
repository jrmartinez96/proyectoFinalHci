import React from 'react';
import './lectura.css'
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import randomWords from 'random-spanish-words'
import SpeechToText from 'speech-to-text'
import NotificationAlert from "react-notification-alert";

class Lectura extends React.Component {
    constructor(){
        super()
        this.state = {
            word: '',
            listening: false,
            texto: '',
            finalisedText: '',
        }
    }

    componentDidMount(){
        this.generarNuevaPalabra()

        const onAnythingSaid = text => {
            console.log("anything")
            this.setState({ texto: text });
        };
    
        const onEndEvent = () => {
            console.log("end event")
            if (this.state.listening) {
            //   this.startListening();
              console.log("start")
            }
          };
      
        const onFinalised = text => {
            console.log("finalised")
            this.setState({
              finalisedText: text,
              texto: ''
            });
            this.compararPalabras(text)
        };
      
        try {
            this.listener = new SpeechToText(onFinalised, onEndEvent, onAnythingSaid, "es-GT");
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    generarNuevaPalabra = () => {
        this.setState({word: randomWords()})
    }

    start = () => {
        this.setState({listening: true})
        this.listener.startListening()
    }

    stop = () => {
        this.setState({listening: false})
        this.listener.stopListening()
    }

    compararPalabras = (palabraEscuchada) => {
        if(palabraEscuchada === this.state.word){
            this.notification("success", "Correcto! Lee la siguiente palabra!")
            this.generarNuevaPalabra()
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

    render(){
        return(
            <div className="lectura-page">
                <NotificationAlert ref="notificationAlert" />
                <Row>
                    <Col>
                        <NavLink to="/home">
                            <Button size="sm" className="btn-round" style={{margin: '20px 0 0 20px'}}>
                                <i className="fa fa-arrow-left"/> Regresar
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
                <br/>
                <Card style={{width: '700px', margin: '0 auto'}}>
                    <CardBody>
                        <Row>
                            <Col>
                                <Button
                                    onClick={()=>this.generarNuevaPalabra()}
                                >
                                    Generar
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{textAlign: 'center'}}>
                                <h3 style={{margin: '0'}}>{this.state.word}</h3>
                            </Col>
                        </Row>
                        <div style={{textAlign: 'center'}}>
                            <Button 
                                className="btn-icon btn-round"
                                onClick={()=>{
                                    if(this.state.listening){
                                        this.stop()
                                    } else {
                                        this.start()
                                    }
                                }}
                                color={this.state.listening ? "danger": "success"}
                            >
                                <i className="fa fa-microphone"/>
                            </Button>
                            <br/>
                            {this.state.listening ? 
                                "Escuchando..."
                            :
                                null
                            }
                        </div>
                        {this.state.finalisedText}
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Lectura;