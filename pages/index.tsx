import { useState } from 'react';
import Head from 'next/head';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/common/PokemonCard';
import { Container, Column } from '../ui/styles/styledGrid';

const GET_POKEMONS = gql`
  query allPokemons {
    pokemons: getPokemons {
      num,
      img
    }
  }
`;

const GET_POKEMON_EVOLUTIONS = gql`
 query Pokemon($num: String!) {
    pokemon: getPokemon(uid: $num) {
      prev_evolution {
        num, name
      }
      next_evolution {
        num, name
      }
    }
  }
`;

const Home = () => {
  const [ selectedPokemon, setSelectedPokemon ] = useState(null);

  const { loading, error, data } = useQuery(GET_POKEMONS);

  const [ getEvolutions, { loading: loadingEvolution, data: dataEvolutions } ] = useLazyQuery(GET_POKEMON_EVOLUTIONS);

  if (loading) return <p>Loading ...</p>;

  if (error) return <>`Error! ${ error.message }`</>;

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Container>
          <Column>
            { loading
              ? 'Loading...'
              : <PokemonSelector
                pokemons={ data.pokemons }
                onSelect={ num => {
                  setSelectedPokemon(num);
                  getEvolutions({ variables: { num } });
                } }
              />
            }
          </Column>
          <Column size={ 2 }>
            <div>Pokemon Selected Num:{ selectedPokemon }</div>

            { selectedPokemon && <PokemonCard pokemonNum={ selectedPokemon } /> }

            <div>
              Prev Evolution: { dataEvolutions?.pokemon.prev_evolution?.map(ev => `${ ev.name } `) }
            </div>
            <div>
              Next Evolution: { dataEvolutions?.pokemon.next_evolution?.map(ev => `${ ev.name } `) }
            </div>
          </Column>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
