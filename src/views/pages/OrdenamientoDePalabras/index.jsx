import React from 'react';
import './ordenamiento.css'
import Intro from './Functions.js'

import Unscramble from "./Unscramble.js";


class Ordenamiento extends React.Component {

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Descifra la palabra</h1>
                </header>
                <p className="App-intro">Ordena la palabra</p>
                <Unscramble />
            </div>
        )
    }
}

export default Ordenamiento;