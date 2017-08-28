import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PhotoItem } from './photo-item';

export const PhotoList = (props) => {
  const { items } = props;

  return (
    <View style={styles.container}>
      {items && items.map(item =>
        (
          <PhotoItem
            key={item.title}
            item={item}
          />
        )
      )}
      {!items.length &&
          <View style={styles.noItems}>
            <Text>No items</Text>
          </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItems: {
    flex: 1,
  }
});
