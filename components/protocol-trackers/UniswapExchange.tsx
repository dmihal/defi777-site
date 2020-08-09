import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import UniswapWrapperABI from '../../constants/abis/UniswapWrapper.json';
import Wrapped777ABI from '../../constants/abis/Wrapped777.json';

interface WrapperProps {
  web3: Web3;
  address: string;
}

interface Metadata {
  name: string;
}

const UniswapExchange: React.FC<WrapperProps> = ({ web3, address }) => {
  const [metadata, setMetadata] = useState<null | Metadata>(null);

  useEffect(() => {
    const contract = new web3.eth.Contract(UniswapWrapperABI as any, address);
    contract.methods.wrapper().call().then(async (wrapper: string) => {
      const wrapperContract = new web3.eth.Contract(Wrapped777ABI as any, wrapper);
      const name = await wrapperContract.methods.name().call();
      setMetadata({ name });
    });
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

export default UniswapExchange;
