import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PhotoList, Toolbar } from '../components';
import { ImagePicker } from 'expo';
import { connectActionSheet } from '@expo/react-native-action-sheet';

const toolbarItems = [{
  icon: 'md-add-circle',
  title: 'Add new photo',
  path: 'Create',
}, {
  icon: 'md-contact',
  title: 'Profile',
  path: 'Profile',
}];

@connectActionSheet 
export class HomeScreen extends React.Component {
  state = {
    items: [],
  }

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
      items: [
        ...this.state.items, 
        {
          title: result.uri, 
          uri: result.uri
        }
      ]
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

  handlePress = (item) => {
    const { navigation } = this.props;

    switch (item.path) {
      case 'Profile':
        navigation.navigate(item.path);
        break;
      case 'Create':
        this.showModal();
        break;
    }
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainView}>
          <PhotoList
            items={this.state.items}
          />
        </ScrollView>
        <View style={styles.toolbar}>
          <Toolbar items={toolbarItems} onPress={this.handlePress} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  mainView: {
  },
  toolbar: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  }
});
