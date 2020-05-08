import React from 'react';
import styled from 'styled-components';
import './App.css';
import Logo from './Logo';

const Page = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LandingPage = styled(Page)`
  background: linear-gradient(#0E161E, #0E2036);
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

      <Page>
        <h1>Uniswap777</h1>
        <p>Send ETH or 777 tokens to the following addresses to swap for that token</p>
        <ul>
          <li>
            <div>Swap to Dai</div>
            <div>dai.uniswap777.eth</div>
          </li>
          <li>
            <div>Swap to USDC</div>
            <div>usdc.uniswap777.eth</div>
          </li>
          <li>
            <div>Swap to MKR</div>
            <div>mkr.uniswap777.eth</div>
          </li>
        </ul>
        <p>Want to swap to ETH? Send a token to it's own Uniswap address to swap into ETH</p>
        <p>Example: Send Dai777 to dai.uniswap.eth to swap into ETH</p>
        <p>Caution: Only send ERC777 wrappers to these addresses. Sending unwrapped ERC20 tokens will result in token loss.</p>
      </Page>

      <Page>
        <h1>Aave777</h1>
        <p>Put your money to work! Swap your tokens for aTokens and start earning interest</p>
        <p>Send tokens to aave777.eth</p>
        <p>Aave777 supports all tokens that are available to lend in Aave:</p>
        <ul>
          <li>Dai-777</li>
          <li>USDC-777</li>
          <li>USDT-777</li>
        </ul>
      </Page>

      <Page>
        <h1>Balancer777</h1>
        <p>Swap tokens with low slippage using Balancer</p>
        <p>Send 777 tokens to the address of your desired output, and it will automatically swap using the pool with the best price</p>
        <ul>
          <li>dai.balancer777.eth</li>
          <li>usdc.balancer777.eth</li>
        </ul>
      </Page>
    </div>
  );
}

export default App;
