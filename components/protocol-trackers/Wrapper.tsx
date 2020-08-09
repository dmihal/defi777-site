import React from 'react';
import Web3 from 'web3';

interface WrapperProps {
  web3: Web3;
  address: string;
}

const Wrapper: React.FC<WrapperProps> = ({ web3, address }) => {
  return (
    <div>{address}</div>
  )
}

export default Wrapper;
