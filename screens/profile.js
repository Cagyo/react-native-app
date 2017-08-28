import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Label, InputText, Avatar } from '../components';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { ImagePicker } from 'expo';

@connectActionSheet
export class ProfileScreen extends React.Component {
  state = {
    avatarUri: 'https://facebook.github.io/react/img/logo_og.png',
    userName: '',
  };

  constructor(props) {
    super(props);
    this.addImageFromGallery = this.addImageFromGallery.bind(this);
    this.addImageFromCamera = this.addImageFromCamera.bind(this);
  }

  async addImageFromCamera() {
    let result = await ImagePicker.launchCameraAsync();

    this.updateItems(result);
  }

  async addImageFromGallery() {
    let result = await ImagePicker.launchImageLibraryAsync();
    
    this.updateItems(result);
  }

  updateItems = (result) => {
    if (result.cancelled) {
      return;
    }

    this.setState({
      avatarUri: result.uri
    });
  }

  showModal = () => {
    let options = ['Capture from camera', 'Take from gallery', 'Cancel'];

    this.props.showActionSheetWithOptions(
      {
        options,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.addImageFromCamera()
            break;
          case 1: 
            this.addImageFromGallery();
            break;
        }
      }
    );
  }

  changeUserName = (text) => {
    console.log(text);
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
  input: {
    
  }
});
