import React from 'react'
import { ButtonContainer } from './Button.styles'

const Button = ({ onClick, children, ...props }) => {
  return (
    <ButtonContainer {...props}  onClick={onClick} data-testid={props['data-testid'] || "testButton"}>
      {children}
    </ButtonContainer>
  );
};

export default Button