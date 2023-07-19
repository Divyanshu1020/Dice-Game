import React  from 'react'
import "./Dice.css"
export default function Dice({currentDice,setCurrentDice}) {
  
 
  const onRoll = ()=>{
    const randomNumber = Math.floor(Math.random() * (7-1) + 1);
    setCurrentDice(randomNumber);
  }
  return (
    <div className='dice'>
      <img src={`/DiceImages/dice_${currentDice}.png`} alt="" onClick={()=>onRoll()} />
      <p>Click on Dice to roll</p>
    </div>
  )
}
