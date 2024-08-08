import React from 'react'
import { StatusContainer } from './GameStatus.styles'

const GameStatus = ({ state }) => {
  return (
    <StatusContainer  data-testid="gameStatus">
      {state.matches('playing') && <h2 data-testid="currentPlayer">Current Player: {state.context.currentPlayer}</h2>}
      {state.matches('won') && <h2 data-testid="winner">Winner: {state.context.currentPlayer}</h2>}
      {state.matches('draw') && <h2 data-testid="draw">It's a Draw!</h2>}
    </StatusContainer>
  )
}

export default GameStatus