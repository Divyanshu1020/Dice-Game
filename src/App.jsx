
import { useState } from 'react'
import './App.css'
import StartingPage from './Component/StartingPage/StartingPage'
import Game from './Component/Game/Game';


function App() {
const [start,setStart] = useState(true);
// changing between Game and Starting game 
const startGame = ()=>{
  setStart(!start);
}

  return (
    <div className='App'>


       {start ?<StartingPage startGame = {startGame}/> : <Game/>}
    </div>
  )
}

export default App
