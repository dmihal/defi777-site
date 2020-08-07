import React, { Fragment } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import BaseCard from './BaseCard';
import CardFace from './CardFace';

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
