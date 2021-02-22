import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  height: 100%;
  overflow-y: auto;
`;

const PokemonButton = styled.button`
  background: none;
  outline: none;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

const PokemonSelector = ({ pokemons, onSelect }) => {
  return (
    <Wrapper>
      {
        pokemons && pokemons.map(p => (
          <PokemonButton
            key={ p.num }
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
