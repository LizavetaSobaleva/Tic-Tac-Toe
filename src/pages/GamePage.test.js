import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GamePage from './GamePage'


describe('GamePage Component', () => {
  beforeEach(() => {
    render(<GamePage />);
  });

  it('renders header', () => {
    expect(screen.getByTestId('header')).toHaveTextContent('Tic Tac Toe');
  });

  it('renders start button in idle state', () => {
    expect(screen.getByTestId('startButton')).toBeInTheDocument();
  });

  it('renders board and reset button after starting the game', () => {
    fireEvent.click(screen.getByTestId('startButton'));

    expect(screen.getByTestId('gameStatus')).toBeInTheDocument();
    expect(screen.getByTestId('gameBoard')).toBeInTheDocument();
    expect(screen.getByTestId('resetButton')).toBeInTheDocument();
  });

  it('handles cell click correctly', () => {
    fireEvent.click(screen.getByTestId('startButton'));

    fireEvent.click(screen.getByTestId('cell-0'));
    expect(screen.getByTestId('cell-0')).toHaveTextContent('X');
  });

  it('resets the game correctly', () => {
    fireEvent.click(screen.getByTestId('startButton'));

    fireEvent.click(screen.getByTestId('cell-0'));
    fireEvent.click(screen.getByTestId('resetButton'));
    fireEvent.click(screen.getByTestId('startButton'));

    expect(screen.getByTestId('cell-0')).toHaveTextContent('');
  });
})