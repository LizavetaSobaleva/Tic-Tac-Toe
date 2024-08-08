import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Cell from './Cell'

describe('Cell Component', () => {
  let handleClick

  beforeEach(() => {
    handleClick = jest.fn()
    render(<Cell value="X" onClick={handleClick} />)
  });


  it('renders correctly with given value', () => {
    expect(screen.getByTestId('testCell')).toBeInTheDocument();
    expect(screen.getByTestId('testCell')).toHaveTextContent('X');
  });

  it('calls onClick handler when clicked', () => {
    fireEvent.click(screen.getByTestId('testCell'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has correct styles applied', () => {
    const cellElement = screen.getByTestId('testCell');

    expect(cellElement).toHaveStyle(`
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid lightgray;
        border-radius: 20px;
        background-color: white;
        cursor: pointer;
    `);
  });
});