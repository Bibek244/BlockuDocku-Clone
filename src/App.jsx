import React, { useState } from 'react'
import Board from './component/Board'
import { GameWrapper } from './component/GameWrapper'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shapes } from './component/Shapes'

function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/*'element={<GameWrapper />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App