import styled from 'styled-components';

export const ButtonContainer = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  background-color: rgba(118, 200, 147, 0.6);
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: rgba(118, 200, 147, 0.9);
  }
`;
