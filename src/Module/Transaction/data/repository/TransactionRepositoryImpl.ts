import { mapAxiosError } from '../../../../core/exceptions/AxiosError';
import { isEmptyObject, mapBankName } from '../../../../core/utility';
import { ITransaction } from '../../domain/entity/ITransaction';
import { ITransactionRepository } from '../../domain/repository/ITransactionRepository';
import { GetListTransactions } from '../api/GetListTransactions';

export class TransactionRepositoryImpl implements ITransactionRepository {
   async getListTransactions(): Promise<ITransaction[]> {
      const response = await GetListTransactions().then((responseApi) => {
         if(isEmptyObject(responseApi) ){
            return [];
        }

        if(responseApi instanceof Error){
            throw new Error(mapAxiosError(responseApi));
        }

        const getValueByKey : ITransaction[] = Object.keys(responseApi).map((key) => {
         return {
            accountNumber: responseApi[key].account_number || '-',
            amount: responseApi[key].amount || 0,
            beneficaryBank: mapBankName(responseApi[key].beneficiary_bank || '-'),
            beneficaryName: (responseApi[key].beneficiary_name || '-').toUpperCase(),
            completedAt: responseApi[key].completed_at || '-',
            createdAt: responseApi[key].created_at || '-',
            fee: responseApi[key].fee || 0,
            id: responseApi[key].id || '-',
            remark: responseApi[key].remark || '-',
            status: responseApi[key].status || '-',
            senderBank: mapBankName(responseApi[key].sender_bank || '-'),
            uniqueCode: responseApi[key].unique_code || 0,
         };
        });
        return getValueByKey;
      });
      return response;
   }
}
