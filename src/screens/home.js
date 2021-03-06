import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ImagePicker } from 'expo';
import { connectActionSheet } from '@expo/react-native-action-sheet';
import { connect } from 'react-redux';
import { PhotoList, Toolbar } from '../components';
import { addToList } from '../ducks/list';

const toolbarItems = [{
  icon: 'md-add-circle',
  title: 'Add new photo',
  path: 'Create',
}, {
  icon: 'md-contact',
  title: 'Profile',
  path: 'Profile',
}];

const mapStateToProps = state => ({
  items: state.list.items,
});

@connect(mapStateToProps)
@connectActionSheet
export class HomeScreen extends React.Component {
  static propTypes = {
    showActionSheetWithOptions: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
    items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.addImageFromGallery = this.addImageFromGallery.bind(this);
    this.addImageFromCamera = this.addImageFromCamera.bind(this);
  }

  async addImageFromCamera() {
    const result = await ImagePicker.launchCameraAsync();

    this.updateItems(result);
  }

  async addImageFromGallery() {
    const result = await ImagePicker.launchImageLibraryAsync();

    this.updateItems(result);
  }

  updateItems = (result) => {
    const { dispatch } = this.props;

    if (result.cancelled) {
      return;
    }

    dispatch(addToList({
      title: result.uri,
      uri: result.uri,
    }));
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

  handlePress = (item) => {
    const { navigation } = this.props;

    switch (item.path) {
      case 'Profile':
        navigation.navigate(item.path);
        break;
      case 'Create':
        this.showModal();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainView}>
          <PhotoList
            items={this.props.items}
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
  },
});
