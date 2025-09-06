// next version number
/*

normalizes txParams on unconfirmed txs

*/
import { cloneDeep } from 'lodash';
import { TransactionStatus } from '@metamask/transaction-controller';

const version = 27;

export default {
  version,

  async migrate(originalVersionedData) {
    const versionedData = cloneDeep(originalVersionedData);
    versionedData.meta.version = version;
    const state = versionedData.data;
    const newState = transformState(state);
    versionedData.data = newState;
    return versionedData;
  },
};

function transformState(state) {
  const newState = state;

  if (newState.TransactionController) {
    if (newState.TransactionController.transactions) {
      const { transactions } = newState.TransactionController;
      newState.TransactionController.transactions = transactions.filter(
        (txMeta) => txMeta.status !== TransactionStatus.rejected,
      );
    }
  }

  return newState;
}
