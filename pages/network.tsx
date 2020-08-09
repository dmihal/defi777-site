import React, { useState, useEffect, useRef } from 'react';
import Web3 from 'web3';
import WrapperFactory from '../components/protocol-trackers/WrapperFactory';

const NetworkPage = () => {
  const [network, setNetwork] = useState<number>(0);
  const web3 = useRef<null | Web3>(null);

  useEffect(() => {
    // @ts-ignore
    if (!window.ethereum) {
      setNetwork(-1);
      return;
    }

    // @ts-ignore
    web3.current = new Web3(window.ethereum);
    web3.current.eth.net.getId().then((id: number) => setNetwork(id));
  }, []);

  if (network === 0) {
    return (
      <div>Loading...</div>
    );
  }
  if (network === -1) {
    return (
      <div>Web3 provider not found...</div>
    );
  }

  return (
    <div>
      <WrapperFactory web3={web3.current!} network={network} />
    </div>
  );
};

export default NetworkPage;
