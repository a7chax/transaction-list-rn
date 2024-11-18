import { UseQueryResult } from '@tanstack/react-query';
import { useQueryGetListTransaction } from './Query';
import {  IFilterTransaction, ITransaction } from '@ModuleTransaction/domain/entity/ITransaction';

import { TransactionModuleStackParamList, useTransactionNavigation } from '@ModuleTransaction/router';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCallback, useState } from 'react';
import { BaseResponse } from '@core/BaseResponse';
import { IRadioOption } from '@component/RadioButton/Group';
import { useDebounce } from '@core/utility';

interface IUseListTransaction {
    queryListTransaction: UseQueryResult<BaseResponse<ITransaction[]>>;
    goToDetail: (transaction: ITransaction) => void;
    onChangeKeyword: (text: string) => void;
    filter: IFilterTransaction;
    onPressFilter: (visble : boolean) => void;
    showModalFilter: boolean;
    showingModalFilter: () => void;
    onSelectFilter: (filter : IRadioOption) => void;
    keyword: string;
}

export const useListTransaction = () : IUseListTransaction => {
    const [keyword, setKeyword] = useState<string>('');
    const [filter, setFilter] = useState<IFilterTransaction>({
        sortBy:  {
            label: 'Urutkan',
            value: 'urutkan',
        },
        keyword: '',
    });
    const [showModalFilter, setShowModalFilter] = useState<boolean>(false);
    const debouncedSearchTerm = useDebounce(keyword, 500);

    const queryListTransaction = useQueryGetListTransaction({
        ...filter,
        keyword: debouncedSearchTerm,
    });
    const navigation : StackNavigationProp<TransactionModuleStackParamList> = useTransactionNavigation();
    console.log('queryListTransaction', queryListTransaction);
    const goToDetail = (transaction: ITransaction) => {
        navigation.navigate('DetailTransaction', { transaction });
    };

    const onChangeKeyword = useCallback((text: string) => {
        setKeyword(text);
    }, [setKeyword]);

    const onSelectFilter = useCallback((_filter: IRadioOption) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            sortBy: {
                label: _filter.label,
                value: _filter.value,
            },
        }));
        setShowModalFilter(false);
    }, [setShowModalFilter, setFilter]);

    const onPressFilter = (visble : boolean) => {
        setShowModalFilter(visble);
    };

    const showingModalFilter = () => {
        setShowModalFilter(true);
    };

    return {
        queryListTransaction,
        goToDetail,
        onChangeKeyword,
        filter,
        onPressFilter,
        showModalFilter,
        showingModalFilter,
        onSelectFilter,
        keyword,
    };
};

