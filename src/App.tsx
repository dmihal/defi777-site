import React from 'react';
import styled from 'styled-components';
import './App.css';
import Logo from './Logo';
import AavePage from './AavePage';
import BalancerPage from './BalancerPage';
import UniswapPage from './UniswapPage';
import Page from './Page';

const LandingPage = styled(Page)`
  background: linear-gradient(#0E161E, #0E2036);
  padding: 42px;
  box-shadow: inset 0px 0 60px 30px #040a10;
`;

function App() {
  return (
    <div className="App">
      <LandingPage>
        <Logo />
      </LandingPage>

      <Page>
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
      </Page>

      <UniswapPage />

      <AavePage />

      <BalancerPage />
    </div>
  );
}

export default App;
