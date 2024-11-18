import React from 'react';
import {  Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { FilterSortTransactions } from '@ModuleTransaction/domain/entity/ITransaction';
import { IRadioOption, RadioButtonGroup } from '@component/RadioButton/Group';

interface ModalFilterTransactionProps {
    isVisible : boolean;
    selectFilter : (filter : IRadioOption) => void;
    selectedFilter : IRadioOption;
    onDismiss? : () => void;
}

export const ModalFilterTransaction : React.FC<ModalFilterTransactionProps> = ({
    isVisible,
    selectFilter,
    onDismiss,
    selectedFilter,
}) => {

    const options: { label: string; value: FilterSortTransactions }[] = [
        { label: 'Nama A-Z', value: 'atoz' },
        { label: 'Nama Z-A', value: 'ztoa' },
        { label: 'Tanggal Terbaru', value: 'tanggal_terbaru' },
        { label: 'Tanggal Terlama', value: 'tanggal_terlama' },
    ];

    return(
        <Modal
        animationType="none"
        transparent={true}
        visible={isVisible}>
        <TouchableWithoutFeedback onPress={onDismiss}>
            <View style={styles.centeredView}>
            <TouchableWithoutFeedback>
                <View style={styles.modalView}>
                <RadioButtonGroup
                    options={options}
                    selectedValue={selectedFilter}
                    onSelectionChange={(value) => selectFilter(value)}
                />
                </View>
            </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 12,
      paddingVertical : 36,
      paddingHorizontal : 24,
      width : '90%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
