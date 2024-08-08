import styled from 'styled-components'

export const CellContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  font-size: 24px;

  &:hover {
    border-color: rgb(118, 200, 147);
  }
`;