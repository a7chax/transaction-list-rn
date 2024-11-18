import { BaseResponse } from '@core/BaseResponse';
import { IFilterTransaction, ITransaction } from '@ModuleTransaction/domain/entity/ITransaction';
import { TransactionUseCase } from '@ModuleTransaction/domain/useCase/transactionUseCase';
import { useQuery, UseQueryResult } from '@tanstack/react-query';


export function useQueryGetListTransaction(filter : IFilterTransaction) : UseQueryResult<BaseResponse<ITransaction[]>> {
  const useCase = new TransactionUseCase();
  return useQuery({
    queryKey: ['getListTransaction', filter.keyword, filter.sortBy.value],
    queryFn: () => useCase.getTransactionList(filter),
  });
}
