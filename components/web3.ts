let Web3: any = null;
let web3: any = null;

const getWeb3 = async () => {
  // @ts-ignore
  if (!web3 && window.ethereum) {
    if (!Web3) {
      ({ default: Web3 } = await import('web3'));
    }

    // @ts-ignore
    web3 = new Web3(window.ethereum);
  }
  return web3;
};

export default getWeb3;
