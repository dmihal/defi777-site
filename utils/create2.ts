import { hexToNumberString, soliditySha3 } from 'web3-utils';

export function create2PreHashed(address: string, salt: string, initCodeHash: string): string {
  const _salt = hexToNumberString(salt);
  return '0x' + soliditySha3('0xff', address, _salt, initCodeHash)!.slice(-40);
}
