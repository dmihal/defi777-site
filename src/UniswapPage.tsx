import React from 'react';
import styled from 'styled-components';
import uniswapLogo from './images/uniswap.svg';
import trip7 from './images/trip-7.svg';
import AddressCard from './card/AddressCard';
import Cards from './card/Cards';
import Page from './Page';
import dai from './images/dai.svg';
import usdc from './images/usdc.svg';
import mkr from './images/mkr.svg';
import { SubHeading } from './typography';

const UniswapPageContainer = styled(Page)`
  background: #f4bece;
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

  @media (max-width: 760px) {
    transform: scale(0.8);
  }
  @media (max-width: 570px) {
    transform: scale(0.6);
  }
  @media (max-width: 440px) {
    transform: scale(0.4);
  }
`;

const BalancerPage = () => {
  return (
    <UniswapPageContainer>
      <UniswapLogo />
      <SubHeading>Send ETH or 777 tokens to the following addresses to swap for that token</SubHeading>
      <p>Example: Send Dai777 to mkr.uniswap777.eth to swap for MKR777</p>
      <Cards>
        <AddressCard corner={dai} domain="dai.uniswap777.eth" address="0x75339Bc10044e888B8635178a5752644a61F5217">
          <div>Swap to Dai</div>
        </AddressCard>
        <AddressCard corner={usdc} domain="usdc.uniswap777.eth" address="0x7FD09A4dcdB7823695149947F03d22901e1c1Ecf">
          <div>Swap to USDC</div>
        </AddressCard>
        <AddressCard corner={mkr} domain="mkr.uniswap777.eth" address="0xfda7ff1ba926263ca698f25f0fb01aa293d44896">
          <div>Swap to MKR</div>
        </AddressCard>
      </Cards>
      <p>Want to swap to ETH? Send a token to it's own Uniswap address to swap into ETH</p>
      <p>Example: Send Dai777 to dai.uniswap.eth to swap into ETH</p>
      <p>Caution: Only send ERC777 wrappers to these addresses. Sending unwrapped ERC20 tokens will result in token loss.</p>
    </UniswapPageContainer>
  );
}

export default BalancerPage;
