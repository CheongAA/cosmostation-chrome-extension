import type { UnserializedSignableTransaction } from '@mysten/sui.js';

import { isPaySui } from '~/Popup/utils/sui';

import PaySui from './messages/PaySui';
import Transaction from './messages/Transaction';

type TxMessageProps = {
  transaction: UnserializedSignableTransaction | string;
};

export default function TxMessage({ transaction }: TxMessageProps) {
  if (typeof transaction === 'string') {
    return <Transaction transaction={transaction} />;
  }

  if (isPaySui(transaction)) {
    return <PaySui transaction={transaction.data} />;
  }

  return <Transaction transaction={transaction} />;
}
