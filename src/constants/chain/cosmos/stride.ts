import { MINTSCAN_URL } from '~/constants/common';
import strideImg from '~/images/symbols/stride.png';
import type { CosmosChain } from '~/types/chain';

export const STRIDE: CosmosChain = {
  id: '6fc2729b-2261-4306-9d64-bc8f463b229f',
  line: 'COSMOS',
  type: '',
  chainId: 'stride-1',
  chainName: 'Stride',
  restURL: 'https://lcd-stride.cosmostation.io',
  imageURL: strideImg,
  baseDenom: 'ustrd',
  displayDenom: 'STRD',
  decimals: 6,
  bip44: {
    purpose: "44'",
    coinType: "118'",
    account: "0'",
    change: '0',
  },
  bech32Prefix: { address: 'stride' },
  coinGeckoId: 'stride',
  explorerURL: `${MINTSCAN_URL}/stride`,
  gasRate: {
    tiny: '0',
    low: '0.00025',
    average: '0.0025',
  },
  gas: {},
};
