import React, { useState } from 'react';
import styled from 'styled-components';

const PlayingCard = styled.div<{ isFlipped: boolean }>`
  width: 140px;
  height: 200px;
  margin: 10px;

  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    transform: rotateY(20deg);
  }

  ${props => props.isFlipped && `
    transform: rotateY(180deg);

    &:hover {
      transform: rotateY(200deg);
    }
  `}

  & > div {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #f6f3e9;
    border-radius: 10px;
  box-shadow: 1px 1px 3px;
  }

`;

const Front = styled.div`
`;

const Back = styled.div`
  transform: rotateY(180deg);
`;

const Card: React.FC = ({ children }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <PlayingCard onClick={() => setFlipped(!isFlipped)} isFlipped={isFlipped}>
      <Front>
        {children}
      </Front>
      <Back>Back</Back>
    </PlayingCard>
  )
}

export default Card;
