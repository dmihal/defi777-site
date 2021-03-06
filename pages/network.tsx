import React, { useState, useEffect, useRef } from 'react';
import Web3 from 'web3';
import AddressBook from '../components/protocol-trackers/AddressBook';
import WrapperFactory from '../components/protocol-trackers/WrapperFactory';
import FarmerTokenFactory from '../components/protocol-trackers/FarmerTokenFactory';
import Uniswap from '../components/protocol-trackers/Uniswap';

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
      <AddressBook web3={web3.current!} network={network} />
      <FarmerTokenFactory web3={web3.current!} network={network} />
      <Uniswap web3={web3.current!} network={network} />
    </div>
  );
};

export default NetworkPage;
