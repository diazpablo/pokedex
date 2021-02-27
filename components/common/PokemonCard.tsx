import React from 'react';
import styled from 'styled-components';
import { BORDER, DARK, DARK_BLUE, LIGHT, LIGHT_BLUE, MEDIUM, RADIUS } from '../../ui/settings';
import PokeballIcon from '../../ui/svg/pokeball.svg';

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

const DescriptionWrapper = styled.div`
  background-color: #fff;
  padding: 2rem 1rem;
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

const PlaceholderWrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Pokeball = styled(PokeballIcon)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  path {
    fill: ${ LIGHT };
  }
`;

const PokemonCard = ({ pokemon, placeholder, ...rest }) => {
  if (!pokemon) return <PlaceholderWrapper>
    <Pokeball />
    <p>{ placeholder }</p>
  </PlaceholderWrapper>;

  return (
    <CardWrapper { ...rest }>
      <PokeImg src={ pokemon.img } alt={ pokemon.name } />

      <DescriptionWrapper>
        <PokeName>{ pokemon.name }</PokeName>
        <PokeTypes>{ pokemon.type.map(t => <PokeType key={ t }>{ t }</PokeType>) }</PokeTypes>
        <p><strong>Height:</strong> { pokemon.height }</p>
        <p><strong>Weight:</strong> { pokemon.weight }</p>
        <p><strong>Weaknesses:</strong> { pokemon.weaknesses.join(', ') }</p>
      </DescriptionWrapper>
    </CardWrapper>
  );
};

export default PokemonCard;
