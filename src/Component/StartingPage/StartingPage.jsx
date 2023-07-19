import React from 'react'
import './StartingPage.css'

export default function StartingPage({startGame}) {
  return (
    <div className='container'>
        <div className="image">
            <img src="/Logo/dice.png" alt="" />
        </div> 

        <div className="start">
            <h1>Dice Game</h1>
            <h3>Guess The Number</h3>
            <button onClick={()=>{startGame()}}>Start</button>
        </div>
    </div>
  )
}
