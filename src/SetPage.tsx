import React from 'react';
import styled from 'styled-components';
import setLogo from './images/set.svg';
import trip7 from './images/trip-7.svg';
import Page from './Page';
import Card from './Card';
import Cards from './card/Cards';
import linkethrsi from './images/linkethrsi.svg';


const SetPageContainer = styled(Page)`
  background: #c69824;
  box-shadow: inset 0px 0 100px 60px #997115;
`;

const BalancerLogo = styled.div`
  background-image: url('${setLogo}');
  height: 90px;
  width: 380px;
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

  @media (max-width: 570px) {
    transform: scale(0.8);
  }
  @media (max-width: 440px) {
    transform: scale(0.6);
  }
`;

const SetPage = () => {
  return (
    <SetPageContainer>
      <BalancerLogo />
      <h3>Invest using Set tokens</h3>
      <p>Send 777 tokens to the address to purchase Set tokens</p>
      <Cards>
        <Card corner={linkethrsi} domain="linkethrsi.set777.eth" address="0xCB58d31394eD376Ab8871cc1FaB0991B3eD08179">
          <div>LINK/ETH RSI</div>
        </Card>
      </Cards>
    </SetPageContainer>
  );
}

export default SetPage;
