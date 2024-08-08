import React from 'react';
import { render, screen } from '@testing-library/react';
import { GlobalStyle } from './globalStyles';
import GamePage from './pages/GamePage';


describe('App Component', () => {
  beforeEach(() => {
    render(
      <>
        <GlobalStyle />
        <GamePage />
      </>
    );
  });


  it('renders the GamePage component', () => {
    expect(screen.getByTestId('gamePage')).toBeInTheDocument();
  });
})