import React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, Button, Row, Col } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';

import './results.css'
import * as selectors from 'reducers';
import * as api from '../../../api'

class Results extends React.Component {

    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        const { id } = this.props.currentUser.extra
        api.getResults(id).onSnapshot(
            snap=>{
                let newData = []
                snap.docs.forEach(d=>{
                    newData = [...newData, {...d.data(), id: d.id}]
                })
                console.log(newData)
                this.setState({data: newData})
            }
        )
    }

    getDataLine = () => {
        const { data } = this.state

        let lineData = []
        let lineLabels = []
        let avg = 0

        data.forEach(d =>{ 
            lineLabels = [...lineLabels, d.id]
            lineData = [...lineData, d.score]
            avg = avg + d.score
        })

        avg = avg / data.length

        return {
            labels: lineLabels,
            datasets: [
              {
                label: 'Resultados',
                backgroundColor: 'rgba(135, 207, 235, 0.4)',
                borderColor: 'skyblue',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: lineData,
                avg
              },
            ]
        }
    }

    render(){
        const options = {
            scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "#9f9f9f",
                      beginAtZero: true,
                      stepSize: 1
                      //padding: 20
                    },
                    gridLines: {
                      drawBorder: false,
                      zeroLineColor: "transparent",
                      color: "rgba(0,0,255,0.05)"
                    }
                  }
                ],
            }
        }
        const data = this.getDataLine()
        return (
            <div className="results-page">
                <Row>
                    <Col>
                        <NavLink to="/home">
                            <Button size="sm" className="btn-round" style={{margin: '20px auto auto 20px'}}>
                                <i className="fa fa-arrow-left"/> Regresar
                            </Button>
                        </NavLink>
                    </Col>
                </Row>
                <Card className="graphic-card">
                    <CardBody>
                        <h3>Mis resultados por fecha</h3>
                        <div style={{textAlign: 'right', fontSize: '1.5rem'}}>
                            <b>Promedio:</b> {data.datasets[0].avg}
                        </div>
                        <Line
                            data={data}
                            options={options}
                            width={600}
                            height={200}
                        />
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        currentUser: selectors.getCurrentUser(state),
    }
)

export default connect(mapStateToProps, null)(Results);