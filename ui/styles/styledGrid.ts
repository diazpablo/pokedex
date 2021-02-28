import styled from 'styled-components';
import { device } from './sizes';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  max-height: 100%;
  @media ${ device.tablet } {
    padding: ${ props => props.fluid ? 0 : '0 30px' };
  }
  @media ${ device.tabletH } {
    flex-wrap: nowrap;
  }
  @media ${ device.laptopL } {
    max-width: 1100px;
    margin: 0 auto;
  }
`;

export const Column = styled.div`
  max-height: 100%;
  width: ${ props => props.size ? props.size / 12 * 100 : 100 }%;
  @media ${ device.tablet } {
    width: ${ props => (props.md || props.size) ? (props.md || props.size) / 12 * 100 : 100 }%;
  }
  @media ${ device.tabletH } {
    width: ${ props => (props.lg || props.md || props.size) ? (props.lg || props.md || props.size) / 12 * 100 : 100 }%;
  }
`;
