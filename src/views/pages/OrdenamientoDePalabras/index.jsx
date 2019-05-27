import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

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
                <p className="App-intro">Ordena la oración</p>
                <Unscramble />
            </div>
        )
    }
}

export default Ordenamiento;