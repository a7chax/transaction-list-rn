import { BaseResponse } from '@core/BaseResponse';
import { IFilterTransaction, ITransaction } from '../entity/ITransaction';
import { TransactionRepositoryImpl } from '@ModuleTransaction/data/repository/TransactionRepositoryImpl';
import { getLocalStorage, setLocalStorage } from '@core/stroage';
import { LOCAL_STORAGE } from '@core/constant/localStorage';



interface ITransactionUseCase {
    getTransactionList(filter : IFilterTransaction) : Promise<BaseResponse<ITransaction[]> | undefined>
}


export class TransactionUseCase implements ITransactionUseCase {

    async getTransactionList(filter : IFilterTransaction): Promise<BaseResponse<ITransaction[]> | undefined> {
        const repository = new TransactionRepositoryImpl();
        try{
            let data : ITransaction[] = [];
            const getLocalData = getLocalStorage(LOCAL_STORAGE.DATA_TRANSACTION);

            if (getLocalData !== undefined) {
                data = JSON.parse(getLocalData);
            }
            if (getLocalData === undefined) {
                const dataApi : ITransaction[] = await repository.getListTransactions();
                setLocalStorage(LOCAL_STORAGE.DATA_TRANSACTION, JSON.stringify(dataApi));
                data = dataApi;
            }

            if (filter.sortBy.value === 'atoz') {
                data.sort((a, b) => a.beneficaryName.localeCompare(b.beneficaryName));
            } else if (filter.sortBy.value === 'ztoa') {
                    data.sort((a, b) => b.beneficaryName.localeCompare(a.beneficaryName));
            } else if (filter.sortBy.value === 'tanggal_terbaru') {
                    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            } else if (filter.sortBy.value === 'tanggal_terlama') {
                    data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
            }

            if (filter.keyword !== ''){
                data = data.filter((item) =>
                    item.beneficaryName.toLowerCase().includes(filter.keyword.toLowerCase()) ||
                    item.senderBank.toLowerCase().includes(filter.keyword.toLowerCase()) ||
                    item.amount.toString().includes(filter.keyword) ||
                    item.beneficaryBank.toLowerCase().includes(filter.keyword.toLowerCase())
                );

                if(data.length === 0){
                    throw new Error('Data tidak ditemukan coba kata kunci lain');
                }
            }

            return {
                success: true,
                message: 'Berhasil mendapatkan data',
                data: data,
            };
        }catch(e){
            if(e instanceof Error){
                return {
                    success: false,
                    message: e.message,
                };
            }
        }
    }
}
