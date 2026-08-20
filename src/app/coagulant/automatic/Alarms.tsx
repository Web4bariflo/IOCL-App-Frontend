import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlarmScreen() {
  return (
    <View style={styles.container}>
      <Text>Alarms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
