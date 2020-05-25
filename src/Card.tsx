import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

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

const CardFace = styled.div<{ corner?: string }>`
  margin: 20px;
  border: solid 2px #444444;
  border-radius: 4px;
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.corner && `
    &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      background-image: url('${props.corner}');
      height: 16px;
      width: 16px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &:before {
      top: -8px;
      left: -20px;
    }

    &:after {
      bottom: -8px;
      right: -20px;
    }
  `}
`;

const AddressRow = styled.div`
  display: flex;
`;

interface CardProps {
  corner?: string;
  domain: string;
  address: string;
}

const Card: React.FC<CardProps> = ({ children, corner, address, domain }) => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <PlayingCard onClick={() => setFlipped(!isFlipped)} isFlipped={isFlipped}>
      <Front>
        <CardFace corner={corner}>
          {children}
        </CardFace>
      </Front>
      <Back>
        <QRCode value={address} />
        <div>{domain}</div>
        <AddressRow onClick={(e: any) => e.stopPropagation()}>
          {address.substr(0, 16)}
        </AddressRow>
      </Back>
    </PlayingCard>
  )
}

export default Card;
