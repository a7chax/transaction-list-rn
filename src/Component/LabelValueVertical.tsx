import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


interface TransactionDataProps {
    label : string;
    value : string;
}

export const LabelValueVertical : React.FC<TransactionDataProps> = ({label,value}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{label}</Text>
            <Text>{value}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width : 150,
        height : 50,
    },
    textLabel : {
        fontSize : 14,
        fontWeight : '600',
        marginBottom : 4,
    },
});
