import React from 'react';
import styled, { css } from 'styled-components';
import { BUTTON, LIGHT, RADIUS } from '../ui/settings';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  height: 100%;
  padding: 0 1rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, .4);
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    background: ${ LIGHT };
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${ BUTTON };
  }
`;

const PokemonButton = styled.button.attrs({
  type: 'button'
})`
  background-color: rgba(0, 0, 0, 0);
  border-radius: ${ RADIUS };
  padding: 1rem .5rem;
  transition: background-color .4s;

  &:hover {
    background-color: rgba(0, 0, 0, .6);
  }

  ${ props => props.selected && css`
    background-color: rgba(0, 0, 0, .35);
  ` }
`;

const PokemonSelector = ({ pokemons, selected, onSelect }) => {
  return (
    <Wrapper>
      {
        pokemons && pokemons.map(p => (
          <PokemonButton
            key={ p.num }
            selected={ p.num === selected }
            onClick={ () => onSelect(p.num) }
          >
            <img src={ p.img } />
          </PokemonButton>
        ))
      }
    </Wrapper>
  );
};

export default PokemonSelector;
