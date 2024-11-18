import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../core/constant/color';

interface RadioButtonProps {
    onPress : (selected : boolean) => void;
    selected : boolean;
    label : string;
}

const RadioButton : FC<RadioButtonProps> = ({onPress, selected, label}) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => onPress(selected)}  style={styles.outerRadioButton}>
                {selected && <View style={styles.innerRadioButton}/>}
            </TouchableOpacity>

            <Text style={styles.textRadioButton}>{label}</Text>
        </View>
    );
};

const memoizedRadioButton = React.memo(RadioButton);
export { memoizedRadioButton as RadioButton };

const styles = StyleSheet.create({
    wrapper : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    outerRadioButton : {
        height : 24,
        width : 24,
        borderWidth : 3,
        borderRadius : 24,
        borderColor : COLOR.PRIMARY,
        justifyContent : 'center',
        alignItems : 'center',
    },
    textRadioButton : {
        marginLeft : 16,
        fontSize : 16,
        fontWeight : '500',
    },
    innerRadioButton : {
        height : 24 - 12,
        width : 24 - 12,
        borderRadius : 24,
        backgroundColor : COLOR.PRIMARY,
    },
});
