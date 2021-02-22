import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  overflow: hidden;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Main>
        { children }
      </Main>
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
