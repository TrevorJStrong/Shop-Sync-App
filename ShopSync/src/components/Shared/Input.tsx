import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { colours, fonts } from '../../constants';

type InputProps = TextInputProps & {
  width?: string;
};

const CustomInput = ({ ...props }: InputProps) => {
  return (
    <TextInput
      style={[styles.input]}
      {...props}
      placeholderTextColor={colours.primary}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colours.primary,
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 5,
    fontFamily: fonts.regular
  },
});
