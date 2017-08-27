import React from 'react';
import { StyleSheet, Image, View, TouchableHighlight, CameraRoll, Button } from 'react-native';
import { Camera, Permissions, DocumentPicker, ImagePicker } from 'expo';

export class Avatar extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  constructor(props) {
    super(props);
    this.takeAndUploadPhotoAsync = this.takeAndUploadPhotoAsync.bind(this);
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    /* const { status } = await Permissions.askAsync('READ_EXTERNAL_STORAGE'); */
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async takeAndUploadPhotoAsync() {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result = await ImagePicker.launchImageLibraryAsync();
  
    if (result.cancelled) {
      return;
    }
    this.setState({uri: result.uri});
    console.log(result.uri);
  
    /* // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('photo', { uri: localUri, name: filename, type }); */
  
    /* return await fetch(YOUR_SERVER_URL, {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    }); */
  }

  handlePress = () => {
    const temp = DocumentPicker.getDocumentAsync();
    console.log(temp);
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.takeAndUploadPhotoAsync}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: this.state.uri || 'https://facebook.github.io/react/img/logo_og.png' }}
          ></Image>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            color="#ffa500"
            onPress={this.takeAndUploadPhotoAsync}
            title="Change avatar"
          />
        </View>
      </View>
    );
  }
}

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
  }
});