import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap'

import './ordenamiento.css'

//import Intro from './Functions.js'

import Unscramble from "./Unscramble.js";


class Ordenamiento extends React.Component {

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Descifra la oración</h1>
                </header>
                <div style={{textAlign: 'left'}}>
                    <NavLink to="/home">
                        <Button className="btn-round" size="sm">
                            <i className="fa fa-arrow-left"/>Regresar
                        </Button>
                    </NavLink>
                </div>
                <p className="App-intro">Ordena la oración</p>
                <Unscramble />
            </div>
        )
    }
}

export default Ordenamiento;