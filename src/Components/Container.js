import React, {useState} from 'react'
import CardsContainer from './CardsContainer'
import Card from './Card'



export default function Container({characters}){
  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="container" >
      {characters.length > 0 ? <CardsContainer characters = { characters } setActiveCard={setActiveCard}/> : null }
      <div className="favorite-container">
        <h2>My Favorite Character</h2>
        { activeCard ? <Card className="fav-card" character={activeCard} activeCard={true}/> :null }
      </div>
    </div>
  )
}