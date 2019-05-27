import React, { Component } from "react";
import Card from './Card.js'
import HTML5Backend from 'react-dnd-html5-backend';
//import flow from 'lodash/flow'
import {DragDropContext} from 'react-dnd';
import ReactDOM from "react-dom";
import './ordenamiento.css'
import Sound from 'react-sound';
import PlayerControls from './PlayerControls';
import SongSelector from './SongSelector';
import songs from './Songs';


const update = require('immutability-helper');


class Unscramble extends Component {
  
  constructor(props) {
    super(props);
    
    const pos = [Math.floor(Math.random() * words.length)];

    //Palabras
    const newWord = words[pos];
    const desordenado = scrambleSentence(newWord);

    //Sonidos

    this.state = {

       
      //Sonidos
      controlled: true,
      position: 0,      
      currentSong: songs[pos],
      volume: 100,
      playbackRate: 1,
      loop: false,
      playStatus: Sound.status.PLAYING,
      //Palabras
      word: newWord,
      scramble: desordenado,
      
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

  

  render() {
    const { volume, playbackRate, loop } = this.state;

    return (
      <div>
        <canvas height="100" width="150" ref="canvas" />
        <SongSelector
          selectedSong={this.state.currentSong}
        />  
        <PlayerControls
          playStatus={this.state.playStatus}
          loop={loop}
          onPlay={() => this.setState({ playStatus: Sound.status.PLAYING })}
          onPause={() => this.setState({ playStatus: Sound.status.PAUSED })}
          onResume={() => this.setState({ playStatus: Sound.status.PLAYING })}
          onStop={() => this.setState({ playStatus: Sound.status.STOPPED, position: 0 })}
          onSeek={position => this.setState({ position })}
          onVolumeUp={() => this.setState({ volume: volume >= 100 ? volume : volume + 10 })}
          onVolumeDown={() => this.setState({ volume: volume <= 0 ? volume : volume - 10 })}
          onPlaybackRateUp={() => this.setState({ playbackRate: playbackRate >= 4 ? playbackRate : playbackRate + 0.5 })}
          onPlaybackRateDown={() => this.setState({ playbackRate: playbackRate <= 0.5 ? playbackRate : playbackRate - 0.5 })}
          onToggleLoop={e => this.setState({ loop: e.target.checked })}
          duration={this.state.currentSong ? this.state.currentSong.duration : 0}
          position={this.state.position}
          playbackRate={playbackRate}
        />
        {this.state.currentSong && (
          this.state.controlled ? (
            <Sound
              url={this.state.currentSong.url}
              playStatus={this.state.playStatus}
              position={this.state.position}
              volume={volume}
              playbackRate={playbackRate}
              loop={loop}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => this.setState({ position })}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
          ) : (
            <Sound
              url={this.state.currentSong.url}
              playStatus={this.state.playStatus}
              playFromPosition={this.state.position}
              volume={volume}
              playbackRate={playbackRate}
              loop={loop}
              onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
              onLoad={() => console.log('Loaded')}
              onPlaying={({ position }) => console.log('Position', position)}
              onPause={() => console.log('Paused')}
              onResume={() => console.log('Resumed')}
              onStop={() => console.log('Stopped')}
              onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
            />
          )
        )}
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

      this.generateNewScramble();
    }
  }

  handleSkip() {
    this.generateNewScramble()
    document.getElementById("answer").focus();
  }

  generateNewScramble() {
    const newWord = words[Math.floor(Math.random() * words.length)];
    const desordenado = scrambleSentence(newWord);

    this.setState({
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