import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PokeBallIcon from '../ui/svg/pokeball.svg';
import { device } from '../ui/styles/sizes';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media ${ device.tabletH } {
    height: 100vh;
  }
`;

const Main = styled.main`
  flex: 1;
  overflow: hidden;
`;

const Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);
`;

const Loader = styled(PokeBallIcon)`
  width: 50px;
  height: 50px;
  animation: rotate-center 2s linear infinite;

  path {
    fill: #fff;
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Layout = ({ loading = false, children }) => {
    return (
      <LayoutStyled>
        { loading && <Loading><Loader /></Loading> }
        <Header />
        <Main>
          { children }
        </Main>
        <Footer />
      </LayoutStyled>
    );
  }
;

export default Layout;
