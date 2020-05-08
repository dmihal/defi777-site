import React from 'react';
import styled from 'styled-components';
import aaveLogo from './images/aave.svg';
import trip7 from './images/trip-7.svg';
import Page from './Page';

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
`;

const AavePage = () => {
  return (
    <AavePageContainer>
      <AaveLogo />
      <p>Put your money to work! Swap your tokens for aTokens and start earning interest</p>
        <p>Send tokens to aave777.eth</p>
        <p>Aave777 supports all tokens that are available to lend in Aave:</p>
        <ul>
          <li>Dai-777</li>
          <li>USDC-777</li>
          <li>USDT-777</li>
        </ul>
    </AavePageContainer>
  )
}

export default AavePage;
