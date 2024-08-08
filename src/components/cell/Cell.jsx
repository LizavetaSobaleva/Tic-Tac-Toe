import React from "react"
import { CellContainer } from './Cell.styles'

const Cell = ({ value, ...props }) => {
  return (
    <CellContainer {...props} data-testid={props['data-testid'] || "testCell"}>
      {value}
    </CellContainer>
  )
}

export default Cell
