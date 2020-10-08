import React from 'react';

export default function Card({character, setActiveCard, activeCard}) {
  const { image, name, species, status, gender } = character

  return (
    <div onClick={() => setActiveCard(character)} className={ activeCard ? 'fav-card': 'character-card'}>
      <img src={image} alt="" />
      { activeCard 
        ? <>
            <h2>{name}</h2>
            <h3 className={ status === 'Dead' ? 'dead': null}>Status: {status}</h3>
            <p>{species} - {gender}</p>
          </>
        : null
      }
    </div>
  )
}