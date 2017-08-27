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
      {!items &&
          <Text>No items</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    /* flexDirection: 'row', */
    justifyContent: 'center',
    alignItems: 'center',
  },
});
