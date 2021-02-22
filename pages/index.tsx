import Head from 'next/head';
import Layout from '../components/Layout';
import { Container } from '../ui/styles/styledGrid';

const Home = () => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Container>
          App
        </Container>
      </Layout>
    </>
  );
};

export default Home;
