import React from 'react'
import Cell from '../cell/Cell'
import { BoardContainer } from './Board.styles'

const Board = ({ cells, onCellClick, ...props }) => {
  return (
    <BoardContainer  data-testid={props['data-testid'] || "testBoard"}>
      {cells.map((value, index) => (
        <Cell 
          key={index} 
          value={value} 
          onClick={() => onCellClick(index)} 
          data-testid={`cell-${index}`}
        />
      ))}
    </BoardContainer>
  )
}

export default Board