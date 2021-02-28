import styled from 'styled-components';
import { device } from './sizes';

export const PokemonWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
  @media ${ device.tabletH } {
    margin: 0 2rem;
  }
`;