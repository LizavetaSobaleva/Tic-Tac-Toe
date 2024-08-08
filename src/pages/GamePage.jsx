import React from 'react'
import { useMachine } from '@xstate/react'
import { ticTacToeMachine } from '../ticTacToeMachine'
import Board from '../components/board/Board'
import Button from '../components/button/Button'
import GameStatus from '../components/gameStatus/GameStatus'
import { GameContainer, Header } from './GamePage.styles'

const GamePage = () => {
  const [state, send] = useMachine(ticTacToeMachine)

  const handleClick = (index) => {
    if (state.context.board[index] || state.matches('won') || state.matches('draw')) return
    send({ type: 'CLICK_CELL', index })
  }

  const handleReset = () => {
    send({ type: 'RESET' })
  }

  const handleStart = () => {
    send({ type: 'START' })
  }

  return (
    <GameContainer data-testid="gamePage">
      <Header data-testid="header">Tic Tac Toe</Header>
      {state.matches('idle') ? (
        <Button onClick={handleStart}  data-testid="startButton">Start Game</Button>
      ) : (
        <>
          <GameStatus state={state} context={state.context} />
          <Board cells={state.context.board} onCellClick={handleClick} data-testid="gameBoard"/>
          
          <Button onClick={handleReset} data-testid="resetButton">Restart Game</Button>
        </>
      )}
    </GameContainer>
  )
}

export default GamePage