import React from 'react';
import styled from 'styled-components';
import balancerLogo from './images/balancer.svg';
import trip7 from './images/trip-7.svg';
import Page from './Page';
import Card from './Card';
import dai from './images/dai.svg';
import usdc from './images/usdc.svg';
import wbtc from './images/wbtc.svg';
import link from './images/link.svg';
import Cards from './card/Cards';

const BalancerPageContainer = styled(Page)`
  background: #96dec7;
`;

const BalancerLogo = styled.div`
  background-image: url('${balancerLogo}');
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


const BalancerPage = () => {
  return (
    <BalancerPageContainer>
      <BalancerLogo />
      <h3>Swap tokens with low slippage using Balancer</h3>
      <p>Send 777 tokens to the address of your desired output, and it will automatically swap using the pool with the best price</p>
      <ul>
        <li>dai.balancer777.eth</li>
        <li>usdc.balancer777.eth</li>
      </ul>
      <Cards>
        <Card corner={dai} domain="dai.balancer777.eth" address="0x000000">
          <div>Swap to Dai</div>
        </Card>
        <Card corner={usdc} domain="usdc.balancer777.eth" address="0x000000">
          <div>Swap to USDC</div>
        </Card>
        <Card corner={wbtc} domain="wbtc.balancer777.eth" address="0x000000">
          <div>Swap to WBTC</div>
        </Card>
        <Card corner={link} domain="link.balancer777.eth" address="0x000000">
          <div>Swap to LINK</div>
        </Card>
      </Cards>
    </BalancerPageContainer>
  );
}

export default BalancerPage;
