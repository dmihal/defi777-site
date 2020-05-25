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
    display: flex;
    flex-direction: column;
    z-index: 0;
  }

`;

const Front = styled.div`
`;

const Back = styled.div`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  font-size: 11px;
  align-items: center;
  justify-content: space-evenly;
`;

interface BaseCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

const BaseCard: React.FC<BaseCardProps> = ({ front, back }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <PlayingCard onClick={() => setFlipped(!isFlipped)} isFlipped={isFlipped}>
      <Front>
        {front}
      </Front>
      <Back>
        {back}
      </Back>
    </PlayingCard>
  )
}

export default BaseCard;
