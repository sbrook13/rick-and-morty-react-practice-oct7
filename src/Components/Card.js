import React from 'react';

class Card extends React.Component {
  
  state = {
    isClicked: false
  }

  render(){
    const character = this.props.character

    return (
      <div className={ character.status === 'Dead' ? 'character-card dead': 'character-card'}>
        <img 
          src={character.image} 
          onClick ={ () => this.setState({ isClicked: !this.state.isClicked})}
          alt=""
          />

        { this.state.isClicked 
          ? <>
              <h2>{character.name}</h2>
              <h3>Status: {character.status}</h3>
              <p>{character.species} - {character.gender}</p>
            </>
          : null
        }
      </div>
    )
  }
}
export default Card