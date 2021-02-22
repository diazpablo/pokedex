import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 0 30px;
`;

export const Column = styled.div`
  flex: ${ props => props.size || 1 };
`;
