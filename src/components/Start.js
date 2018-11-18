import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';

/**
 * Styled Components
 */
const StartBlock = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 60px 30px;
  box-sizing: border-box;
`;

/**
 * Component
 */
const Start = () => {
  return (
    <StartBlock>
      <Logo />
    </StartBlock>
  );
};

export default Start;
