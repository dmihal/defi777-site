import React, { useState, useEffect, useRef } from 'react';
import Web3 from 'web3';
import contracts from '../../constants/contracts';
import WrapperFactoryABI from '../../constants/abis/WrapperFactory.json';
import Wrapper from './Wrapper';

const SCAN_BLOCKS = 5000;

const scanForWrappers = async (web3: Web3, network: number, cb: (wrapper: string) => void) => {
  const { address, created } = contracts[network].WrapperFactory;
  const contract = new web3.eth.Contract(WrapperFactoryABI as any, address);

  const currentBlock = await web3.eth.getBlockNumber();
  for (let fromBlock = created; fromBlock < currentBlock; fromBlock += SCAN_BLOCKS) {
    const events = await contract.getPastEvents('WrapperCreated', {
      fromBlock,
      toBlock: fromBlock + SCAN_BLOCKS,
    });

    for (const event of events) {
      cb(event.returnValues.token);
    }
  }
};

const createWrapper = async (web3: Web3, network: number, token: string) => {
  const { address, created } = contracts[network].WrapperFactory;
  const contract = new web3.eth.Contract(WrapperFactoryABI as any, address);

  // @ts-ignore
  await web3.currentProvider.enable();
  const [from] = await web3.eth.getAccounts();
  await contract.methods.createWrapper(token).send({ from });
};

interface WrapperFactoryProps {
  web3: Web3;
  network: number;
}

const WrapperFactory: React.FC<WrapperFactoryProps> = ({ web3, network }) => {
  const [wrappers, setWrappers] = useState<string[]>([]);
  const [newWrapper, setNewWrapper] = useState('');
  const [loading, setLoading] = useState(false);

  if (!contracts[network]) {
    return (
      <div>Invalid network, switch to mainnet or Kovan</div>
    );
  }

  useEffect(() => {
    scanForWrappers(web3, network, (wrapper: string) =>
      setWrappers((_wrappers: string[]) => [..._wrappers, wrapper]));
  }, [network]);

  const create = async () => {
    setLoading(true);
    try {
      await createWrapper(web3, network, newWrapper);
      setWrappers([...wrappers, newWrapper]);
      setNewWrapper('');
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>Wrapper Factory</div>

      <div>
        {wrappers.map((wrapper: string) => <Wrapper address={wrapper} web3={web3} key={wrapper} />)}
      </div>
      
      <div>
        Create new wrapper
        <input
          placeholder="token address"
          value={newWrapper}
          onChange={(e: any) => setNewWrapper(e.target.value)}
          disabled={loading}
        />
        <button onClick={create} disabled={newWrapper.length !== 42 || loading}>Create</button>
      </div>
    </div>
  )
}

export default WrapperFactory;
