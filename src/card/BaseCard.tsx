import React, { useState } from 'react';
import styled from 'styled-components';

const PlayingCard = styled.div<{ isFlipped: boolean; hover: boolean }>`
  width: 140px;
  height: 200px;
  margin: 10px;

  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  cursor: pointer;
  border-radius: 10px;

  ${props => props.hover && `
    transform: rotateY(20deg);
  `}

  ${props => props.isFlipped && `
    transform: rotateY(180deg);
    z-index: 10;
  `}

  ${props => props.isFlipped && props.hover && `
    transform: rotateY(200deg);
  `}
`;

const Face = styled.div`
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
`;

const Front = styled(Face)<{ grow?: boolean; isFlipped: boolean }>`
  ${props => props.grow && `
    transition: transform 1s;
    transform: scale(1);
  `}

  ${props => props.grow && props.isFlipped && `
    transform: scale(2);
  `}
`;

const Back = styled(Face)<{ grow?: boolean; isFlipped: boolean }>`
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  font-size: 11px;
  align-items: center;
  justify-content: space-evenly;

  ${props => props.grow && `
    right: -50%;
    left: -50%;
    top: -50%;
    bottom: -50%;

    transition: transform 1s;
    transform: rotateY(180deg) scale(0.5);
  `}

  ${props => props.grow && props.isFlipped && `
    transform: rotateY(180deg) scale(1);
  `}
`;

interface BaseCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  grow?: boolean;
  hoverDisabled?: boolean;
}

const BaseCard: React.FC<BaseCardProps> = ({ front, back, grow, hoverDisabled }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <PlayingCard
      isFlipped={isFlipped}
      hover={hover && !hoverDisabled}
      onClick={() => setFlipped(!isFlipped)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Front isFlipped={isFlipped} grow={grow}>
        {front}
      </Front>
      <Back isFlipped={isFlipped} grow={grow}>
        {back}
      </Back>
    </PlayingCard>
  )
}

export default BaseCard;
