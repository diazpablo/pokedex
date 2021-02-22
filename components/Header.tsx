import React from 'react';
import styled from 'styled-components';
import Logo from '../ui/svg/pokemon-logo.svg';

const StyledHeader = styled.header`
  padding: 1rem 0;
  text-align: center;
`;

const StyledLogo = styled(Logo)`
  max-width: 200px;
  height: auto;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo />
    </StyledHeader>
  );
};

export default Header;
