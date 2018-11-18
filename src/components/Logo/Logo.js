import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';
import logoImage from './logo.svg';

/**
 * Styled Components
 */
const LogoBlock = styled(Link)`
  display: inline-block;
`;

const LogoImage = styled.img`
  display: block;
  max-width: 260px;
`;

const Logo = () => {
  return (
    <LogoBlock to='/'>
      <LogoImage src={logoImage} />
    </LogoBlock>
  );
};

export default Logo;
