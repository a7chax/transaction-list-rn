import { ITransaction } from '../entity/ITransaction';

export interface ITransactionRepository {
    getListTransactions(): Promise<ITransaction[]>;
}
