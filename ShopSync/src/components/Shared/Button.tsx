import React from 'react';
import {
  Pressable,
  StyleSheet,
  ActivityIndicator,
  View,
  DimensionValue,
} from 'react-native';

import { TextComponent } from './Text';
import { colours } from '../../constants';
import { TextProps } from '../types';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'text' | 'outlined' | 'contained';
  buttonColour?: string;
  textColour?: string;
  fontSize?: TextProps['size'];
  loading?: boolean;
  icon?: React.ReactNode;
  accessibilityLabel?: string;
  testId?: string;
  mt?: number;
  mb?: number;
  w?: DimensionValue;
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
};

const CustomButton = ({
  title,
  onPress,
  variant = 'contained',
  buttonColour,
  textColour = colours.white,
  fontSize = 'base',
  loading = false,
  icon = null,
  accessibilityLabel,
  testId = 'button',
  mt = 0,
  mb = 0,
  w = '90%',
  align = 'center',
}: ButtonProps) => {
  let buttonStyle;
  let iconElement;

  if (variant === 'contained') {
    buttonStyle = {
      ...styles.contained,
      backgroundColor: buttonColour ?? colours.primary,
    };
  } else if (variant === 'outlined') {
    buttonStyle = {
      ...styles.outlined,
      borderColor: buttonColour ?? colours.primary,
    };
  } else {
    buttonStyle = styles.text;
  }

  if (loading) {
    buttonStyle = {
      ...buttonStyle,
      opacity: 0.7,
    };
  }

  if (icon) {
    iconElement = <View style={styles.icon}>{icon}</View>;
  }

  return (
    <Pressable
      style={[
        buttonStyle,
        loading && styles.disabled,
        { marginTop: mt, marginBottom: mb, width: w, alignSelf: align },
      ]}
      onPress={!loading ? onPress : undefined}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      disabled={loading}
      testID={testId}>
      {loading ? (
        <ActivityIndicator size="small" color={textColour ?? colours.white} />
      ) : (
        <View style={styles.content}>
          {iconElement}
          <TextComponent text={title} color={textColour} size={fontSize} />
        </View>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  contained: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  outlined: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    padding: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  disabled: {
    opacity: 0.7,
  },
});
