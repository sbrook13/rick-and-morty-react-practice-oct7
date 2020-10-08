import React from 'react';
import Card from './Card';

export default function CardsContainer({characters, setActiveCard}) {
  
  const characterCards = characters.map(character => <Card character={character} setActiveCard={setActiveCard}/>)
  
  return ( 
    <div className='card-container'>
      {characterCards}
    </div>
  )
}
