export type StatusTransaction = 'PENDING' | 'SUCCESS' | '-';

export interface ITransaction {
    id: string;
    amount: number;
    uniqueCode: number;
    status: StatusTransaction
    senderBank: string;
    accountNumber: string;
    beneficaryName: string;
    beneficaryBank: string;
    remark: string;
    createdAt: string;
    completedAt: string;
    fee: number;
}

export type FilterSortTransactions = 'urutkan' | 'atoz' | 'ztoa' | 'tanggal_terbaru' | 'tanggal_terlama';

export interface IFilterTransaction {
    keyword: string;
    sortBy : {
        label: string;
        value: string
    }
}
