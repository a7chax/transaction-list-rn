import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

interface LabelProps  {
    value : string;
    textStyle? : StyleProp<TextStyle>;
    style? : StyleProp<ViewStyle>;
}

 const Label: React.FC<LabelProps> = ({ value, textStyle, style }) => {
    return (
        <View style={[styles.labelShape, style]}>
            <Text style={textStyle}>{value}</Text>
        </View>
    );
};


const MemoizedLabel = React.memo(Label);
export { MemoizedLabel as Label };

const styles = StyleSheet.create({
    labelShape : {
        borderRadius : 6,
        paddingHorizontal : 8,
        paddingVertical : 4,
    },
});
