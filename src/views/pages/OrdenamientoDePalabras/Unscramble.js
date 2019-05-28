import React, { Component } from "react";
import './ordenamiento.css'
import Card from './Card.js'
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import ReactDOM from "react-dom";

import Sound from 'react-sound';
import PlayerControls from './PlayerControls';
import SongSelector from './SongSelector';
import songs from './Songs';
import ReactPlayer from 'react-player'

const update = require('immutability-helper');

class Unscramble extends Component {
  
  constructor(props) {
    super(props);
    
    const pos = [Math.floor(Math.random() * words.length)];

    //Palabras
    const newWord = words[pos];
    const desordenado = scrambleSentence(newWord);

    //Sonidos
    console.log(songs[pos])
    this.state = {
      //Palabras
      word: newWord,
      scramble: desordenado,
      controlled: true,
      //sonidos
      currentSong: songs[pos],
      position: 0,
      volume: 100,
      playbackRate: 1,
      loop: false,
      playStatus: Sound.status.PLAYING,
      //palabras   
      answer: "",
      disabled: false,
      cards: [
        {
          id: 1,
          text: desordenado[0],
        },
        {
          id: 2,
          text: desordenado[1],
        },
        {
          id: 3,
          text: desordenado[2],
        },
        {
          id: 4,
          text: desordenado[3],
        },
      ],
    };

    this.animate = this.animate.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateNewScramble = this.generateNewScramble.bind(this);
  }

  getStatusText() {
    switch (this.state.playStatus) {
      case Sound.status.PLAYING:
        return 'playing';
      case Sound.status.PAUSED:
        return 'paused';
      case Sound.status.STOPPED:
        return 'stopped';
      default:
        return '(unknown)';
    }
  }

  handleSongSelected = (song) => {
    this.setState({ currentSong: song, position: 0 });
  }

  handleControlledComponentChange = (ev) => {
    this.setState({
      controlled: ev.target.checked,
      position: 0
    });
  }

  renderCurrentSong() {
    return (
      <p>
        Current song {this.state.currentSong.title}. Song is {this.getStatusText()}
      </p>
    );
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }
  
  render() {
    const { volume, playbackRate, loop } = this.state;
    
    return(
      <div>
        <ReactPlayer
          playing
          url={this.state.currentSong.url}
          style={{display: 'none'}}
        />
        <canvas height="100" width="150" ref="canvas" />
        <div className="card-container">
            {this.state.cards.map((card, i) => (
              <Card
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
        </div>
        <div>
          <input
            id="answer"
            type="text"
            value={this.state.answer}
            onChange={this.handleChange}
            readOnly={this.state.disabled ? "readonly" : ""}
          />
          <button onClick={this.handleSkip} disabled={this.state.disabled ? "disabled" : ""}>Saltar</button>
        </div>
      </div>
    );
  }

  async handleChange(event) {
    this.setState({ answer: event.target.value });
    const answer = event.target.value;
    if (answer.toLowerCase() === this.state.word.toLowerCase()) {      
      this.setState({ disabled: true });
      let checkMark = await this.animate(ReactDOM.findDOMNode(this.refs.canvas));
      this.generateNewScramble();
    }
  }

  handleSkip() {
    this.generateNewScramble()
    document.getElementById("answer").focus();
  }

  generateNewScramble() {
    const pos =Math.floor(Math.random() * words.length);
    const newWord = words[pos];
    const desordenado = scrambleSentence(newWord);

    this.setState({
      position: pos,      
      currentSong: songs[pos],
      word: newWord,
      scramble: desordenado,
      answer: "",
      cards: [
        {
          id: 1,
          text: desordenado[0],
        },
        {
          id: 2,
          text: desordenado[1],
        },
        {
          id: 3,
          text: desordenado[2],
        },
        {
          id: 4,
          text: desordenado[3],
        },
      ],
      disabled: false
    });
  }

  animate(canvas) {
    let start = 40;
    let mid = start + 30;
    let end = start + 100;
    let width = 22;
    let leftX = start;
    let leftY = start;
    let rightX = mid - width / 2.7;
    let rightY = mid + width / 2.7;
    let animationSpeed = 20;

    let ctx = canvas.getContext("2d");
    ctx.lineWidth = width;
    ctx.strokeStyle = "rgba(0, 150, 0, 1)";

    for (let i = start; i < mid; i++) {
      let drawLeft = window.setTimeout(function() {
        ctx.beginPath();
        ctx.moveTo(start, start);
        ctx.lineTo(leftX, leftY);
        ctx.stroke();
        leftX++;
        leftY++;
      }, 1 + i * animationSpeed / 3);
    }

    for (let i = mid; i < end; i++) {
      let drawRight = window.setTimeout(function() {
        ctx.beginPath();
        ctx.moveTo(leftX, leftY);
        ctx.lineTo(rightX, rightY);
        ctx.stroke();
        rightX++;
        rightY--;
      }, 1 + i * animationSpeed / 3);
    }

    const wait = (delay, ...args) => new Promise(resolve => setTimeout(resolve, delay, ...args));

    return wait(2000).then(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
  }
}

function scrambleSentence(word) {
  let letters = word.split(" ");
  let temp =  letters
  console.log(letters)
  for (let i = 0; i<4; i++){
    let j = Math.floor(Math.random() * 4);
    let tmp =letters[i];
    temp[i] = letters[j]
    letters[j] = tmp
  } 
  return temp;
}

const words = [
  "Hola amigo como esta",
  "Se acabo el semestre",
  "Espero pasar la clase",
  "Ya tengo mucho sueño",
  "Tengo que hacer tareas",
  "Me faltan varios proyectos"
];

export default DragDropContext(HTML5Backend)(Unscramble);