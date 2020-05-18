import React from 'react';
import styled from 'styled-components';
import uniswapLogo from './images/uniswap.svg';
import trip7 from './images/trip-7.svg';
import Card from './Card';
import Page from './Page';
import dai from './images/dai.svg';
import usdc from './images/usdc.svg';
import mkr from './images/mkr.svg';

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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BalancerPage = () => {
  return (
    <UniswapPageContainer>
      <UniswapLogo />
      <p>Send ETH or 777 tokens to the following addresses to swap for that token</p>
      <Cards>
        <Card corner={dai} domain="mkr.uniswap777.eth" address="0x000000">
          <div>Swap to Dai</div>
        </Card>
        <Card corner={usdc} domain="mkr.uniswap777.eth" address="0x000000">
          <div>Swap to USDC</div>
        </Card>
        <Card corner={mkr} domain="mkr.uniswap777.eth" address="0x000000">
          <div>Swap to MKR</div>
        </Card>
      </Cards>
      <p>Want to swap to ETH? Send a token to it's own Uniswap address to swap into ETH</p>
      <p>Example: Send Dai777 to dai.uniswap.eth to swap into ETH</p>
      <p>Caution: Only send ERC777 wrappers to these addresses. Sending unwrapped ERC20 tokens will result in token loss.</p>
    </UniswapPageContainer>
  );
}

export default BalancerPage;
