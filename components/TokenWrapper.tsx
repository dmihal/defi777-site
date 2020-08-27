import React, { useState, useEffect } from 'react';
import getWeb3 from './web3';
import IERC20ABI from '../constants/abis/IERC20.json';
import IWrapped777ABI from './abis/IWrapped777.json';

interface TokenWrapperProps {
  token: string;
  wrapper: string;
  name: string;
  unit?: string;
}

const TokenWrapper: React.FC<TokenWrapperProps> = ({ token, wrapper, name, unit='ether' }) => {
  const [web3, setWeb3] = useState<any>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState('0');
  const [wrapperBalance, setWrapperBalance] = useState('0');
  const [wrapAmount, setWrapAmount] = useState('0');
  const [wrapping, setWrapping] = useState(false);

  const refreshAccounts = async () => {
    const [account] = await web3.eth.getAccounts();
    setAddress(account);

    if (account) {
      const tokenContract = new web3.eth.Contract(IERC20ABI as any, token);
      const wrapperContract = new web3.eth.Contract(IERC20ABI as any, wrapper);

      const [_balance, _wrapperBalance] = await Promise.all([
        tokenContract.methods.balanceOf(account).call(),
        wrapperContract.methods.balanceOf(account).call(),
      ]);

      setBalance(web3.utils.fromWei(_balance, unit));
      setWrapperBalance(web3.utils.fromWei(_wrapperBalance, 'ether'));
    }
  }

  useEffect(() => {
    if (web3) {
      refreshAccounts();
    } else {
      getWeb3().then((_web3: any) => setWeb3(_web3));
    }
  }, [web3]);

  const enable = async () => {
    await web3.currentProvider.enable();
    await refreshAccounts();
  };

  const wrap = async () => {
    setWrapping(true);

    const tokenContract = new web3.eth.Contract(IERC20ABI as any, token);
    const wrapperContract = new web3.eth.Contract(IWrapped777ABI as any, wrapper);

    const amountWad = web3.utils.toWei(wrapAmount, unit);
    const allowance = await tokenContract.methods.allowance(address, wrapper).call();

    if (parseFloat(allowance) < parseFloat(amountWad)) {
      await tokenContract.methods.approve(wrapper, amountWad).send({ from: address });
    }
    await wrapperContract.methods.wrap(amountWad).send({ from: address });

    await refreshAccounts();
    setWrapping(false);
  };

  if (!web3) {
    return (
      <div>
        <div>Use a Web3 browser to wrap your tokens</div>
      </div>
    );
  }

  if (!address) {
    return (
      <div>
        <button onClick={enable}>Connect to web3 to wrap your existing tokens</button>
      </div>
    );
  }

  return (
    <div>
      <div>{address.substring(0, 8)}</div>
      <div>Balance: {balance} {name}</div>
      <div>Balance: {wrapperBalance} {name}-777</div>
      <div>
        <input
          value={wrapAmount}
          onChange={(e: any) => setWrapAmount(e.target.value)}
          min="0"
          max={balance}
          type="number"
        />
      </div>
      <div>
        <button onClick={wrap} disabled={wrapAmount === '0' || wrapping}>Wrap</button>
      </div>
    </div>
  );
}

export default TokenWrapper;
