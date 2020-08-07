import React from 'react';
import styled from 'styled-components';
import Page from './Page';
import github from './images/github.svg';


const DevelopersPageContainer = styled(Page)`
  background: #292b2b;
  box-shadow: inset 0px 0 100px 60px rgba(0, 0, 0, 0.7);
`;

const Title = styled.h2`
  font-family: monospace;
  color: #eeeeee;
  font-size: 72px;

  @media (max-width: 570px) {
    font-size: 42px;
  }
`;

const Text = styled.p`
  color: #eeeeee;

  a {
    color: #dddddd;
  }
`;

const GithubButton = styled.a`
  display: block;
  border: solid 2px #444444;
  padding: 8px;
  padding-left: 38px;
  background-image: url('${github}');
  background-repeat: no-repeat;
  background-size: 32px;
  background-position: 4px center;
  color: #eeeeee;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    background-color: #545656;
  }
`;

const DevelopersPage = () => {
  return (
    <DevelopersPageContainer>
      <Title>Developers</Title>
      <Text>DeFi777 simplifies DeFi development by simplifying complex contract calls into simple token transfers</Text>
      <GithubButton href="https://github.com/dmihal/defi777">View more details on GitHub</GithubButton>
      <Text>Want to collaborate? Reach out to <a href="https://twitter.com/dmihal">@DMihal on Twitter</a></Text>
    </DevelopersPageContainer>
  );
}

export default DevelopersPage;
