interface Contract {
  address: string;
  created: number;
}

interface Contracts {
  WrapperFactory: Contract;
}

const contracts: { [network: string]: Contracts } = {
  42: {
    WrapperFactory: { address: '0xf8956Ce90B3f4C82127D34730a0d0d208bDCE1a2', created: 20090501 },
    UniswapWrapperFactory: { address: '0x9B53e2d211193048F210a2c278b897D0Df9Ba900', created: 20144848 },
  },
};

export default contracts;
