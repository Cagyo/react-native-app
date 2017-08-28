import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { ImagePicker } from 'expo';
import { Label, InputText, Avatar } from '../components';

@connectActionSheet
export class ProfileScreen extends React.Component {
  static propTypes = {
    showActionSheetWithOptions: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.addImageFromGallery = this.addImageFromGallery.bind(this);
    this.addImageFromCamera = this.addImageFromCamera.bind(this);
  }

  state = {
    avatarUri: 'https://facebook.github.io/react/img/logo_og.png',
    userName: '',
  };

  async addImageFromCamera() {
    const result = await ImagePicker.launchCameraAsync();

    this.updateItems(result);
  }

  async addImageFromGallery() {
    const result = await ImagePicker.launchImageLibraryAsync();

    this.updateItems(result);
  }

  updateItems = (result) => {
    if (result.cancelled) {
      return;
    }

    this.setState({
      avatarUri: result.uri,
    });
  }

  showModal = () => {
    const options = ['Capture from camera', 'Take from gallery', 'Cancel'];

    this.props.showActionSheetWithOptions(
      {
        options,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            this.addImageFromCamera();
            break;
          case 1:
            this.addImageFromGallery();
            break;
          default:
            break;
        }
      },
    );
  }

  changeUserName = (text) => {
    this.setState({ userName: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            uri={this.state.avatarUri}
            onPress={this.showModal}
          />
        </View>
        <View style={styles.input}>
          <Label title="User name" />
          <InputText
            onBlur={this.changeUserName}
            defaultValue={this.state.userName}
          />
        </View>
      </View>
    );
  }
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
  input: {},
});
