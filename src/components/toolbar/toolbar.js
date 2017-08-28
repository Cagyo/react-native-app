import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { ToolbarItem } from './toolbar-item';

export const Toolbar = (props) => {
  const { items, onPress } = props;

  return (
    <View style={styles.container}>
      {items.map(item =>
        (
          <ToolbarItem
            key={item.title}
            item={item}
            onPress={onPress}
          />
        ),
      )}
    </View>
  );
};

Toolbar.propTypes = {
  onPress: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderTopColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
});
