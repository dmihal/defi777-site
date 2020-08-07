import React, { useState } from 'react';
import styled from 'styled-components';
import BaseCard from './BaseCard';
import CardFace from './CardFace';
import TokenWrapper from '../TokenWrapper';

const Container = styled.div`
  cursor: default;
`;

const Text = styled.p`
  font-size: 18px;
  margin: 8px;
`;

interface WrapperCardProps {
  token: string;
  wrapper: string;
  corner: string;
  name: string;
  unit?: string;
}

const WrapperCard: React.FC<WrapperCardProps> = ({ children, token, wrapper, corner, name, unit }) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <BaseCard
      grow
      front={<CardFace corner={corner}>{children}</CardFace>}
      back={
        <Container
          onClick={(e: any) => e.stopPropagation()}
          onMouseEnter={() => setMouseIn(true)}
          onMouseLeave={() => setMouseIn(false)}
        >
          <Text>The easiest way to obtain {name}-777 is by swapping through Uniswap777 or Balancer777</Text>
          <Text>If you would like to wrap your existing {name}, you can connect to your wallet here</Text>
          <TokenWrapper token={token} wrapper={wrapper} name={name} unit={unit} />
        </Container>
      }
      hoverDisabled={mouseIn}
    />
  );
}

export default WrapperCard;
