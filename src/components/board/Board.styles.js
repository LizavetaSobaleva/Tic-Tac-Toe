import styled from 'styled-components'

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  gap: 10px;
`;