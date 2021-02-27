import { useState } from 'react';
import Head from 'next/head';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import Layout from '../components/Layout';
import PokemonSelector from '../components/PokemonSelector';
import PokemonCard from '../components/common/PokemonCard';
import { PokemonWrapper } from '../ui/styles/';
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

const GET_POKEMON = gql`
  query Pokemon($num: String!) {
    pokemon: getPokemon(uid: $num) {
      id, 
      num,
      name
      img
      type
      height
      weight
      weaknesses
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
  const [ selectedEvolution, setSelectedEvolution ] = useState(null);

  const { loading, error, data } = useQuery(GET_POKEMONS);

  const [ getPokemon, { loading: loadingPokemon, data: dataPokemon, error: errorPokemon } ] = useLazyQuery(GET_POKEMON);

  const [ getEvolution, {
    loading: loadingEvolution,
    data: dataEvolution,
    error: errorEvolution
  } ] = useLazyQuery(GET_POKEMON);

  if (error || errorPokemon || errorEvolution) return <>There was an error please try again Later</>;

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout loading={ loading || loadingPokemon || loadingEvolution }>
        <Container>
          <Column>

            <PokemonSelector
              selected={ dataPokemon?.pokemon?.num }
              pokemons={ data?.pokemons }
              onSelect={ num => {
                setSelectedEvolution(false);
                getPokemon({ variables: { num } });
              } }
            />

          </Column>
          <Column size={ 2 }>
            <Container>
              <Column style={ { marginRight: '3rem' } }>
                <PokemonWrapper>
                  {
                    // Main PokemonCard
                    dataPokemon && <PokemonCard pokemon={ dataPokemon?.pokemon } />
                  }

                  {
                    // Evolution Selector
                    dataPokemon &&
                    <EvolutionSelector
                      previous={ dataPokemon.pokemon.prev_evolution }
                      next={ dataPokemon.pokemon.next_evolution }
                      onSelect={ num => {
                        setSelectedEvolution(true);
                        getEvolution({ variables: { num } });
                      } }
                    />
                  }
                </PokemonWrapper>
              </Column>
              <Column>
                <PokemonWrapper>
                  {
                    // Secondary PokemonCard
                    dataEvolution && selectedEvolution && <PokemonCard pokemon={ dataEvolution?.pokemon } />
                  }
                </PokemonWrapper>
              </Column>
            </Container>
          </Column>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
