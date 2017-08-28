import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

export const Label = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

Label.propTypes = {
  title: PropTypes.string,
};

Label.defaultProps = {
  title: '',
};

const styles = StyleSheet.create({
  container: {

  },
});
