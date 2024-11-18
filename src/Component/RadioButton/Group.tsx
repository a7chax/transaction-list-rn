import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RadioButton } from './';

export interface IRadioOption {
  label: string;
  value: string
}

interface RadioButtonGroupProps {
  options: IRadioOption[];
  selectedValue: IRadioOption;
  onSelectionChange: (value: IRadioOption) => void;
}

export  function RadioButtonGroup({
  options,
  onSelectionChange,
  selectedValue,
}: RadioButtonGroupProps) {


  const handlePress = (value: IRadioOption) => {
    onSelectionChange(value);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <View key={index} style={styles.gapItemRadioButton}>
            <RadioButton
            selected={selectedValue.value === option.value}
            onPress={() => handlePress(option)}
            label={option.label}
            />
        </View>
      ))}
    </View>
  );
}

const memoizedRadioButtonGroup = React.memo(RadioButtonGroup);
export default memoizedRadioButtonGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  gapItemRadioButton : {
    marginBottom : 36,
  },
});
