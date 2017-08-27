import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export class InputText extends React.Component {
  state = {
    text: '',
  }

  handleChange = (text) => this.setState({text});

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, paddingLeft: 10, paddingRight: 10}}
          onChangeText={this.handleChange}
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