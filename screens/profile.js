import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Label, InputText, Avatar } from '../components';

export const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar />
      </View>
      <View style={styles.input}>
        <Label title="User name" />
        <InputText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  input: {
    
  }
});
