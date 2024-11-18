import {  RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ITransaction } from '../domain/entity/ITransaction';
import { ListTransactionsScreen } from '../presentation/ListTransactions';
import { StackNavigationProp } from '@react-navigation/stack';
import { DetailTransactionScreen } from '../presentation/DetailTransaction';
import { RouteModule } from '../../../core/router';

export type TransactionModuleStackParamList = {
  ListTransaction: {},
  DetailTransaction: {
    transaction: ITransaction;
  }
};

export const useTransactionNavigation = () : StackNavigationProp<TransactionModuleStackParamList> => {
  return useNavigation<StackNavigationProp<TransactionModuleStackParamList>>();
};

export const useRouteTransaction = <T extends keyof TransactionModuleStackParamList>(): RouteProp<TransactionModuleStackParamList, T> => {
  return useRoute<RouteProp<TransactionModuleStackParamList, T>>();
};

export const TransactionModuleRouter: RouteModule<
  keyof TransactionModuleStackParamList
>[] = [
    {
      screenName: 'ListTransaction',
      screen: ListTransactionsScreen,
      screenTitle: 'Transactions',
    },
    {
      screenName: 'DetailTransaction',
      screen: DetailTransactionScreen,
      screenTitle: 'Detail Transaction',
    },
];
