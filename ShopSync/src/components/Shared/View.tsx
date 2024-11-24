import React from 'react';
import { View, ViewStyle } from 'react-native';

type ViewProps = {
  mt?: number;
  mb?: number;
  w?: number | string;
  p?: number;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: object;
  children?: React.ReactNode;
};

export const ViewComponent = ({
  mt = 0,
  mb = 0,
  w = '90%',
  p = 0,
  align = 'center',
  style = {},
  children,
  ...props
}: ViewStyle & ViewProps) => {
  return (
    <View
      style={{
        marginTop: mt,
        marginBottom: mb,
        width: w,
        padding: p,
        alignSelf: align,
        ...style,
      }}
      {...props}>
      {children}
    </View>
  );
};
