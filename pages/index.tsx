import { useEffect, useState } from 'react';
import Head from 'next/head';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/common/PokemonCard';
import { Container, Column } from '../ui/styles/styledGrid';
import EvolutionSelector from '../components/EvolutionSelector';

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
  const [ selectedEvolution, setSelectedEvolution ] = useState(null);

  const { loading, error, data } = useQuery(GET_POKEMONS);

  const [ getEvolutions, { loading: loadingEvolution, data: dataEvolutions } ] = useLazyQuery(GET_POKEMON_EVOLUTIONS);

  useEffect(() => {
    setSelectedEvolution(null);
  }, [ selectedPokemon ]);

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

            <PokemonSelector
              selected={ selectedPokemon }
              pokemons={ data.pokemons }
              onSelect={ num => {
                setSelectedPokemon(num);
                getEvolutions({ variables: { num } });
              } }
            />
            
          </Column>
          <Column size={ 2 }>
            <Container>
              <Column style={ { marginRight: '3rem' } }>
                {
                  // Main PokemonCard
                  selectedPokemon && <PokemonCard pokemonNum={ selectedPokemon } />
                }

                {
                  // Evolution Selector
                  dataEvolutions && !loadingEvolution &&
                  <EvolutionSelector
                    previous={ dataEvolutions.pokemon.prev_evolution }
                    next={ dataEvolutions.pokemon.next_evolution }
                    onSelect={ setSelectedEvolution }
                  />
                }
              </Column>
              <Column>
                {
                  // Secondary PokemonCard
                  selectedEvolution && <PokemonCard pokemonNum={ selectedEvolution } />
                }
              </Column>
            </Container>
          </Column>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
