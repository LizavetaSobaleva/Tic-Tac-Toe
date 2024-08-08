import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  let handleClick

  beforeEach(() => {
    handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
  });

  
  it('renders correctly with given children', () => {
    expect(screen.getByTestId('testButton')).toBeInTheDocument();
    expect(screen.getByTestId('testButton')).toHaveTextContent('Click Me');
  });

  it('calls onClick handler when clicked', () => {
    fireEvent.click(screen.getByTestId('testButton'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has correct styles applied', () => {
    const buttonElement = screen.getByTestId('testButton');
    expect(buttonElement).toHaveStyle(`
        margin-top: 20px;
        padding: 12px 24px;
        font-size: 16px;
        cursor: pointer;
    `);
  });
});