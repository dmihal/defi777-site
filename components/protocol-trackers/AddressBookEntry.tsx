import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Wrapped777ABI from '../../constants/abis/Wrapped777.json';

interface AddressBookEntryProps {
  web3: Web3;
  token: string;
  wrapper: string;
}

interface Metadata {
  tokenName: string;
  wrapperName: string;
}

const AddressBookEntry: React.FC<AddressBookEntryProps> = ({ web3, token, wrapper }) => {
  const [metadata, setMetadata] = useState<null | Metadata>(null);

  useEffect(() => {
    const tokenContract = new web3.eth.Contract(Wrapped777ABI as any, token);
    const wrapperContract = new web3.eth.Contract(Wrapped777ABI as any, wrapper);
    Promise.all([
      tokenContract.methods.name().call(),
      wrapperContract.methods.name().call(),
    ]).then(([tokenName, wrapperName]: string[]) => setMetadata({ tokenName, wrapperName }));
  }, [token, wrapper]);

  if (!metadata) {
    return (
      <div>{token} -> {wrapper}</div>
    );
  }

  return (
    <div>
      {metadata.tokenName} ({token}) -> {metadata.wrapperName} ({wrapper})
    </div>
  );
}

export default AddressBookEntry;
