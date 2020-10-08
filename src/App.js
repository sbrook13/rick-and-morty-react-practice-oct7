import React from 'react';
import './App.css';
import Container from './Components/Container';

class App extends React.Component {
  
  state = {
    characters: []
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => this.setState({characters: data.results}))
  }

  render(){
    return (
      <div className="App">
        <h1>Rick and Morty App</h1>
        <Container characters = { this.state.characters } />
      </div>
    )
  }
}

export default App;
