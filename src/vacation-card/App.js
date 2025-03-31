import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'
import './style.css'
import cardData from './cardData';

let cards = cardData.map(card => {
     return(
     <Card 
      {...card}
      />
    
    )

       }
)
export default function App(){
  return (
    <div>
       {cards}
    </div>
  )
}