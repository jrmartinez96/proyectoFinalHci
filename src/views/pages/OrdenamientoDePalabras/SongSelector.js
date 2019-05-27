import React from 'react';
//import ReactDOM from "react-dom";
//import Sound from 'react-sound';

class SongSelector extends React.Component {
    
    constructor(props) {
        super(props);
        
        const pos =Math.floor(Math.random() * vocales.length);
        const nuevaVocal = vocales[pos];
    
        this.state = {
          word: nuevaVocal,
          posicion: pos,
          answer: "",
          disabled: false
        };
      }

    
  render() {
    return (      
      <div>

      </div>
    );
  }

  async handleChange(event) {
    this.setState({ answer: event.target.value });
    const answer = event.target.value;
    if (answer.toLowerCase() === this.state.word.toLowerCase()) {      
      this.setState({ disabled: true });
    }
  }
  renderSongOptions() {
    return this.props.songs.map((song, index) => {
      return (
        <option key={index} value={index}>
          {song.title}
        </option>
      );
    });
  }

  handleSongChange(ev) {
    this.props.onSongSelected(this.props.songs[ev.target.value]);
  }

}

const vocales = [
    "a",
    "e",
    "i",
    "o", 
    "u"
  ];

export default SongSelector;    