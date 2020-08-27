import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import FarmerTokenABI from '../../constants/abis/FarmerToken.json';
import { getName } from '../../utils/token';

interface FarmerTokenProps {
  web3: Web3;
  address: string;
}

interface Reward {
  address: string;
  name: string;
}

interface Metadata {
  name: string | null;
  rewards: Reward[];
}

const FarmerToken: React.FC<FarmerTokenProps> = ({ web3, address }) => {
  const [metadata, setMetadata] = useState<Metadata>({ name: null, rewards: [] });
  const [newToken, setNewToken] = useState('');
  const [sending, setSending] = useState(false);

  const refreshRewards = async () => {
    const contract = new web3.eth.Contract(FarmerTokenABI as any, address);
    const tokens = await contract.methods.rewardTokens().call();
    const names = await Promise.all(tokens.map((token: string) => getName(web3, token)));
    const rewards: Reward[] = tokens.map((address: string, i: number) => ({ address, name: names[i] }));
    setMetadata((meta: Metadata) => ({ ...meta, rewards }));
  };

  useEffect(() => {
    getName(web3, address).then((name: string) => setMetadata((meta: Metadata) => ({ ...meta, name })));
    refreshRewards();
  }, [address]);

  const add = async () => {
    setSending(true);
    try {
      const contract = new web3.eth.Contract(FarmerTokenABI as any, address);
      const [from] = await web3.eth.getAccounts();
      await contract.methods.addRewardToken(newToken).send({ from });

      await refreshRewards();
      setNewToken('');
    } catch (e) {
      console.warn(e);
    }
    setSending(false);
  };

  if (!metadata.name) {
    return (
      <div>{address}</div>
    );
  }

  return (
    <div>
      <div>{metadata.name} ({address})</div>
      <ul>
        {metadata.rewards.map((reward: Reward) => (
          <li key={reward.address}>
            {reward.name} ({reward.address})
          </li>
        ))}

        <li>
          <input
            value={newToken}
            placeholder="reward token address"
            disabled={sending}
            onChange={(e: any) => setNewToken(e.target.value)}
          />
          <button onClick={add} disabled={newToken.length !== 42 || sending}>Add Reward token</button>
        </li>
      </ul>
    </div>
  );
}

export default FarmerToken;
