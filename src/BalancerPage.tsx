import React from 'react';
import styled from 'styled-components';
import balancerLogo from './images/balancer.svg';
import trip7 from './images/trip-7.svg';
import Page from './Page';
import AddressCard from './card/AddressCard';
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

  @media (max-width: 660px) {
    transform: scale(0.8);
  }
  @media (max-width: 470px) {
    transform: scale(0.6);
  }
  @media (max-width: 340px) {
    transform: scale(0.4);
  }
`;


const BalancerPage = () => {
  return (
    <BalancerPageContainer>
      <BalancerLogo />
      <h3>Swap tokens with low slippage using Balancer</h3>
      <p>Send 777 tokens to the address of your desired output, and it will automatically swap using the pool with the best price</p>
      <Cards>
        <AddressCard corner={dai} domain="dai.balancer777.eth" address="0xd4F61686A49e4f4151d59acc260D448EFe07439e">
          <div>Swap to Dai</div>
        </AddressCard>
        <AddressCard corner={usdc} domain="usdc.balancer777.eth" address="0xd049884C5eF0e8BBCf03265E0e3B98671959509D">
          <div>Swap to USDC</div>
        </AddressCard>
        <AddressCard corner={wbtc} domain="wbtc.balancer777.eth" address="0x98E28C255659C28c92Df5431a361279aC7320F8f">
          <div>Swap to WBTC</div>
        </AddressCard>
        <AddressCard corner={link} domain="link.balancer777.eth" address="0x0c8ca6e4F1383b53E601d3ED36c48A43c8f8402a">
          <div>Swap to LINK</div>
        </AddressCard>
      </Cards>
    </BalancerPageContainer>
  );
}

export default BalancerPage;
