import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const PhotoItem = (props) => {
  const { item } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <Image 
          style={styles.canvas} 
          resizeMode="contain" 
          source={{uri: item.uri}}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    margin: 10,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  preview: {
    width: '100%',
    height: 200,
    alignItems: 'flex-start',
    position: 'relative'
  }
});