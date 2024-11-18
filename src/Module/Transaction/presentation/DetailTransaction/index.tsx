import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDetailTransaction } from './useDetailTransaction';
import { IconCopy } from '@assets/Icon/IconCopy';
import { COLOR } from '@core/constant/color';
import { LabelValueVertical } from '@component/LabelValueVertical';
import { formatCurrency, formatDateByLocale } from '@core/utility';

export const DetailTransactionScreen = () => {

    const {dataTransaction, goBack, dateConfig, copyTransactionId} = useDetailTransaction();
    return (
        <ScrollView>
            <View style={styles.containerTransactionID}>
                <Text style={styles.textIDTransaction}>{`ID TRANSAKSI: #${dataTransaction.id}`}</Text>
                <TouchableOpacity onPress={() => copyTransactionId(dataTransaction.id)}>
                    <IconCopy stroke={COLOR.PRIMARY}/>
                </TouchableOpacity>
            </View>

            <View style={styles.containerDetailTransactionSection}>
                <Text style={styles.textIDTransaction}>DETAIL TRANSACTION</Text>
                <TouchableOpacity onPress={goBack}>
                    <Text style={styles.textCloseButton}>Tutup</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerTransactionData}>
                <View style={styles.containerBankSenderAndBeneficiary}>
                    <Text style={styles.textBank}>{dataTransaction.senderBank}</Text>
                    <Text style={styles.textArrow}> ➔ </Text>
                    <Text style={styles.textBank}>{dataTransaction.beneficaryBank}</Text>
                </View>

                <View style={styles.wrapperTransactionData}>
                    <LabelValueVertical label={dataTransaction.beneficaryName} value={dataTransaction.accountNumber}/>
                    <LabelValueVertical label={'NOMINAL'} value={formatCurrency(dataTransaction.amount, 'IDR')}/>
                    <LabelValueVertical label={'BERITA TRANSFER'} value={dataTransaction.remark}/>
                    <LabelValueVertical label={'KODE UNIK'} value={dataTransaction.uniqueCode.toString()}/>
                    <LabelValueVertical label={'WAKTU DIBUAT'} value={formatDateByLocale(dataTransaction.createdAt, 'id-ID', dateConfig)}/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textIDTransaction : {
        fontSize : 16,
        fontWeight : 'bold',
        marginRight : 8,
    },
    textCloseButton : {
        fontSize : 16,
        fontWeight : 'semibold',
        color : COLOR.PRIMARY,
    },
    textArrow : {
        fontSize : 16,
    },
    textBank: {
        fontSize : 16,
        fontWeight : 'bold',
    },
    containerTransactionData : {
        backgroundColor : '#FFFF',
        width : '100%',
        paddingVertical : 24,
        paddingHorizontal : 16,
        flex : 1,
    },
    containerBankSenderAndBeneficiary : {
        flexDirection : 'row',
        marginBottom : 16,
    },
    containerTransactionID : {
        backgroundColor : '#FFFF',
        width : '100%',
        paddingVertical : 24,
        paddingHorizontal : 16,
        flexDirection : 'row',
        marginBottom : 2,
    },
    containerDetailTransactionSection : {
        backgroundColor : '#FFFF',
        width : '100%',
        paddingVertical : 24,
        paddingHorizontal : 16,
        borderBottomColor : 'darkgrey',
        borderBottomWidth : 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    wrapperTransactionData : {
        flexDirection : 'row',
        flexWrap :'wrap',
        justifyContent  : 'space-between',
        gap : 16,
    },
});
