import React, { useState, useEffect, useRef } from 'react';
import Web3 from 'web3';
import contracts from '../../constants/contracts';
import UniswapWrapperFactoryABI from '../../constants/abis/UniswapWrapperFactory.json';
import UniswapExchange from './UniswapExchange';
import { create2PreHashed } from '../../utils/create2';

const SCAN_BLOCKS = 5000;

const scanForWrappers = async (web3: Web3, network: number, cb: (wrapper: string) => void) => {
  const { address, created } = contracts[network].UniswapWrapperFactory;
  const contract = new web3.eth.Contract(UniswapWrapperFactoryABI as any, address);

  const codeHash = await contract.methods.WRAPPER_BYTECODE_HASH().call();

  const currentBlock = await web3.eth.getBlockNumber();
  for (let fromBlock = created; fromBlock < currentBlock; fromBlock += SCAN_BLOCKS) {
    const events = await contract.getPastEvents('ExchangeCreated', {
      fromBlock,
      toBlock: fromBlock + SCAN_BLOCKS,
    });

    for (const event of events) {
      const wrapper = create2PreHashed(address, event.returnValues.token, codeHash);
      cb(wrapper);
    }
  }
};

const createExchange = async (web3: Web3, network: number, token: string) => {
  const { address, created } = contracts[network].UniswapWrapperFactory;
  const contract = new web3.eth.Contract(UniswapWrapperFactoryABI as any, address);

  // @ts-ignore
  await web3.currentProvider.enable();
  const [from] = await web3.eth.getAccounts();
  await contract.methods.createExchange(token).send({ from });

  const codeHash = await contract.methods.WRAPPER_BYTECODE_HASH().call();
  const exchange = create2PreHashed(address, token, codeHash);
  return exchange;
};

interface UniswapProps {
  web3: Web3;
  network: number;
}

const Uniswap: React.FC<UniswapProps> = ({ web3, network }) => {
  const [exchanges, setExchanges] = useState<string[]>([]);
  const [newToken, setNewToken] = useState('');
  const [loading, setLoading] = useState(false);

  if (!contracts[network]) {
    return (
      <div>Invalid network, switch to mainnet or Kovan</div>
    );
  }

  useEffect(() => {
    scanForWrappers(web3, network, (wrapper: string) =>
      setExchanges((_wrappers: string[]) => [..._wrappers, wrapper]));
  }, [network]);

  const create = async () => {
    setLoading(true);
    try {
      const newExchange = await createExchange(web3, network, newToken);
      setExchanges([...exchanges, newExchange]);
      setNewToken('');
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>Uniswap</div>

      <div>
        {exchanges.map((exchange: string) => <UniswapExchange address={exchange} web3={web3} key={exchange} />)}
      </div>
      
      <div>
        Create new Uniswap777 exchange
        <input
          placeholder="token wrapper address"
          value={newToken}
          onChange={(e: any) => setNewToken(e.target.value)}
          disabled={loading}
        />
        <button onClick={create} disabled={newToken.length !== 42 || loading}>Create</button>
      </div>
    </div>
  )
}

export default Uniswap;
