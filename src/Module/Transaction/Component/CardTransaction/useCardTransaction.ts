import { StatusTransaction } from '@ModuleTransaction/domain/entity/ITransaction';

interface IUseCardTransaction {
    isPending : (status : StatusTransaction) => boolean;
    mappingStatus : (status : StatusTransaction) => string;
}

export const useCardTransaction = () : IUseCardTransaction => {
    const isPending = (status : StatusTransaction) : boolean => {
        return status === 'PENDING';
    };

    const mappingStatus = (status : StatusTransaction) : string => {
        if(status === 'PENDING'){
            return 'Pengecekan';
        }

        if(status === 'SUCCESS'){
            return 'Berhasil';
        }

        return status;
    };

    return {
        isPending,
        mappingStatus,
    };
};
