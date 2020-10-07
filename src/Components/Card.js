import React from 'react';

export default function Card({character}) {
  return (
    <div className="character-card">
      <img src={character.image} alt=""/>
      <h2>{character.name}</h2>
      <h3>{character.species}</h3>
    </div>
  )
}
