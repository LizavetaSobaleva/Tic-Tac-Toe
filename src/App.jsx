import './App.css'
import React from 'react'
import GamePage from './pages/GamePage'
import { GlobalStyle } from './globalStyles';


function App() {
  return (
    <>
      <GlobalStyle />
      <GamePage />
    </>
  );
}

export default App