// create a custom loading indicator component
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colours } from '../../constants';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colours.primary} />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});
