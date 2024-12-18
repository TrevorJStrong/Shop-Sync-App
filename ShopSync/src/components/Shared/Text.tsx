import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colours, font_sizes, fonts } from '../../constants';
import { TextProps } from '../types';

export const TextComponent = ({
  text,
  style,
  size = 'base',
  color = colours.primary,
  align = 'left',
  weight = 'regular',
  testId = 'text',
}: TextProps) => {
  return (
    <Text
      style={{
        ...style,
        fontSize: font_sizes[size],
        fontFamily: styles[weight as keyof typeof styles].fontFamily,
        color: color,
        textAlign: align,
      }}
      testID={testId}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontFamily: fonts.regular,
  },
  bold: {
    // fontFamily: fonts.semiBold,
  },
});
