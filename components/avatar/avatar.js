import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, TouchableHighlight, Button } from 'react-native';

export const Avatar = (props) => {
  const { onPress, uri } = props;

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri }}
        />
      </TouchableHighlight>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          color="#ffa500"
          onPress={onPress}
          title="Change avatar"
        />
      </View>
    </View>
  );
};

Avatar.propTypes = {
  onPress: PropTypes.func.isRequired,
  uri: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  button: {
    width: 100,
    height: 40,
  },
});
