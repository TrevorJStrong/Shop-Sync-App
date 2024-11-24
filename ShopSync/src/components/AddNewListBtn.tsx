import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomButton from './Shared/Button';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const AddNewListBtn = ({ title, onPress }: ButtonProps) => {
  return (
    <View style={styles.button}>
      <CustomButton title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
  },
});
