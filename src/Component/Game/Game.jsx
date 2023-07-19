import React, { useState } from 'react'
import Number from './Number/Number'
import Score from './Score/Score'
import "./Game.css"
import Dice from './Dice/Dice'

export default function Game() {
  const [score,setScore] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [selectNumber, setSelectNumber] = useState();
  return (
    <div className='Game'>
      <div className="top-section">
        <Score />
        <Number 
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </div>
      <Dice 
        currentDice = {currentDice}
        setCurrentDice = {setCurrentDice}
      />
    </div>
  )
}
