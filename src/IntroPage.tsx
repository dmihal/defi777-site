import React from 'react';
import styled from 'styled-components';
import Page from './Page';

const IntroPageContainer = styled(Page)`
  background: #f75252;
`;

const IntroPage = () => {
  return (
    <IntroPageContainer>
      <h1>Use DeFi in any wallet</h1>
      <p>
        DeFi777 wraps all the best Ethereum Tokens (Dai, USDC, MKR, etc) and best DeFi products {}
        (Uniswap, Aave, Balancer, etc) so you can use them in any wallet.
      </p>
      <p>
        Using DeFi is as simple as sending a token!
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
