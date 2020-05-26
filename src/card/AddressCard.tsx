import React, { Fragment } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import BaseCard from './BaseCard';

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

const AddressCard: React.FC<CardProps> = ({ children, corner, address, domain }) => {
  return (
    <BaseCard
      front={
        <CardFace corner={corner}>
          {children}
        </CardFace>
      }
      back={
        <Fragment>
          <QRCode value={address} renderAs="svg" />
          <div>{domain}</div>
          <AddressRow onClick={(e: any) => e.stopPropagation()}>
            {address.substr(0, 16)}
          </AddressRow>
        </Fragment>
      }
    />
  )
}

export default AddressCard;
