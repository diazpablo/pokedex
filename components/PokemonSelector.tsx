import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  height: 100%;
  overflow-y: auto;
`;

const PokemonSelector = ({ pokemons, onSelect }) => {
  return (
    <Wrapper>
      {
        pokemons && pokemons.map(p => (
          <a key={ p.num } onClick={ () => onSelect(p.num) }><img src={ p.img } /></a>
        ))
      }
    </Wrapper>
  );
};

export default PokemonSelector;
