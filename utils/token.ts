import Web3 from 'web3';
import IERC20 from '../constants/abis/IERC20.json';

export const getName = async (web3: Web3, address: string) => {
  const contract = new web3.eth.Contract(IERC20 as any, address);
  const name = await contract.methods.name().call();
  return name;
};
