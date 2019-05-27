import React from 'react';
import './lectura.css'
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import randomWords from 'random-spanish-words'

class Lectura extends React.Component {
    constructor(){
        super()
        this.state = {
            word: ''
        }
    }

    componentDidMount(){
        this.generarNuevaPalabra()
    }

    generarNuevaPalabra = () => {
        this.setState({word: randomWords()})
    }

    render(){
        return(
            <div className="lectura-page">
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
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Lectura;