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
  },
};

export default contracts;