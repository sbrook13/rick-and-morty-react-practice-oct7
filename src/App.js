import React from 'react';
import './App.css';
import CardsContainer from './Components/CardsContainer';

class App extends React.Component {
  state = {
    characters: []
  }  

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => this.setState({characters: data.results}))
  }

  handleClick = (event) => {
    console.log(event)
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick}>Fetch Characters</button>
        <h1>Rick and Morty App</h1>
        <CardsContainer className="cards-container" characters = { this.state.characters }/>
      </div>
    )
  }
}

export default App;
