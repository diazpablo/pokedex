import React from 'react';
import styled from 'styled-components';
import { BORDER, BUTTON, RADIUS } from '../ui/settings';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: .5rem;
  border-top: 1px solid ${ BORDER }
`;

const EvolutionBtn = styled.button.attrs({
  type: 'button'
})`
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0);
  transition: all .4s;
  border-radius: ${ RADIUS };

  small {
    display: block;
    letter-spacing: 1px;
  }

  &:hover {
    //background-color: rgba(0, 0, 0, .6);
    color: ${ BUTTON };
  }
`;

const EvolutionSelector = ({ previous, next, onSelect }) => {
    if (!previous && !next) return null;
    return (
      <Wrapper>
        {
          previous?.map(ev => (
            <EvolutionBtn key={ ev.num } onClick={ () => onSelect(ev.num) }>
              <small>Previous Evolution</small>
              { ev.name }
            </EvolutionBtn>
          ))
        }
        {
          next?.map(ev => (
            <EvolutionBtn key={ ev.num } onClick={ () => onSelect(ev.num) }>
              <small>Next Evolution</small>
              { ev.name }
            </EvolutionBtn>
          ))
        }
      </Wrapper>
    );
  }
;

export default EvolutionSelector;
