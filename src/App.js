import React from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer';

class App extends React.Component {
  state = {
    characters: []
  }

  handleClick = (event) => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => this.setState({characters: data.results}))
  }

  render(){
    return (
      <div className="App">
        <h1>Rick and Morty App</h1>
        <button onClick={this.handleClick}>Fetch Characters</button>
        <div className="cards-container">
          <CardsContainer characters = { this.state.characters }/>
        </div>
      </div>
    )
  }
}

export default App;
