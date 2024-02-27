import {
  cloneDeep,
  concat,
  groupBy,
  keyBy,
  pickBy,
  isPlainObject,
} from 'lodash';
import { TransactionType } from '@metamask/transaction-controller';

const version = 59;

/**
 * Removes orphaned cancel and retry transactions that no longer have the
 * original transaction in state, which results in bugs.
 */
export default {
  version,
  async migrate(originalVersionedData) {
    const versionedData = cloneDeep(originalVersionedData);
    versionedData.meta.version = version;
    const state = versionedData.data;
    versionedData.data = transformState(state);
    return versionedData;
  },
};

function transformState(state) {
  const transactions = state?.TransactionController?.transactions;
  if (isPlainObject(transactions)) {
    const nonceNetworkGroupedObject = groupBy(
      Object.values(transactions),
      (tx) => {
        return `${tx.txParams?.nonce}-${tx.chainId ?? tx.metamaskNetworkId}`;
      },
    );

    const withoutOrphans = pickBy(nonceNetworkGroupedObject, (group) => {
      return group.some(
        (tx) =>
          tx.type !== TransactionType.cancel &&
          tx.type !== TransactionType.retry,
      );
    });
    state.TransactionController.transactions = keyBy(
      concat(...Object.values(withoutOrphans)),
      (tx) => tx.id,
    );
  }

  return state;
}
