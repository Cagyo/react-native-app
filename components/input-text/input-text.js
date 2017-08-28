import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';

export class InputText extends React.Component {
  static propTypes = {
    onBlur: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
  }

  state = {
    text: '',
  }

  handleChange = (text) => {
    this.setState({ text });
  }

  handleBlur = () => {
    this.props.onBlur(this.state.text);
  }

  render() {
    const { defaultValue } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, paddingLeft: 10, paddingRight: 10 }}
          onBlur={this.handleBlur}
          onChangeText={this.handleChange}
          defaultValue={defaultValue}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
