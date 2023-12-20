import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Game from "./Game"
function App() {
  

  return (
    <>
      <h1 style={{color:"#86BBD8"}}> Sudoku Solver  </h1>
      <Game></Game>
      
    </>
  )
}

export default App
