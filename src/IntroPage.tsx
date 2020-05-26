import React from 'react';
import styled from 'styled-components';
import Page from './Page';
import { Heading, SubHeading } from './typography';

const IntroPageContainer = styled(Page)`
  background: #f75252;
`;

const IntroPage = () => {
  return (
    <IntroPageContainer>
      <Heading>Use DeFi in any wallet</Heading>
      <SubHeading>
        Using DeFi is as simple as sending a token!
      </SubHeading>
      <p>
        DeFi777 wraps all the best Ethereum Tokens (Dai, USDC, MKR, etc) and best DeFi products {}
        (Uniswap, Aave, Balancer, etc) so you can use them in any wallet.
      </p>
      <p>
        Nerd stuff: DeFi777 uses ERC777 tokens with receive hooks to trigger common DeFi actions.
      </p>
      <p>
        Warning: This is an unaudited proof-of-concept. Definitely try it with a couple {}
        dollars, but use at your own risk.
      </p>
    </IntroPageContainer>
  );
}

export default IntroPage;
