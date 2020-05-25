import React from 'react';
import styled from 'styled-components';
import trip7 from './images/trip-7.svg';
import Card from './Card';
import Page from './Page';
import ETHLogo from './ETHLogo';
import PokerChip from './PokerChip';
import dai from './images/dai.svg';
import usdc from './images/usdc.svg';
import mkr from './images/mkr.svg';
import link from './images/link.svg';
import wbtc from './images/wbtc.svg';

const WrapperPageContainer = styled(Page)`
  background: #aaa8f0;
`;

const WrapperLogo = styled.div`
  background-image: url('${trip7}');
  height: 90px;
  width: 660px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  background-position: 34%;
  font-size: 70px;

  &:before {
    content: 'ERC-';
  }
  &:after {
    content: 'Wrappers';
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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ChipContainer = styled.div`
  width: 200px;
  font-size: 12px;
`;

const StyledETHLogo = styled(ETHLogo)`
  height: 50%;
  z-index: 10;
`;

const WrapperPage = () => {
  return (
    <WrapperPageContainer>
      <WrapperLogo />
      <p>DeFi777 supercharges your favorite ERC-20 tokens by wrapping them into ERC-777 tokens</p>
      <Cards>
        <ChipContainer>
          <PokerChip>
            <StyledETHLogo />
          </PokerChip>
          <div>ETH doesn't need to be wrapped! You can send normal ETH to any DeFi777 address</div>
        </ChipContainer>
        <Card corner={dai} domain="mkr.uniswap777.eth" address="0x000000">
          <div>Dai-777</div>
        </Card>
        <Card corner={usdc} domain="mkr.uniswap777.eth" address="0x000000">
          <div>USDC-777</div>
        </Card>
        <Card corner={mkr} domain="mkr.uniswap777.eth" address="0x000000">
          <div>MKR-777</div>
        </Card>
        <Card corner={link} domain="mkr.uniswap777.eth" address="0x000000">
          <div>Link-777</div>
        </Card>
        <Card corner={wbtc} domain="mkr.uniswap777.eth" address="0x000000">
          <div>WBTC-777</div>
        </Card>
        <Card corner={mkr} domain="defi777.eth" address="0x000000">
          <div>Unwrap any DeFi777 token</div>
          <div>Send them to defi777.eth, receive the wrapped token</div>
        </Card>
      </Cards>
      <p>These wrappers have already been created, however wrappers can be created for any ERC-20 token</p>
      <p>Developers: these wrapper tokens also support infinite flashloans and permit() metatransactions!</p>
    </WrapperPageContainer>
  );
}

export default WrapperPage;
