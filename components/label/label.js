import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Label = (props) => {
  const { title } = props;
  
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});