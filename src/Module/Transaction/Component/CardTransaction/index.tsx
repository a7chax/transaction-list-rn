import React from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ITransaction } from '@ModuleTransaction/domain/entity/ITransaction';
import { useCardTransaction } from './useCardTransaction';
import { formatCurrency, formatDateByLocale } from '@core/utility';
import { Label } from '@component/Label';
import { COLOR } from '@core/constant/color';


interface CardTransactionProps extends ITransaction {
    onPress? : () => void;
}

 const CardTransaction : React.FC<CardTransactionProps> = ({
    onPress,
    senderBank,
    beneficaryBank,
    beneficaryName,
    createdAt,
    amount,
    status,
}) => {
    const {
        isPending,
        mappingStatus,
    } = useCardTransaction();

    const statusIndicatorStyle = isPending(status) ? styles.statusPendingIndicator : styles.statusSuccessIndicator;
    const lableStyle = isPending(status)  ? styles.labelPending : styles.labelSuccess;
    const textLabelStyle = isPending(status)  ? styles.textLabelPending : styles.textLabelSuccess;
    const dateConfig : Intl.DateTimeFormatOptions  = {  day: 'numeric', month: 'long', year: 'numeric' };

    return (
        <TouchableOpacity onPress={onPress} style={styles.containerCard}>
            <View style={styles.wrapperTransactionData}>
                <View style= {statusIndicatorStyle}/>
                <View style={styles.containerTransactionData}>
                    <View style={styles.wrapperSenderBankAndReceiver}>
                        <Text style={styles.textBank}>{senderBank}</Text>
                        <Text style={styles.textArrow}> ➔ </Text>
                        <Text style={styles.textBank}>{beneficaryBank}</Text>
                    </View>
                        <Text style={styles.textName}>{beneficaryName}</Text>
                    <View style={styles.wrapperTransactionDateAndAmount}>
                        <Text style={styles.textAmout}>{formatCurrency(amount, 'IDR')}</Text>
                        <View style={styles.dot}/>
                        <Text style={styles.textDateTransaction}>{formatDateByLocale(createdAt, 'id-ID', dateConfig)}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerLabel}>
                <Label style={lableStyle} textStyle={textLabelStyle} value={mappingStatus(status)}/>
            </View>
        </TouchableOpacity>
    );
};


const MemoizedCardTransaction = React.memo(CardTransaction);
export { MemoizedCardTransaction as CardTransaction };

const styles = StyleSheet.create({
    containerCard : {
        backgroundColor : 'white',
        borderRadius : 4,
        height : 96,
        flexDirection : 'row',
        justifyContent : 'space-between',
        overflow : 'hidden',
    },
    wrapperSenderBankAndReceiver : {
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 4,
    },
    wrapperTransactionDateAndAmount : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    containerLabel : {
        justifyContent : 'center',
         marginRight : 16,
    },
    statusPendingIndicator : {
        height : '100%',
        width :8,
        backgroundColor : COLOR.STATUS_INDICATOR_PENDING,
    },
    statusSuccessIndicator : {
        height : '100%',
        width :8,
        backgroundColor : COLOR.STATUS_INDICATOR_SUCCESS,
    },
    containerTransactionData : {
        marginLeft : 16,
        flexDirection : 'column',
        justifyContent : 'center',
    },
    wrapperTransactionData : {
        flexDirection : 'row',
    },
    textBank: {
        fontSize : 14,
        fontWeight : 'bold',
    },
    textName : {
        fontSize : 14,
        fontWeight : '500',
        marginBottom : 4,
    },
    textAmout :{
        fontSize : 14,
        fontWeight : '500',

    },
    textDateTransaction : {
        fontSize : 14,
        fontWeight : '500',
    },
    textArrow : {
        fontSize : 16,
    },
    dot : {
        height : 6,
        width  :6,
        borderRadius : 6,
        backgroundColor : 'black',
        marginHorizontal : 4,
    },
    labelPending : {
        borderColor : COLOR.STATUS_INDICATOR_PENDING,
        borderWidth : 2,
    },
    textLabelPending : {
        fontSize : 12,
        fontWeight : '600',
    },
    labelSuccess : {
        backgroundColor : COLOR.STATUS_INDICATOR_SUCCESS,
    },
    textLabelSuccess : {
        fontSize : 12,
        fontWeight : '600',
        color : '#FFFF',
    },
});
