import React, { Component } from "react";
import ReactDOM from "react-dom";

class Unscramble extends Component {
  
  constructor(props) {
    super(props);

    const newWord = words[Math.floor(Math.random() * words.length)];

    this.state = {
      word: newWord,
      scramble: scrambleWord(newWord),
      answer: "",
      disabled: false
    };

    this.animate = this.animate.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateNewScramble = this.generateNewScramble.bind(this);
  }

  render() {
    return (
      <div>
        <canvas height="100" width="150" ref="canvas" />
        <div className="Scrambled-word">{this.state.scramble}</div>
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
    const newWord = words[Math.floor(Math.random() * words.length)];

    this.setState({
      word: newWord,
      scramble: scrambleWord(newWord),
      answer: "",
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

function scrambleWord(word) {
  let letters = word.split("");
  let scramble = "";
  let different = false;
  const n = letters.length;

  while (!different) {
    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = letters[i];
      letters[i] = letters[j];
      letters[j] = tmp;
    }
    scramble = letters.join("");

    if (scramble !== word) {
      different = true;
    } else {
      letters = word.split("");
    }
  }
  
  return scramble;
}

const words = [
  "hola",
  "mama",
  "perro",
  "mexico", 
  "españa", 
  "argentina", 
  "chile", 
  "colombia", 
  "venezuela",
  "peru"
];

export default Unscramble;