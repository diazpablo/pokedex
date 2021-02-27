import React from 'react';
import styled from 'styled-components';
import { BORDER, DARK, DARK_BLUE, LIGHT_BLUE, MEDIUM, RADIUS } from '../../ui/settings';

const CardWrapper = styled.div`
  padding: 2rem;
  border: 1px solid ${ BORDER };
  border-radius: ${ RADIUS };
  background: ${ DARK_BLUE };
  background: linear-gradient(135deg, ${ DARK_BLUE } 0%, ${ LIGHT_BLUE } 100%);
  color: ${ DARK };
`;

const PokeImg = styled.img`
  margin: 0 auto -30px;
  height: 150px;
`;

const PokeName = styled.h2`
  text-align: center;
  margin-bottom: .5rem;
`;

const PokeTypes = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: .5rem;
`;

const PokeType = styled.span`
  margin: 0 5px;
  padding: 2px 8px;
  border: 1px solid ${ MEDIUM };
  border-radius: ${ RADIUS };
  color: ${ MEDIUM };
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
`;

const PokemonCard = ({ pokemon, ...rest }) => {
  if (!pokemon) return null;

  return (
    <CardWrapper { ...rest }>
      <PokeImg src={ pokemon.img } alt={ pokemon.name } />

      <div style={ { backgroundColor: 'white', padding: '2rem 1rem' } }>
        <PokeName>{ pokemon.name }</PokeName>
        <PokeTypes>{ pokemon.type.map(t => <PokeType key={ t }>{ t }</PokeType>) }</PokeTypes>
        <p><strong>Height:</strong> { pokemon.height }</p>
        <p><strong>Weight:</strong> { pokemon.weight }</p>
        <p><strong>Weaknesses:</strong> { pokemon.weaknesses.join(', ') }</p>
      </div>
    </CardWrapper>
  );
};

export default PokemonCard;
