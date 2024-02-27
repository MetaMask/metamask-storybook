/* eslint-disable jest/no-conditional-expect */
import { TransactionStatus } from '@metamask/transaction-controller';
import data from '../first-time-state';
import migration25 from './025';

const firstTimeState = {
  meta: {},
  data,
};

const storage = {
  meta: {},
  data: {
    TransactionController: {
      transactions: [],
    },
  },
};

const transactions = [];

while (transactions.length <= 10) {
  transactions.push({
    txParams: {
      from: '0x8aCce2391c0d510a6c5E5d8f819a678f79b7e675',
      random: 'stuff',
      chainId: 2,
    },
    status: TransactionStatus.unapproved,
  });
  transactions.push({
    txParams: { from: '0x8aCce2391c0d510a6c5E5d8f819a678f79b7e675' },
    status: TransactionStatus.confirmed,
  });
}

storage.data.TransactionController.transactions = transactions;

describe('storage is migrated successfully and the txParams.from are lowercase', () => {
  it('should lowercase the from for unapproved txs', async () => {
    const migratedData = await migration25.migrate(storage);

    const migratedTransactions =
      migratedData.data.TransactionController.transactions;
    migratedTransactions.forEach((tx) => {
      if (tx.status === TransactionStatus.unapproved) {
        expect(!tx.txParams.random).toStrictEqual(true);
      }
      if (tx.status === TransactionStatus.unapproved) {
        expect(!tx.txParams.chainId).toStrictEqual(true);
      }
    });
  });

  it('should migrate first time state', async () => {
    const migratedData = await migration25.migrate(firstTimeState);

    expect(migratedData.meta.version).toStrictEqual(25);
  });
});
