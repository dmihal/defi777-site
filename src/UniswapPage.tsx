import React from 'react';
import styled from 'styled-components';
import uniswapLogo from './images/uniswap.svg';
import trip7 from './images/trip-7.svg';
import Page from './Page';

const UniswapPageContainer = styled(Page)`
  background: #f0a8be;
`;

const UniswapLogo = styled.div`
  background-image: url('${uniswapLogo}');
  height: 90px;
  width: 560px;
  background-size: contain;
  background-repeat: no-repeat;

  &:after {
    content: '';
    display: block;
    background-image: url('${trip7}');
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: right center;
  }
`;

const BalancerPage = () => {
  return (
    <UniswapPageContainer>
      <UniswapLogo />
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
    </UniswapPageContainer>
  );
}

export default BalancerPage;
