import { mapAxiosError } from '../../../../core/exceptions/AxiosError';
import { axiosInstance } from '../../../../core/networking';
import { ITransactionResponse } from '../Model/Response/ITransactionReponse';

export async function GetListTransactions() : Promise<ITransactionResponse | Error> {
    try{
        const response = await axiosInstance.get('/frontend-test');
        return response.data;
    }catch(e){
        if(e instanceof Error){
             throw new Error(mapAxiosError(e));
        }
        return new Error('An unknown error occurred');
    }
}
