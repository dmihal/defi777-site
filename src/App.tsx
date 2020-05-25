import React from 'react';
import styled from 'styled-components';
import './App.css';
import Logo from './Logo';
import AavePage from './AavePage';
import BalancerPage from './BalancerPage';
import DevelopersPage from './DevelopersPage';
import UniswapPage from './UniswapPage';
import Page from './Page';
import WrapperPage from './WrapperPage';
import SetPage from './SetPage';
import IntroPage from './IntroPage';

const LandingPage = styled(Page)`
  background: linear-gradient(#0E161E, #0E2036);
  padding: 42px;
  box-shadow: inset 0px 0 60px 30px #040a10;
`;

function App() {
  return (
    <div className="App">
      <LandingPage>
        <Logo />
      </LandingPage>

      <IntroPage />

      <WrapperPage />

      <UniswapPage />

      <AavePage />

      <BalancerPage />

      <SetPage />

      <DevelopersPage />
    </div>
  );
}

export default App;
