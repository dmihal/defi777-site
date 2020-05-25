import React from 'react';
import styled from 'styled-components';
import aaveLogo from './images/aave.svg';
import trip7 from './images/trip-7.svg';
import Page from './Page';
import AddressCard from './card/AddressCard';
import dai from './images/dai.svg';
import usdc from './images/usdc.svg';
import eth from './images/eth.svg';
import Cards from './card/Cards';

const AavePageContainer = styled(Page)`
  background: #e7d0e4;
`;

const AaveLogo = styled.div`
  background-image: url('${aaveLogo}');
  height: 90px;
  width: 540px;
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

const BigText = styled.p`
  font-size: 24px;
  margin: 0 20px;
`;

const AavePage = () => {
  return (
    <AavePageContainer>
      <AaveLogo />
      <BigText>Put your money to work! Swap your tokens for aTokens and start earning interest</BigText>
      <p>Send 777 tokens to aave777.eth to receive aToken777s</p>

      <Cards>
        <AddressCard corner={eth} domain="aave777.eth" address="0x729a15b1b2E695Fa4C948Ee138cFBbA609D668b4">
          <div>Lend your ETH</div>
        </AddressCard>
        <AddressCard corner={dai} domain="aave777.eth" address="0x729a15b1b2E695Fa4C948Ee138cFBbA609D668b4">
          <div>Lend your Dai</div>
        </AddressCard>
        <AddressCard corner={usdc} domain="aave777.eth" address="0x729a15b1b2E695Fa4C948Ee138cFBbA609D668b4">
          <div>Lend your USDC</div>
        </AddressCard>
      </Cards>
    </AavePageContainer>
  )
}

export default AavePage;
