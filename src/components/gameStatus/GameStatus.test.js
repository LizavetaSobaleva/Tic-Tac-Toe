import React from 'react'
import { render, screen } from '@testing-library/react'
import GameStatus from './GameStatus'

describe('GameStatus Component', () => {
  const renderWithState = (state) => {
    render(<GameStatus state={state} />);
  };

  it('renders current player when playing', () => {
    const state = {
      matches: (value) => value === 'playing',
      context: { currentPlayer: 'X' }
    };
    renderWithState(state);

    expect(screen.getByTestId('currentPlayer')).toHaveTextContent('Current Player: X');
  });

  it('renders winner when won', () => {
    const state = {
      matches: (value) => value === 'won',
      context: { currentPlayer: 'O' }
    };
    renderWithState(state);

    expect(screen.getByTestId('winner')).toHaveTextContent('Winner: O');
  });

  it('renders draw message when draw', () => {
    const state = {
      matches: (value) => value === 'draw',
      context: {}
    };
    renderWithState(state);

    expect(screen.getByTestId('draw')).toHaveTextContent("It's a Draw!");
  })
})
