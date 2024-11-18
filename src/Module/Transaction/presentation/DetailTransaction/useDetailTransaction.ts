import { ITransaction } from '@ModuleTransaction/domain/entity/ITransaction';
import { useRouteTransaction, useTransactionNavigation } from '@ModuleTransaction/router';
import Clipboard from '@react-native-clipboard/clipboard';
import { ToastAndroid } from 'react-native';

interface IUserDetailTransaction {
    dataTransaction: ITransaction;
    goBack: () => void;
    dateConfig: Intl.DateTimeFormatOptions;
    copyTransactionId: (transactionId : string) => void;
}

export const useDetailTransaction  = () : IUserDetailTransaction => {
    const router = useRouteTransaction<'DetailTransaction'>();
    const dataTransaction = router.params.transaction;
    const navigation = useTransactionNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const copyTransactionId = (transactionId : string) => {
        Clipboard.setString(transactionId);
        ToastAndroid.show('ID Transaksi berhasil disalin', ToastAndroid.SHORT);
    };
    const dateConfig : Intl.DateTimeFormatOptions  = {  day: 'numeric', month: 'long', year: 'numeric' };

    return { dataTransaction : dataTransaction, goBack, dateConfig, copyTransactionId };
};
