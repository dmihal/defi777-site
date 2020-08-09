import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Wrapped777ABI from '../../constants/abis/Wrapped777.json';

interface WrapperProps {
  web3: Web3;
  address: string;
}

interface Metadata {
  name: string;
}

const Wrapper: React.FC<WrapperProps> = ({ web3, address }) => {
  const [metadata, setMetadata] = useState<null | Metadata>(null);

  useEffect(() => {
    const contract = new web3.eth.Contract(Wrapped777ABI as any, address);
    contract.methods.name().call().then((name: string) => setMetadata({ name }));
  }, [address]);

  if (!metadata) {
    return (
      <div>{address}</div>
    );
  }

  return (
    <div>
      {metadata.name} ({address})
    </div>
  );
}

export default Wrapper;
