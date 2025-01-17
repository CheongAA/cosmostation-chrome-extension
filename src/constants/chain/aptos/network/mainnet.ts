import aptosImg from '~/images/symbols/aptos.png';
import type { AptosNetwork } from '~/types/chain';

export const MAINNET: AptosNetwork = {
  id: 'c163975b-c251-48f1-a257-a639cdac61f4',
  chainId: 1,
  networkName: 'Mainnet',
  restURL: 'https://rest-aptos.mainnet.cosmostation.io',
  imageURL: aptosImg,
  explorerURL: 'https://aptoscan.com',
  coinGeckoId: 'aptos',
};
