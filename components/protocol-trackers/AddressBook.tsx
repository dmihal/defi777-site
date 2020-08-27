import React, { useState, useEffect, useRef } from 'react';
import Web3 from 'web3';
import contracts from '../../constants/contracts';
import AddressBookABI from '../../constants/abis/AddressBook.json';
import AddressBookEntry from './AddressBookEntry';

const SCAN_BLOCKS = 5000;

interface Entry {
  token: string;
  wrapper: string;
}

const scanForEntries = async (web3: Web3, network: number, cb: (entry: Entry) => void) => {
  const { address, created } = contracts[network].AddressBook;
  const contract = new web3.eth.Contract(AddressBookABI as any, address);

  const currentBlock = await web3.eth.getBlockNumber();
  for (let fromBlock = created; fromBlock < currentBlock; fromBlock += SCAN_BLOCKS) {
    const events = await contract.getPastEvents('EntrySet', {
      fromBlock,
      toBlock: fromBlock + SCAN_BLOCKS,
    });

    for (const event of events) {
      const wrapper = { token: event.returnValues.token, wrapper: event.returnValues.wrapper };
      cb(wrapper);
    }
  }
};

const getOwner = async (web3: Web3, network: number) => {
  const { address, created } = contracts[network].AddressBook;
  const contract = new web3.eth.Contract(AddressBookABI as any, address);

  const owner = await contract.methods.owner().call();
  return owner;
}

const setEntry = async (web3: Web3, network: number, token: string, wrapper: string) => {
  const { address, created } = contracts[network].AddressBook;
  const contract = new web3.eth.Contract(AddressBookABI as any, address);

  // @ts-ignore
  await web3.currentProvider.enable();
  const [from] = await web3.eth.getAccounts();
  await contract.methods.setEntry(token, wrapper).send({ from });
};

interface WrapperFactoryProps {
  web3: Web3;
  network: number;
}

const AddressBook: React.FC<WrapperFactoryProps> = ({ web3, network }) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [owner, setOwner] = useState('');
  const [newToken, setNewToken] = useState('');
  const [newWrapper, setNewWrapper] = useState('');
  const [loading, setLoading] = useState(false);

  if (!contracts[network]) {
    return (
      <div>Invalid network, switch to mainnet or Kovan</div>
    );
  }

  useEffect(() => {
    scanForEntries(web3, network, (entry: Entry) =>
      setEntries((_entries: Entry[]) => [..._entries, entry]));

    getOwner(web3, network).then((owner: string) => setOwner(owner));
  }, [network]);

  const create = async () => {
    setLoading(true);
    try {
      await setEntry(web3, network, newToken, newWrapper);
      setEntries([...entries, { token: newToken, wrapper: newWrapper }]);
      setNewToken('');
      setNewWrapper('');
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Address Book</h2>
      <div>Owner: {owner}</div>

      <div>
        {entries.map((entry: Entry) => (
          <AddressBookEntry token={entry.token} wrapper={entry.wrapper} web3={web3} key={entry.wrapper} />
        ))}
      </div>
      
      <div>
        Create new entry
        <input
          placeholder="token address"
          value={newToken}
          onChange={(e: any) => setNewToken(e.target.value)}
          disabled={loading}
        />
        <input
          placeholder="wrapper address"
          value={newWrapper}
          onChange={(e: any) => setNewWrapper(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={create}
          disabled={newToken.length !== 42 || newWrapper.length !== 42 || loading}
        >
          Create
        </button>
      </div>
    </div>
  )
}

export default AddressBook;
