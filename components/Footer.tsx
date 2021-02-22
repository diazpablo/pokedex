import React from 'react';
import { Container } from '../ui/styles/styledGrid';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: 1rem 0;
`;

const Footer = () => {
    return (
      <FooterStyled>
        <Container>
          ©{ new Date().getFullYear() } Gotta catch 'em all
        </Container>
      </FooterStyled>
    );
  }
;

export default Footer;
