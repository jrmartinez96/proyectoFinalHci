import React from 'react';
import './lectura.css'
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Lectura extends React.Component {

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

                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default Lectura;