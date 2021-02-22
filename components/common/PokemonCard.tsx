import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POKEMON = gql`
  query Pokemon($num: String!) {
    pokemon: getPokemon(uid: $num) {
      name
      img
      type
      height
      weight
      weaknesses
      prev_evolution {
        num
      }
      next_evolution {
        num
      }
    }
  }
`;

type PokemonCardProps = {
  pokemonNum: string
}

const PokemonCard = ({ pokemonNum }: PokemonCardProps) => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { num: pokemonNum }
  });

  if (loading) return <>`Loading...`</>;
  if (error) return <>`Error! ${ error.message }`</>;

  const { pokemon } = data;

  return (
    <div>
      <img src={ pokemon.img } alt={ pokemon.name } />
      <h3>{ pokemon.name }</h3>

      <p><strong>Types:</strong>{ pokemon.type.map(t => <small key={ t }>{ t }</small>) }</p>
      <p><strong>Height:</strong>{ pokemon.height }</p>
      <p><strong>Weight:</strong>{ pokemon.weight }</p>
      <p><strong>Weaknesses:</strong>{ pokemon.weaknesses.map(w => <small key={ w }>{ w }</small>) }</p>
    </div>
  );
};

export default PokemonCard;
