import React, { Fragment } from 'react';
import styled from 'styled-components';
import trip7 from './images/trip-7.svg';
import WrapperCard from './card/WrapperCard';
import Page from './Page';
import ETHLogo from './ETHLogo';
import PokerChip from './PokerChip';
import dai from './images/dai.svg';
import usdc from './images/usdc.svg';
import mkr from './images/mkr.svg';
import link from './images/link.svg';
import wbtc from './images/wbtc.svg';
import Cards from './card/Cards';
import BaseCard from './card/BaseCard';
import IconWithTrip7 from './IconWithTrip7';

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
        <WrapperCard
          token="0x6b175474e89094c44da98b954eedeac495271d0f"
          wrapper="0x15ABbcEb05be919df1b4894B01945A8264222de7"
          corner={dai}
        >
          <IconWithTrip7 img={dai} />
          <div>Dai-777</div>
        </WrapperCard>
        <WrapperCard
          token="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
          wrapper="0xc4a51feed0b152f8c88be5867e8148db9c2dc08f"
          corner={usdc}
        >
          <IconWithTrip7 img={usdc} />
          <div>USDC-777</div>
        </WrapperCard>
        <WrapperCard
          token="0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
          wrapper="0x058042F7d66a1eb91552839F391bfBe930ddC137"
          corner={mkr}
        >
          <IconWithTrip7 img={mkr} />
          <div>MKR-777</div>
        </WrapperCard>
        <WrapperCard
          token="0x514910771af9ca656af840dff83e8264ecf986ca"
          wrapper="0x879DCd0287Aed4a93Cc647cB0804f098E1611488"
          corner={link}
        >
          <IconWithTrip7 img={link} />
          <div>Link-777</div>
        </WrapperCard>
        <WrapperCard
          token="0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          wrapper="0x3fb3b69adf18fe93a04083a07f14246186613e4c"
          corner={wbtc}
        >
          <IconWithTrip7 img={wbtc} />
          <div>WBTC-777</div>
        </WrapperCard>
        <BaseCard
          front={
            <Fragment>
              <div>Unwrap any DeFi777 token</div>
              <div>Send them to defi777.eth, receive the wrapped token</div>
            </Fragment>
          }
          back={<Fragment />}
        />
      </Cards>
      <p>These wrappers have already been created, however wrappers can be created for any ERC-20 token</p>
      <p>Developers: these wrapper tokens also support infinite flashloans and permit() metatransactions!</p>
    </WrapperPageContainer>
  );
}

export default WrapperPage;
