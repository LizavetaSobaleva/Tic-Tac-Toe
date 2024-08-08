import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Board from './Board'

describe('Board Component', () => {
  const cells = Array(9).fill(null)
  let handleClick

  beforeEach(() => {
    handleClick = jest.fn();
    render(<Board cells={cells} onCellClick={handleClick} />);
  });


  it('renders all cells', () => {
    expect(screen.getByTestId('testBoard')).toBeInTheDocument();
    expect(screen.getAllByTestId(/cell-\d/)).toHaveLength(9);
  });

  it('calls onCellClick handler when a cell is clicked', () => {
    fireEvent.click(screen.getByTestId('cell-0'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
})