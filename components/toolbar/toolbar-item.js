import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withHandlers, compose } from 'recompose';

export const toolbarItemEnhance = compose(
  withHandlers({
    handleClick: (props) => () => {
      const { item, onPress } = props;

      onPress(item);
    },
  }),
);

const Item = (props) => {
  const { item, handleClick } = props;
  console.log(handleClick);
  return (
    <TouchableHighlight underlayColor="#ffffff" onPress={handleClick} style={styles.container}>
      <View style={styles.container}>
        <Ionicons name={item.icon} size={32} color="gray" />
        <Text style={styles.text}>
          {item.title}
        </Text>
      </View>
    </TouchableHighlight >
  );
}

export const ToolbarItem = toolbarItemEnhance(Item);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  }
});